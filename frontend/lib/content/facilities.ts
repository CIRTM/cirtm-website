export type FacilityIcon =
  | "scan-eye"
  | "chart-scatter"
  | "microscope"
  | "flask-conical"
  | "dna"
  | "rat"
  | "flask-round"
  | "atom"
  | "cpu";

export type FacilityPhoto = { src: string; alt: string; objectPosition?: string };

export type Facility = {
  id: string;
  icon: FacilityIcon;
  label: string;
  title: string;
  summary: string;
  photos: FacilityPhoto[];
  description: string[];
  bulletsHeading?: string;
  bullets?: string[];
};

const IMG = "/images/facilities";

export const facilities: Facility[] = [
  {
    id: "bio-imaging",
    icon: "scan-eye",
    label: "Imaging",
    title: "Bio-imaging Suite",
    summary: "Advanced fluorescence microscopy and image analysis for live cells and fixed tissues.",
    photos: [
      { src: `${IMG}/researchers-in-a-bio-imaging-suite.jpg`, alt: "Researchers in a bio-imaging suite" },
      { src: `${IMG}/Spinning-disk-microscope.jpg`, alt: "Spinning disk microscope" },
    ],
    description: [
      "Our bio-imaging suite provides access to advanced fluorescence microscopy for high-resolution imaging of live cells and fixed tissues, with integrated image analysis workstations for data processing and visualisation.",
    ],
  },
  {
    id: "flow-cytometry",
    icon: "chart-scatter",
    label: "Cell analysis",
    title: "Flow Cytometry Facility",
    summary: "Multiparameter cell analysis, immunophenotyping and fluorescence-activated cell sorting.",
    photos: [
      { src: `${IMG}/Flow-Cytometry-Facility.jpg`, alt: "Flow Cytometry Facility" },
      { src: `${IMG}/Flow-cytometer.jpg`, alt: "Flow cytometer", objectPosition: "left" },
    ],
    description: [
      "Our dedicated flow cytometry suite enables rapid multiparameter analysis of cell populations, supporting immunophenotyping, intracellular staining and fluorescence-activated cell sorting.",
    ],
  },
  {
    id: "microscopy",
    icon: "microscope",
    label: "Microscopy",
    title: "Microscopy Suite",
    summary: "Conventional and advanced light microscopy across multiple concurrent workstations.",
    photos: [{ src: `${IMG}/microscope-suite.jpg`, alt: "Researchers working at multiple microscope stations" }],
    description: [
      "The microscopy suite provides a range of conventional and advanced light microscopy platforms for cell biology, histology and pathology applications. Multiple independent workstations allow several researchers to work concurrently, with integrated digital image capture and analysis software at each station.",
    ],
    bullets: [
      "Brightfield, phase contrast and epifluorescence microscopy",
      "Multiple concurrent workstations",
      "Integrated image capture and analysis at each station",
      "Suitable for live-cell and fixed-sample imaging",
    ],
  },
  {
    id: "bioscience-labs",
    icon: "flask-conical",
    label: "Bioscience",
    title: "Bioscience Laboratories",
    summary: "Fully equipped laboratories in the Heinz Wolff Building, including cell and tissue culture.",
    photos: [
      { src: `${IMG}/bioscience-lab.jpg`, alt: "Bioscience laboratory" },
      { src: `${IMG}/tissue-culture.png`, alt: "Tissue culture laboratory" },
    ],
    description: [
      "CIRTM researchers are supported by fully equipped bioscience laboratories in the Heinz Wolff Building, providing dedicated space for cell and tissue culture work alongside a broad range of experimental techniques used across the centre's research programmes.",
    ],
  },
  {
    id: "molecular-lab",
    icon: "dna",
    label: "Molecular biology",
    title: "Molecular Laboratory",
    summary: "Nucleic acid extraction, PCR and qPCR, cloning and protein biochemistry.",
    photos: [{ src: `${IMG}/molecular-laboratory.png`, alt: "Molecular biology laboratory" }],
    description: [
      "Fully equipped molecular biology laboratories support a broad range of techniques including nucleic acid extraction, PCR and qPCR, cloning, gel electrophoresis and protein biochemistry, underpinning experimental work across all CIRTM research groups.",
    ],
  },
  {
    id: "pash-centre",
    icon: "rat",
    label: "Animal models",
    title: "The Pash Centre",
    summary: "New category 1 and 2 research facilities, including SCID and surgical suites.",
    photos: [
      { src: `${IMG}/pash-centre.webp`, alt: "Pash Centre rodent holding facility" },
      { src: `${IMG}/PashCentre.jpg`, alt: "The Pash Centre entrance" },
    ],
    description: [
      "Brunel has an expandable range of bio-annexe facilities and benefits from the expertise of highly experienced technicians, all of whom hold Personal Investigator Licences (PILs). Our technical staff have vast experience with pair breeding studies of Fathead Minnows and have also worked with various other species including Stickleback, Medaka, Sheepshead Minnows, Xenopus Laevis and Tropicalis, and snails.",
    ],
    bulletsHeading: "New state-of-the-art category 1 and 2 research facilities include:",
    bullets: [
      "A Severe Combined Immuno-Deficiency (SCID) facility with two holding rooms: one housing 320 cages and a second surgical recovery room housing 160 cages, fitted with the latest DVC monitoring system",
      "A Surgical Laboratory with an IVIS imaging system housed in a laminar flow booth",
      "A conventional unit with two holding rooms capable of housing 90 GM900 cages and 220 GM500 cages",
      "A minor procedures room",
    ],
  },
  {
    id: "bioprocessing",
    icon: "flask-round",
    label: "Bioprocessing",
    title: "Advanced Bioprocessing Centre",
    summary: "Separation and purification, from analytical scale to pilot-scale manufacture.",
    photos: [{ src: `${IMG}/bio-process-biopharma-eng.webp`, alt: "Advanced Bioprocessing Centre equipment" }],
    description: [
      "Four dedicated laboratories specialising in separation and purification techniques, supporting method development at analytical scale through to pilot-scale manufacture of trial-grade material for academic and commercial collaborations.",
    ],
    bullets: [
      "CCC centrifuges from analytical mini-scale to pilot scale (4.6 L and 18 L capacity)",
      "Robotic liquid handling for solvent selection and high-throughput method development",
      "HPLC with PDA and ELSD detectors, and GC for fraction analysis",
      "ATEX-compliant hazards laboratory with remote operation behind explosion-proof glass",
      "Walk-in fume cupboard and large-scale solvent evaporators (up to 2 × 25 L)",
      "Partnership with Dynamic Extractions Ltd, a Brunel University spinout",
    ],
  },
  {
    id: "etc",
    icon: "atom",
    label: "Cross-disciplinary",
    title: "Experimental Techniques Centre",
    summary: "Cross-disciplinary microscopy, spectroscopy and X-ray suites.",
    photos: [
      { src: `${IMG}/bragg-experimental-2.jpg`, alt: "BRAGG Experimental Techniques Centre" },
      { src: `${IMG}/bragg-experimental.png`, alt: "BRAGG Experimental Techniques Centre" },
    ],
    description: [
      "BRAGG, the Experimental Techniques Centre, is one of our cross-disciplinary centres, equipped with state-of-the-art microscopy and spectroscopy facilities and X-ray suites.",
    ],
  },
  {
    id: "organ-on-a-chip",
    icon: "cpu",
    label: "Microfluidics",
    title: "Microfluidics & Organ-on-a-chip",
    summary: "Microfluidic devices and organ-on-a-chip models for human-relevant research.",
    photos: [{ src: `${IMG}/organ-on-a-chip.webp`, alt: "Organ-on-a-chip microfluidic device" }],
    description: [
      "Platforms for the fabrication and use of microfluidic devices and organ-on-a-chip models to support translational and mechanistic biomedical research.",
    ],
  },
];
