import fs from 'fs';
import path from 'path';

export interface QueuedLead {
  id: string;
  payload: Record<string, unknown>;
  createdAt: string;
  status: 'pending' | 'failed' | 'synced';
  attempts: number;
  lastError?: string;
}

const QUEUE_FILE = path.join(process.cwd(), 'lead-queue.json');

export async function enqueueLead(payload: Record<string, unknown>, errorReason?: string): Promise<string> {
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const item: QueuedLead = {
    id: leadId,
    payload,
    createdAt: new Date().toISOString(),
    status: 'pending',
    attempts: 1,
    lastError: errorReason,
  };

  try {
    let queue: QueuedLead[] = [];
    if (fs.existsSync(QUEUE_FILE)) {
      const data = fs.readFileSync(QUEUE_FILE, 'utf-8');
      queue = JSON.parse(data);
    }
    queue.push(item);
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf-8');
    console.log(`[LeadQueue] Lead ${leadId} safely enqueued locally`);
  } catch (err) {
    console.error('[LeadQueue] Failed to write lead queue file:', err);
  }

  return leadId;
}

export async function getQueuedLeads(): Promise<QueuedLead[]> {
  try {
    if (fs.existsSync(QUEUE_FILE)) {
      const data = fs.readFileSync(QUEUE_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('[LeadQueue] Failed to read queue:', err);
  }
  return [];
}
