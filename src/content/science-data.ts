export interface ResearchReference {
  id: string;
  title: string;
  authors: string;
  publication: string;
  year: number;
  doiOrUrl: string;
  description: string;
  topic: 'HPA Axis' | 'Neuroplasticity' | 'Limbic System' | 'Subconscious Conditioning';
  order: number;
}

export interface ScienceConcept {
  id: string;
  title: string;
  subtitle: string;
  explanation: string;
  bulletPoints: string[];
}

export const scienceConcepts: ScienceConcept[] = [
  {
    id: 'hpa-axis',
    title: 'The Hypothalamic-Pituitary-Adrenal (HPA) Axis',
    subtitle: 'The Autonomic Threat Cascade',
    explanation:
      'When your sensory system perceives a threat—even an abstract one like a pending presentation or executive review—the hypothalamus activates the pituitary gland via CRH. The pituitary gland in turn signals the adrenal glands to flood adrenaline and cortisol into the bloodstream.',
    bulletPoints: [
      'Heart rate accelerates and peripheral blood vessels constrict',
      'The prefrontal cortex (rational evaluation) experiences hypofrontality',
      'The body is chemically primed to fight or flee, even while sitting calmly at an office desk',
      'Repeated activation turns this temporary survival response into a permanent automated reflex',
    ],
  },
  {
    id: 'amygdala-hijack',
    title: 'The Amygdala & Limbic Memory',
    subtitle: 'Why Logic Cannot Overrule a Nervous System Alarm',
    explanation:
      'The amygdala processes threat cues roughly twice as fast as the cerebral cortex can analyze them. If an early formative experience (such as childhood embarrassment or an unexpected shock) is encoded as dangerous, the amygdala fires before conscious thought even begins.',
    bulletPoints: [
      'Conscious reasoning arrives late to a physiological party already underway',
      'Trying to "talk yourself out of panic" fails because the alarm circuit operates sub-cortically',
      'Resolving the pattern requires accessing the original neural encoding, not arguing with the symptoms',
    ],
  },
  {
    id: 'neuroplasticity',
    title: 'Self-Directed Neuroplasticity',
    subtitle: 'Neural Circuits Can Be Decoupled & Re-formed',
    explanation:
      'Neuroplasticity is the proven biological ability of the brain to form new neural pathways and prune unused ones throughout adulthood. Neural connections follow Hebbian principles: neurons that fire together wire together, and neurons that fire apart wire apart.',
    bulletPoints: [
      'Chronic anxiety is not genetic fate or a fixed character flaw—it is an over-strengthened neural habit',
      'When the emotional charge of an old imprint is safely neutralised, the synaptic pathway begins to weaken',
      'Consistently anchoring a new calm response builds a resilient default circuit that becomes effortless over time',
    ],
  },
];

export const researchReferences: ResearchReference[] = [
  {
    id: 'ref-ledoux',
    title: 'Emotion Circuits in the Brain: Annual Review of Neuroscience',
    authors: 'Joseph E. LeDoux, Ph.D.',
    publication: 'Annual Review of Neuroscience, 23(1), 155-184',
    year: 2000,
    doiOrUrl: 'https://doi.org/10.1146/annurev.neuro.23.1.155',
    description:
      'Foundational paper establishing the dual-pathway mechanism of fear conditioning: the rapid subcortical thalamo-amygdala pathway and the slower neocortical pathway.',
    topic: 'Limbic System',
    order: 1,
  },
  {
    id: 'ref-mcewen',
    title: 'Physiology and Neurobiology of Stress and Adaptation: Central Role of the Brain',
    authors: 'Bruce S. McEwen, Ph.D.',
    publication: 'Physiological Reviews, 87(3), 873-904',
    year: 2007,
    doiOrUrl: 'https://doi.org/10.1152/physrev.00041.2006',
    description:
      'Examines allostatic load, demonstrating how sustained autonomic hyper-arousal structurally alters dendrites in the prefrontal cortex and hippocampus while expanding the basolateral amygdala.',
    topic: 'HPA Axis',
    order: 2,
  },
  {
    id: 'ref-kandel',
    title: 'The Molecular Biology of Memory Storage: A Dialogue Between Genes and Synapses',
    authors: 'Eric R. Kandel, M.D. (Nobel Laureate)',
    publication: 'Science, 294(5544), 1030-1038',
    year: 2001,
    doiOrUrl: 'https://doi.org/10.1126/science.1067020',
    description:
      'Explores the cellular mechanisms of synaptic plasticity and long-term potentiation, proving how targeted stimulation and experiential learning physically reconfigure neural architecture.',
    topic: 'Neuroplasticity',
    order: 3,
  },
  {
    id: 'ref-sapolsky',
    title: 'Why Zebras Don’t Get Ulcers: The Biology of Human Stress Response',
    authors: 'Robert M. Sapolsky, Ph.D.',
    publication: 'Henry Holt and Company / W. H. Freeman',
    year: 2004,
    doiOrUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181832/',
    description:
      'Detailed neuro-endocrinology text examining why humans uniquely trigger chronic physiological flight-or-fight cascades purely through psychological anticipatory loops.',
    topic: 'HPA Axis',
    order: 4,
  },
  {
    id: 'ref-doidge',
    title: 'The Brain That Changes Itself: Neuroplasticity and Cognitive Re-patterning',
    authors: 'Norman Doidge, M.D.',
    publication: 'Penguin Books / Psychiatric Times',
    year: 2007,
    doiOrUrl: 'https://www.psychiatrictimes.com/view/brain-changes-itself',
    description:
      'Clinical documentation demonstrating how targeted cognitive and experiential interventions restructure stubborn autonomic responses across adult populations.',
    topic: 'Neuroplasticity',
    order: 5,
  },
];
