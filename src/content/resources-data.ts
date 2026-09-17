export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  author: string;
  reviewer: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  category: 'Neuroscience' | 'Workplace Wellness' | 'Anxiety Education' | 'NLP & Mindset';
  content: string[];
  keyTakeaways: string[];
  citations?: string[];
  downloadableAsset?: {
    title: string;
    fileSize: string;
  };
}

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'why-logic-fails-during-anxiety',
    title: 'Why Logic Cannot Reason With an Amygdala in Alarm Mode',
    description:
      'Explore the neurobiology of hypofrontality: why your executive prefrontal cortex goes offline when autonomic survival circuits take over, and how to rewire the response at the root.',
    author: 'Neuro Recode Editorial Team',
    reviewer: 'Senior Protocol Facilitator',
    publishedDate: '12 January 2026',
    updatedDate: '15 September 2026',
    readTime: '6 min read',
    category: 'Neuroscience',
    keyTakeaways: [
      'The amygdala evaluates threat cues in 12–15 milliseconds; the cortex takes 30–40 milliseconds',
      'Positive thinking cannot stop an autonomic adrenaline surge that has already flooded your receptors',
      'True resolution requires decoupling the subconscious trigger, not debating with the symptoms',
    ],
    content: [
      'Almost every high-functioning professional experiencing chronic anxiety shares the same frustrating story: "I know my fear is irrational. I know the presentation will not kill me. I know my team is capable. So why does my chest tighten, my palms sweat, and my brain freeze anyway?"',
      'The answer does not lie in a lack of willpower, intelligence, or emotional maturity. It lies in neuroanatomy.',
      'When sensory information enters the brain, it routes through the thalamus. From the thalamus, sensory input splits into two distinct paths: the "low road" directly to the amygdala, and the "high road" to the neocortex.',
      'The low road is an emergency fast-track designed millions of years ago for physical survival. It processes threat in roughly 12 to 15 milliseconds. The high road—the conscious, thoughtful, rational circuit—takes nearly three times as long to process the same information.',
      'By the time your conscious mind begins to think "Wait, this is just a Monday morning meeting," your nervous system has already signaled the hypothalamus, released corticotropin-releasing hormone, and triggered an adrenaline surge. You cannot talk yourself out of an autonomic cascade that has already occurred.',
      'This is why symptom-management tools (like repeating positive affirmations or writing gratitude lists) often feel so fragile during acute stress. They operate exclusively in the neocortex while the alarm is sounding from the subconscious midbrain.',
      'To stop the loop permanently, one must work directly at the level of the initial subconscious imprint—identifying where the nervous system first learned that high expectations equated to existential threat, and recoding that automatic association.',
    ],
    citations: [
      'LeDoux, J. (1996). The Emotional Brain: The Mysterious Underpinnings of Emotional Life. Simon & Schuster.',
      'Arnsten, A. F. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. Nature Reviews Neuroscience, 10(6), 410-422.',
    ],
    downloadableAsset: {
      title: 'Neuroscience Guide: The Anatomy of an Anxious Trigger (PDF)',
      fileSize: '1.4 MB',
    },
  },
  {
    slug: 'the-high-functioning-anxiety-paradox',
    title: 'High-Functioning on the Outside, Exhausted on the Inside',
    description:
      'Why top-tier engineers, founders, and managers can deliver multimillion-dollar outcomes while living in a perpetual state of private internal dread.',
    author: 'Neuro Recode Editorial Team',
    reviewer: 'Client Delivery Team',
    publishedDate: '24 February 2026',
    updatedDate: '10 September 2026',
    readTime: '8 min read',
    category: 'Workplace Wellness',
    keyTakeaways: [
      'High performance driven by fear-based nervous system bracing leads inevitably to allostatic collapse',
      'Anxiety is frequently mislabeled as an indispensable "driver" of excellence',
      'Calm leadership produces higher cognitive bandwidth and superior strategic decision-making',
    ],
    content: [
      'High-functioning anxiety is an invisible weight. Unlike acute panic attacks that visibly disable a person, high-functioning anxiety looks like stellar performance.',
      'It looks like arriving early, double-checking every document, anticipating edge cases before anyone else, never dropping a ball, and constantly pushing for perfection. On performance reviews, it receives praise and promotions.',
      'Inside the individual, however, the engine running that performance is terror. It is the belief that if you let your guard down for even one afternoon, everything will collapse. It is the Sunday evening dread, the 3 a.m. insomnia, the jaw clenching during commutes, and the inability to ever enjoy achievements.',
      'Many professionals resist resolving their anxiety because of a hidden fear: "If I am not anxious, will I lose my edge? Will I become lazy?"',
      'The clinical neuroscience is unambiguous on this question. Chronic cortisol and adrenaline do not sharpen executive function—they degrade it over time. They cause working memory lapses, chronic fatigue, emotional reactivity, and eventual burnout.',
      'When you recode the underlying fear circuit, you do not lose your competence or drive. You simply remove the friction. You switch from driving with the handbrake permanently engaged to flowing with effortless clarity.',
    ],
    citations: [
      'McEwen, B. S. (2008). Central effects of stress hormones in health and disease: Understanding the protective and damaging effects of stress. Dialogues in Clinical Neuroscience, 8(4), 367-381.',
    ],
  },
  {
    slug: 'neuroplasticity-and-subconscious-rewiring',
    title: 'How Neuroplasticity Allows Adult Nervous Systems to Unlearn Anxiety',
    description:
      'Understanding synaptic plasticity, Hebbian learning, and why clinical hypnotherapy and timeline NLP produce lasting neurological shifts.',
    author: 'Neuro Recode Editorial Team',
    reviewer: 'Clinical Hypnotherapy Advisor',
    publishedDate: '18 March 2026',
    updatedDate: '01 September 2026',
    readTime: '7 min read',
    category: 'NLP & Mindset',
    keyTakeaways: [
      'Adult neuroplasticity allows old associative threat memories to be reconsolidated into neutral memories',
      'Hypnotic states bypass critical analytical censorship to access deep subconscious neural networks',
      'Integration requires a structured 90-day reinforcement window to cement new behavioral defaults',
    ],
    content: [
      'For decades, conventional medicine assumed the adult brain was relatively hardwired. It was believed that once childhood development concluded, the neural circuits governing personality, emotional reactivity, and stress responses were fixed.',
      'The modern revolution in neuroplasticity has thoroughly demolished that dogma. We now know that synapses continuously remodel in response to focused attention, intense experiential re-evaluation, and repetitive reinforcement.',
      'When an anxiety pattern persists for 10, 20, or 30 years, it is not because the person is broken. It is because that neural pathway has been reinforced thousands of times. Every time a presentation triggers panic and the person survives it, the brain paradoxically concludes: "The panic saved our life. We must run that panic routine again next time."',
      'To disrupt this reflexive loop, the Neuro Recode protocol uses a three-stage sequence: Decode, Rewire, and Reinforce.',
      'In Decode, we identify the exact root imprint. In Rewire, using targeted NLP timeline work and focused hypnotic states, we safely discharge the emotional urgency stored in that memory. In Reinforce, we anchor the new physiological state across everyday contexts until it becomes the brain’s effortless, permanent default.',
    ],
    citations: [
      'Kandel, E. R. (2001). The Molecular Biology of Memory Storage. Science, 294(5544), 1030-1038.',
      'Nader, K., & Hardt, O. (2009). A single standard for memory: the case for reconsolidation. Nature Reviews Neuroscience, 10(3), 224-234.',
    ],
  },
];
