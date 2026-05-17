export type Seminar = {
  slug: string;
  title: string;
  date: string;
  speaker?: string;
  speakerAffiliation?: string;
  location?: string;
  registrationLink?: string;
  recordingLink?: string;
  cancelled?: boolean;
};

export const seminars: Seminar[] = [
  {
    slug: "immune-biomarkers-tb-2020",
    title: "Immune biomarkers of vaccine-induced protection against tuberculosis",
    date: "2020-10-29",
    speaker: "Dr Steven Smith",
    speakerAffiliation: "Brunel University London",
    location: "Online – 13:00",
  },
  {
    slug: "genetic-epidemiology-cvd-2020",
    title: "Genetic Epidemiology Studies on over half million individuals to understand cardiovascular disease",
    date: "2020-11-19",
    speaker: "Dr Raha Pazoki",
    speakerAffiliation: "Brunel University London",
    location: "Online – 13:00",
  },
  {
    slug: "life-death-uganda-2020",
    title: "Life and death in Uganda: immunity (or not) to tuberculosis",
    date: "2020-11-26",
    speaker: "Dr Stephen Cose",
    speakerAffiliation: "MRC/UVRI & LSHTM Uganda Research Unit",
    location: "Online – 13:00",
    cancelled: true,
  },
  {
    slug: "tb-treatment-transcriptomics-2021",
    title: "Optimising Tuberculosis Treatment Outcomes: an immunological approach using blood transcriptomics",
    date: "2021-01-28",
    speaker: "Dr Jackie Cliff",
    speakerAffiliation: "London School of Hygiene and Tropical Medicine",
    location: "Online – 13:00",
  },
  {
    slug: "zebrafish-brain-imaging-2021",
    title: "Functional brain imaging in non-protected larval zebrafish: a more 3Rs-friendly way to detect drug-induced seizures",
    date: "2021-02-25",
    speaker: "Dr Matthew Winter",
    location: "Online – 13:00",
  },
  {
    slug: "gammarus-neuroactive-chemicals-2021",
    title: "Linking behavioural and metabolic disruption in a freshwater invertebrate, Gammarus pulex, exposed to neuroactive chemicals",
    date: "2021-03-25",
    speaker: "Dr Thomas Miller",
    location: "Online",
  },
  {
    slug: "life-death-uganda-2021",
    title: "Life and death in Uganda: immunity (or not) to tuberculosis",
    date: "2021-04-29",
    speaker: "Dr Stephen Cose",
    speakerAffiliation: "MRC/UVRI & LSHTM Uganda Research Unit",
    location: "Online – 13:00",
  },
  {
    slug: "camp-signalling-mtb-2021",
    title: "The Role of cAMP Signalling in Antibiotic Tolerance in Mycobacterium tuberculosis",
    date: "2021-05-27",
    speaker: "Gerald Larrouy-Maumus",
    speakerAffiliation: "Imperial College London",
    location: "Online",
  },
];
