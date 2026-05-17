import { felicityGavinsPublications, type PersonPublication } from "./publications-felicity-gavins";
import { suLingLiPublications } from "./publications-su-ling-li";
import { ronanMccarthyPublications } from "./publications-ronan-mccarthy";
import { rahaPazokiPublications } from "./publications-raha-pazoki";
import { jacquelineCliffPublications } from "./publications-jacqueline-cliff";
import { anthonyTsolakiPublications } from "./publications-anthony-tsolaki";
import { stevenSmithPublications } from "./publications-steven-smith";
import { arturoSalaPublications } from "./publications-arturo-sala";
import { ashleyHouldenPublications } from "./publications-ashley-houlden";
import { keithRedpathPublications } from "./publications-keith-redpath";
import { samWillcocksPublications } from "./publications-sam-willcocks";
import { camillaCeruttiPublications } from "./publications-camilla-cerutti";
import { doreenLauPublications } from "./publications-doreen-lau";
import { veenaKumariPublications } from "./publications-veena-kumari";

export type MemberType = "pi" | "doctoral-researcher" | "associate-member" | "professional-services";

export type PersonSections = {
  research?: string;
  researchGrants?: string;
  teaching?: string;
  impact?: string;
  phdTopics?: string;
};

export type ExternalLink = { label: string; url: string };

export type Person = {
  slug: string;
  name: string;
  memberType: MemberType;
  role?: string;
  email?: string;
  tel?: string;
  office?: string;
  division?: string;
  department?: string;
  college?: string;
  externalLinks?: ExternalLink[];
  photoUrl?: string;
  bio?: string;
  sections?: PersonSections;
  publications?: PersonPublication[];
  researchAreaSlugs?: string[];
  order?: number;
};

export const people: Person[] = [
  {
    slug: "felicity-gavins",
    name: "Prof. Felicity N. E. Gavins",
    memberType: "pi",
    role: "Centre Director — Professor of Pharmacology, Royal Society Wolfson Fellow",
    email: "felicity.gavins@brunel.ac.uk",
    division: "Biosciences",
    tel: "+44 (0)1895 267151",
    office: "Heinz Wolff 111",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0001-7008-5423" },
      { label: "Twitter", url: "https://twitter.com/gavins_lab" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/felicity-n-e-gavins" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=IqQC28YAAAAJ&hl=en" },
      { label: "PubMed", url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=gavins+f" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Felicity-Gavins-2" },
      { label: "Web of Science ResearcherID", url: "https://publons.com/researcher/3795569/felicity-n-e-gavins/" },
      { label: "Lab website", url: "http://www.gavins-lab.com/" },
    ],
    photoUrl: "/images/people/felicity-gavins.jpg",
    researchAreaSlugs: ["inflammation", "cardiovascular-diseases", "drug-repurposing", "cancer"],
    publications: felicityGavinsPublications,
    bio: `## Summary

Felicity read Pharmacology at the University of Sunderland, where she also embarked on an industrial placement year at Bayer Pharmaceuticals in Slough. After completing her BSc (Hons), she moved to London to study for a Ph.D. in Pharmacology at Queen Mary University London, supported by the British Heart Foundation (BHF). Felicity was then awarded a BHF Junior Research Fellowship to undertake further research both in the UK and the USA.

In 2007 Felicity joined Imperial College London to take up a Lectureship position in the Centre for Integrative Mammalian Physiology and Pharmacology (CIMPP). This was shortly followed by a senior lectureship and the appointment to Deputy Head of The Centre of Neurodegeneration & Neuroinflammation. In 2013 she accepted an academic position in the USA at Louisiana State University Health Sciences Center-Shreveport (LSUHSC-S) and was appointed Director of The Small Animal Imaging Facility.

Felicity is a Fellow of the British Pharmacological Society and of the Royal Society of Biology. She joined Brunel University London in August 2019 as Professor of Pharmacology and Royal Society Wolfson Fellow, and is the Director of The Centre for Inflammation Research and Translational Medicine (CIRTM).

Throughout her academic career, Felicity has worked with and served on numerous national and international research councils, medical charities and learned societies. She has published widely in her field and received a number of awards and honours for her work. She has received funding for her research from a range of funders including: the Royal Society and the Wolfson Foundation (RSWF), the British Heart Foundation (BHF), the Medical Research Council (MRC), the Biotechnology and Biological Sciences Research Council (BBSRC), the American Heart Association (AHA), and the National Institutes of Health/National Heart, Lung, and Blood Institute (NIH/NHLBI).

Felicity continues to be actively involved in public and patient organizations which has been immensely instructive for her research. She is also dedicated to promoting mentoring and collaborative research, along with facilitating mentoring of post-doctoral fellows/early-career investigators.

## Qualifications

- BSc (Hons)
- Ph.D.
- FRSB
- FBPhS
- FHEA

## Responsibility

- Director of The Centre for Inflammation Research and Translational Medicine (CIRTM).
- Academy of Sciences Springboard champion for Brunel.

### Committees

- University Animal Welfare Ethical Review Board (AWERB)
- University Springboard committee for the Academy of Sciences (Chair)
- College Research Strategy Group (CRSG)
- College Bio-Annex management board
- College Academic Probationary Review Panel
- College Post-Doctoral Researcher review committee
- College academic recruitment panel
- Open Research Working Group`,
    sections: {
      research: `## Research area(s)

The principle focus of my research is elucidate and understand the complex roles played by immune cells in vascular inflammation and thrombosis. The aim of my research it to design tailored next generation therapeutics for inflammatory pathologies that temper inflammation and enhance resolution.

Within the continuum of an inflammatory response, the objective of my research is to study the role of the microvasculature as a dynamic-interface between circulating blood cells and immune cells (such as neutrophils and platelets) and tissue. My lab focuses on how circulating cells communicate, adhere and migrate across the endothelium and the pathways by which these circulating and resident cells can render systemic inflammatory responses and alter local inflammatory and thrombotic states. By targeting the pathophysiology of endogenous pro-resolving pathways such as the Annexin A1-Formyl Peptide Receptor (AnxA1-FPR) pathway, we hope to identify novel and innovative anti-inflammatory therapeutics for the treatment of cardiovascular and cerbrovascular diseas

The research in my laboratory crosses the boundaries between Integrative physiology and pharmacology and uses multidisciplinary approaches to advance understanding of the vascular physiology and pathophysiology of inflammatory and related disorders, at the molecular, cellular, tissue and whole organism levels. To achieve this goal, we use a technological toolbox compromising of various experimental in-silico , in-vitro and in-vivo systems and advanced imaging modalities (including confocal intravital microscopy, magnetic resonance imaging [MRI]; positron emission tomography [PET], and in-vivo imaging systems [IVIS]), coupled with multi-omics approaches to dissect the contribution of neutrophils and platelets in inflammation, thrombosis and vascular dysfunction.

## Research Interests

- Inflammation

- Thrombosis (arterial and venous)

- Resolution of inflammation

- Immune mediated responses in normal and pathological conditions

- Neutrophil-Platelet interactions

- Ischaemia reperfusion injury (I/RI)

- Healthy ageing

- Formyl Peptide Receptors (FPRs)

- Annexin A1 Biology

- Sickle Cell Disease

- Inflammation in Cancer

- Pre-clinical imaging

- Drug discovery and resolution biologics

- Novel drug delivery systems e.g Nanocarriers`,
      researchGrants: `### Grants

- **Investigating the protective effect of CD34+ stem cells in stroke** — *Funder:* LSUHSC-S. Malcolm Feist Cardiovascular grant.
- **Royal Society Wolfson Fellowship** — *Funder:* Royal Society Wolfson Fellowship. *Duration:* August 2019 – August 2025.
- **Investigating the dysfunction of the cerebral microvasculature in sickle cell disease** — *Funder:* National Institute of Health / National Heart, Lung and Blood Institute (NIH/NHLBI). *Duration:* April 2017 – April 2021.
- **The therapeutic potential of Bryostatin-1 for use in the field of transplant medicine** — *Funder:* LSUHSC-S. *Duration:* July 2016 – June 2017. Eastern Star New Idea Award.
- **A novel role for neutrophils in sickle cell disease: new avenues to target cerebral microvascular dysfunction** — *Funder:* American Heart Association (AHA) Innovation Grant. *Duration:* January 2016 – December 2017.
- **Investigating the Effects of Splenectomy in Stroke** — *Funder:* LSUHSC-S. *Duration:* January 2016 – June 2017. Malcolm Feist Cardiovascular grant.
- **Understanding cerebral microvasculature dysfunction in sickle cell disease** — *Funder:* National Institute of Health / National Heart, Lung and Blood Institute (NIH/NHLBI). *Duration:* September 2015 – August 2017.
- **CD34+ Stem Cell Administration in a New Model of Acute Ischemic Stroke in the Macaca Fascicularis** — *Funder:* LSUHSC-S. *Duration:* July 2015 – June 2016. Translational Grant.
- **Investigating the Annexin A1–Formyl peptide receptor pathway to develop innovative anti-stroke drugs** — *Funder:* LSUHSC-S. *Duration:* July 2015 – June 2017. Partners Across Campus grant.
- **Formyl peptide receptors: novel targets for imaging inflammation** — *Funder:* British Research Council. *Duration:* January 2013 – June 2014. British Research Council / Innovations Therapeutic Primer Funds.
- **Molecular Imaging of novel Therapeutic Agents** — *Funder:* BBSRC. BBSRC Industry Interchange Application.
- **Studying cellular interactions in stroke** — *Funder:* Biotechnology and Biological Sciences Research Council (BBSRC). *Duration:* June 2010 – September 2010. Summer Placement studentship.
- **Building capacity awards** — *Funder:* Medical Research Council (MRC). *Duration:* January 2010 – December 2013. Consumable funding.
- **Designing Novel Bio-Marker for Imaging** — *Funder:* Biotechnology and Biological Sciences Research Council (BBSRC). *Duration:* January 2010 – December 2013. BBSRC Industry Interchange Application.
- **Evaluation of the role of the melanocortin receptor system in ischaemia–reperfusion induced leukocyte–endothelium interaction in the brain microcirculation** — *Funder:* British Heart Foundation (BHF). *Duration:* January 2010 – December 2013. PhD studentship.
- **Building capacity awards** — *Funder:* Medical Research Council (MRC). *Duration:* January 2009 – December 2011. Studentships over 2009–2011 in biomedical imaging.
- **Cytoprotective activated protein C and stroke** — *Funder:* British Heart Foundation (BHF). *Duration:* January 2009 – December 2012. BHF Project grant.
- **Understanding leukocyte–endothelial cell interactions in stroke** — *Funder:* Society of Endocrinology small grant. *Duration:* January 2008 – December 2009.
- **Studying the effect of sexual dimorphisms on the HPA** — *Funder:* Biotechnology and Biological Sciences Research Council (BBSRC). *Duration:* January 2008 – December 2010. PhD studentship.
- **Investigating anti-coagulant mechanisms in diabetes** — *Duration:* January 2007 – December 2008.`,
      teaching: `## Teaching

- Development of research students and post-doctoral fellows/early career researchers.

- Dedicated to promoting mentoring and ensuring equality and diversity.

### Teaching Responsibilities:

- BB3091 Final Year Project (Block lead)

- BB5604 MSc Dissertation Research Project

- BB3802 Problem Solving and Data Analysis

- BB3801 Scientific Communication

- BB2802 Primary literature interrogation & synthesis

- BB2803 Data Evaluation and Reporting

- BB2555 Work Placement

- BB1700 Tutoring

- BB2700 Tutoring

- BB3700 Tutoring`,
      impact: `## Membership and affiliation

- Member British Microcirculation Society (BMS)

- Member New York academy of Sciences (NYAS)

- Member Understanding Animal Research (UAR)

- Member American Heart Association (AHA)

- Member American Physiological Society (APS)

- Member Microcirculation Society (MS)

- Member Associated Board of the Royal Schools of Music (ABRSM)

- Fellow Higher Education Academy (FHEA)

- Fellow Royal Society of Biology (FRSB)

- Fellow of the British Pharmacological Society (FBPhS)

## Media interests

- Inflammation and Thrombosis

- Leukocyte trafficking

- Stroke

- Sickle Cell Disease

- Ageing and Inflammageing

- Animal Research`,
      phdTopics: `## Topics

- Inflammation

- Thrombosis (arterial and venous)

- Resolution of inflammation

- Immune mediated responses in normal and pathological conditions

- Neutrophil-Platelet interactions

- Ischaemia reperfusion injury (I/RI)

- Healthy ageing

- Formyl Peptide Receptors (FPRs)

- Annexin A1 Biology

- Sickle Cell Disease

- Inflammation in Cancer

- Pre-clinical imaging

- Drug discovery and resolution biologics

- Novel drug delivery systems e.g Nanocarriers

### PhD projects for research students

- British Heart Foundation (BHF)-funded non-clinical PhD Studentship: Promoting inflammation resolution as a therapeutic strategy for cardiovascular pathologies

## Research supervision

I have supervised a number of basic and clincal Ph.D. Students and post-doctoral fellows.`,
    },
    order: 1,
  },
  {
    slug: "claire-turner",
    name: "Prof. Claire Turner",
    memberType: "pi",
    role: "Pro Vice Chancellor — Education",
    externalLinks: [
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/claireturnerofsilsoe" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=turner+ce" },
    ],
        email: "claire.turner@brunel.ac.uk",
    tel: "+44 (0)1895 265195",
    office: "Eastern Gateway 301c",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/claire-turner.jpg",
    bio: `## Summary

Claire Turner is an interdisciplinary scientist with a BSc in Chemistry and Biochemistry from the University of Natal and a PhD in Biochemical Engineering from UCL.

She was previously at The Open University where she taught Analytical Science and interdisciplinary science. Her research is focused around the analysis of volatile organic compounds, applied to diverse fields including non-invasive disease diagnosis and environmental monitoring.

Her aim is to enable all students to have an excellent education and student experience irrespective of their background and circumstances. She is particularly interested in innovations in pedagogy and how these can be used to improve the student experience.

## Qualifications

- BSc (Hons) Chemistry & Biochemistry — University of Natal, South Africa
- PhD Biochemical Engineering — University College London

## Responsibilities

- Pro Vice Chancellor — Education, Brunel University London`,
    order: 13,
  },
  {
    slug: "su-ling-li",
    name: "Dr Su-ling Li",
    memberType: "pi",
    role: "Honorary Reader",
    externalLinks: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/suling-li-73258728/" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=aXwfgMAAAAAJ" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=li+sl" },
    ],
        email: "su-ling.li@brunel.ac.uk",
    tel: "+44 (0)1895 266288",
    office: "Heinz Wolff 126",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/su-ling-li.jpg",
    researchAreaSlugs: ["cancer", "inflammation"],
    bio: `## Summary

1983 MD, Suzhou Medical University, China.

1994 PhD, Department of Immunopathology, Karolinska Institute, Stockholm, Sweden.

**Academic Appointments**

- 1995–1996: Post-Doctoral Researcher, Department of Clinical Virology, Karolinska Institute
- 1996–2000: Assistant Professor, then Associate Professor (from 2000), Institute of Cell and Molecular Biology, Lund University, Sweden
- 2001–2005: Lecturer, Division of Biosciences, Brunel University London
- 2005–present: Reader in Immunology, Division of Biosciences, Brunel University London
- 2009–2014: Division Director of Biosciences, Brunel University London

## Qualifications

- MD — Suzhou Medical University, China
- PhD Immunopathology — Karolinska Institute, Stockholm

## Responsibilities

**Administrative Responsibilities**

- University Animal Welfare and Ethical Review Board (AWERB)
- Group Leader of Molecular Immunology
- Level-3 coordinator for Biosciences undergraduate course

**Teaching Module Coordinating Responsibilities**

- BB3720 – Medical Immunology
- BB3803 – Biomedical Science Examination 3
- MSc: BB5503/BB5513 – Genomic Technologies and Cancer/Genomic Technologies`,
    sections: {
      research: `## Research Interests

- Immunology

- Antigen presentation and vaccines

- Autoimmune disease and inflammation

- Regulation of adaptive immune response

- Tumor immunology

### Research Projects

Early growth protein molecules and preventing autoimmune disease and cancer

## Project details

1998-2002: Swedish Strategy Research Fund (PI): The study of peptide vaccination, 1600 000 kr ;

1999-2002: Swedish Cancer Research Fund (PI): The mechanisms of MHC class I assembly, 900 000 kr ;

2000-2003: Swedish Medical Council(PI): Study of molecular mechanisms of CIS in vivo, 600 000 kr;

2001-2002: Brief project grant (PI): Microarray technology, £14,000;

2002-2003: Royal Society grant (PI): Immunoarray tools, £10,000;

2004-2007: MRC (PI) strategic grant: Induction of CTL immunoresponses to HIV-1 by peptide-edited microsomes, £189000;

2003-2006: BBSRC (co-PI) project grant: Molecular mechanisms underlying the quality control of MHC class I loading, £180000:

2004-2007: Kineteqcs (co-PI): A developing fund, £250000;

2013-2016: Arthritis Research UK (co-PI) project grant: Identify Egr-2 and 3 regulatory program in B and T cells that control the self-immune responses, £212000;

2015-2018: MRC (co-PI) project grant: Investigation of the early growth response gene (Egr) 2 and 3 mediated regulatory programme in T cells, £624000.

### Research group(s)

- BICGP

- CSSB`,
      teaching: `## Teaching

- Adaptive immunology;

- Cancer Immunology;

- Pathology;

- Vaccine;

- Biotechnologies, including Microarray, RNA seq, Chip Seq, Transgenic mouse models, technology in drug discovery.`,
      phdTopics: `## Research supervision

PhD Students supervised or currently Supervising

- Total 12 PhD students successfully graduated under my first supervision:

1. Kajsa Paulsson (finished 2001) - Quality control of MHC class I antigen presentation (1st supervision)

2. Anderson Per (finished 2003) - Orchestration of the signalling network in T cells (1st supervision)

3. Li Li (finished 2004) - SOCS family and its function in regulation of intracellular signalling(1st supervision).

4. Elisavet Primpidou (finished 2007) - Development of peptide-edited microsome vaccine (1st supervision)

5. Sabah Khalid (finished 2008) - Microarray Bioinformatics (1st supervision)

6. Mohsin Khan (finished 2009) - Immuno-Bioinformatics (1st supervision)

7. Mengya Liu ( finished 2011)- Nano-APC deliver antigen, IL2 and costimulatory molecules to antigen specific T cells and activate viral specific T cells in chronic infections (1st supervision)

8. Emma Ghaffari (finished 2013) - Early Growth Response Genes -2 and -3 are essential for optimal immune response -To study T Cell Receptor Signalling and Autoimmune disease in EGR-2 and EGR-3 deficient mice

9. Punamdip Kaur Bhullar (finished 2013) - Early growth response genes 2 and/or 3 are essential for the control of inflammation and for the regulation of tumour suppressor genes (1st supervision)

10. Ane Theodora Ogbe (finished 2015) - Early Growth Response genes 2 and 3 play a role in chronic inflammation pathology and are essential for the differentiation of T follicular helper cells (1st supervision)

11. Becky Omodho (finished 2016) - Early growth response gene (Egr) 2 and 3 control inflammatory responses of tolerant T cells (1st supervision)

12. Randeep Singh (finished 2017) -Early Growth Response genes 2 and 3 are potent inhibitors of T-bet function for Interferon Gamma production in T cells (1st supervision)

Nima Taefehshokr (currently under my supervising ) – Regulation of Egr2/3 gene expression and its role in tumor environment (1st supervision)`,
    },
    order: 6,
    publications: suLingLiPublications,
  },
  {
    slug: "ronan-mccarthy",
    name: "Prof. Ronan McCarthy",
    memberType: "pi",
    role: "Honorary Professor",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-7480-6352" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ronan-mccarthy-28774952/" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=w30xm1EAAAAJ" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=mccarthy+rr" },
      { label: "Lab website", url: "https://www.mccarthy-lab.com" },
    ],
    email: "ronan.mccarthy@brunel.ac.uk",
    tel: "+44 (0)1895 268441",
    office: "Heinz Wolff 233",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/ronan-mccarthy.jpg",
    researchAreaSlugs: ["microbiome-and-health"],
    bio: `## Summary

Ronan gained his Bachelor of Science in Genetics with first class honours from University College Cork, Ireland in 2010 and was awarded the title of College Scholar. In autumn 2010, he was awarded an Irish Research Council PhD Scholarship to study novel biofilm inhibition strategies against the opportunistic pathogen *Pseudomonas aeruginosa* in the laboratory of Professor Fergal O’Gara.

In 2014, Ronan joined the research group of Professor Alain Filloux at the MRC Centre for Bacteriology and Infection at Imperial College London as a Postdoctoral Research Associate, interrogating the second messenger signalling cascades that govern biofilm growth in *P. aeruginosa* and *Agrobacterium tumefaciens*. He subsequently joined the Microbiology Department at the Animal and Plant Health Agency, using host transcriptomics and pathway analysis to profile the host response to infection.

Ronan joined the Biosciences Division at Brunel University London to continue his analysis of the regulatory networks governing pathogenicity, antimicrobial resistance and biofilm formation in Gram-negative opportunistic pathogens. In 2021, he was awarded a BBSRC New Investigator Award to study desiccation tolerance and biofilm formation in *Acinetobacter baumannii*. He has also expanded into biofilm engineering, using synthetic biology approaches to tackle environmental challenges such as plastic waste.

As a PI he has secured funding from the BBSRC, NC3Rs, Academy of Medical Sciences, Horizon 2020, British Society for Antimicrobial Chemotherapy, Innovate UK, NERC and the Medical Research Council.

## Qualifications

- BSc (Hons) Genetics — University College Cork, Ireland
- PhD Microbiology — University College Cork, Ireland

## Responsibilities

- Lecturer: BB2716 Medical Microbiology
- Lecturer: BB2802 Primary Literature Interrogation and Synthesis`,
    sections: {
      research: `## Research Interests

My research focuses on

- Profiling key signalling pathways that play a role in chronic bacterial infection and antibiotic resistance.

- Studying interactions that occur at the host-pathogen interface using integrated ‘omics approaches.

- Understanding the protective role of the microbiome in an infection setting.

- Assessing the ability of old drugs to be repurposed to inhibit bacterial infection

Enquires are welcome from those who are keen to pursue PhD and MSc degrees. Joint supervision, industry partnerships and collaborative research opportunities are also very welcome.

### Research Projects

AI-driven data analysis and modelling of protein dynamics for drug discovery

Social, ecological, political, and cultural implications of extinction`,
      impact: `## Media interests

https://www.nature.com/articles/d41586-024-02601-4

https://www.nature.com/articles/s41587-024-02401-1

BBC Radio 4 Inside Science

Artificial sweeteners found in sugar-free foods can kill antibiotic-resistant bacteria

Supermarket sweeteners may be key in fight against antibiotic-resistant bacteria.`,
      phdTopics: `### PhD projects for research students

- Fully funded studentship in Plastivore Plasticity: characterising metabolic flexibility in an emerging biotechnological system to manage plastic waste

- PhD in Engineering Bacteria for Enhanced Degradation of Food-Associated Plastic Waste - BBSRC FoodBio DTP`,
    },
    order: 7,
    publications: ronanMccarthyPublications,
  },
  {
    slug: "raha-pazoki",
    name: "Dr Raha Pazoki",
    memberType: "pi",
    role: "Senior Lecturer in Biomedical Sciences",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-5142-2348" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/raha-pazoki-md-phd-fhea-a9580829" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=pazoki+r" },
      { label: "Imperial College profile", url: "https://www.imperial.ac.uk/people/r.pazoki" },
    ],
    email: "raha.pazoki@brunel.ac.uk",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/raha-pazoki.jpg",
    researchAreaSlugs: ["cardiovascular-diseases"],
    bio: `## Summary

Dr Raha Pazoki MD PhD FHEA is a medical doctor and epidemiologist specialising in health data science and the epidemiology of cardiometabolic diseases. She studied Epidemiology at the Netherlands Institute for Health Sciences (NIHES) and the University of Amsterdam, working with major cohort studies including the Arrhythmia Genetics in the Netherlands (AGNES), the Rotterdam Study, the Airwave Health Monitoring Study, and the UK Biobank.

In 2016 she joined the Department of Epidemiology and Biostatistics at Imperial College London as a Research Associate, before taking up a Teaching & Research position at Brunel University London in 2020.

Her research explores causal inference and precision medicine by leveraging genomics and large-scale health datasets of over 500,000 individuals. She was the first to identify 517 novel genetic loci associated with liver enzymes and to demonstrate the causal effect of liver dysfunction on cardiovascular disease. She has a particular interest in the interplay between genetic factors, circulating biomarkers, nutrition, lifestyle, and health outcomes.

## Qualifications

- MD — Medicine
- PhD — Epidemiology
- FHEA — Fellow of the Higher Education Academy

## Responsibilities

- Director, Cardiovascular and Metabolic Research Group, Brunel University London
- Honorary Senior Lecturer, Imperial College London`,
    sections: {
      research: `## Research area(s)

Dr. Raha Pazoki’s research focuses on health data science with a strong emphasis on cardiometabolic and ageing-related diseases. Her work integrates genomics, epidemiology, and artificial intelligence to uncover genetic and environmental determinants of conditions such as hypertension, diabetes, liver dysfunction, and cardiovascular disease. She was the first to identify 517 novel genetic loci linked to liver enzymes and demonstrated their causal role in heart disease. Using Mendelian randomization, she clarifies causal pathways between biomarkers (e.g., liver enzymes, lipid levels) and age-related conditions, improving understanding of how genetic predispositions interact with lifestyle factors like diet, alcohol, and physical activity. Her studies also show that lifestyle interventions, such as exercise, can mitigate genetic risk, offering actionable insights for prevention and healthy ageing.

The impact of her work spans clinical and societal domains. Clinically, she advances precision medicine by integrating genetic risk scores with lifestyle and clinical data to enable personalized treatment strategies, particularly for ageing populations with complex health profiles. Her research supports early detection of stroke, liver cirrhosis, and metabolic syndrome, and informs screening guidelines for at-risk individuals. Societally, her findings guide public health campaigns promoting healthy behaviours tailored to genetic risk, reduce health inequities through inclusive genomic research, and leverage AI to predict health outcomes in ageing populations. By bridging big data with clinical practice, Dr. Pazoki’s work not only addresses global challenges in cardiometabolic and ageing diseases but also shapes the future of personalized medicine, prevention strategies, and wellbeing across diverse populations. Scorll down this page for full detail of her research.

Dr Paozki is a founder and director of the Cardiovascular and Metabolic Research Group hosting researchers and academics across Brunel university with direct or indirect research interest involving cardiometabolic aetiology, prevention, and health . We work in various areas to identify causes of cardiometabolic diseases ( environmental, lifestyle, molecular, and clinical ) and provide insight into how they interplay. We use the information for better prevention of cardiometabolic diseases in the community.

If you are a MSc graduates (with upper second class degree or higher) in the relevant field to the above research area, please contact Dr Raha Pazoki ( raha.pazoki@brunel.ac.uk ).

Postgraduate fees and funding | Brunel University London or Scholarships and Bursaries | Brunel University London and Other funding | Brunel University London

Selected list of publications by Dr Raha Pazoki

Karkia, R., Maccarthy, G., Payne, A., Karteris, E., Pazoki, R., & Chatterjee, J. (n.d.). The Association Between Metabolic Syndrome and the Risk of Endometrial Cancer in Pre- and Post-Menopausal Women: A UK Biobank Study. Journal of Clinical Medicine, 14(3), 751. doi: 10.3390/jcm14030751

Hezekiah, C., & Pazoki, R. (2024). Physical activity and favourable adiposity genetic liability reduce the risk of hypertension among high body mass individuals. doi: 10.1101/2024.12.18.24319295

MacCarthy, G., & Pazoki, R. (2024). Using Machine Learning to Evaluate the Value of Genetic Liabilities in the Classification of Hypertension within the UK Biobank. Journal of Clinical Medicine, 13(10), 1-20. doi:10.3390/jcm13102955

Hezekiah, C., Blakemore, A. I., Bailey, D. P., & Pazoki, R. (2024). Physical activity alters the effect of genetic determinants of adiposity on hypertension among individuals of European ancestry in the UKB. Scandinavian Journal of Medicine and Science in Sports, 34(5), 1-13. doi:10.1111/sms.14636

O’Farrell, F., Aleyakpo, B., Mustafa, R., Jiang, X., Pinto, R. C., Elliott, P., . . . Pazoki, R. (2023). Evidence for involvement of the alcohol consumption WDPCP gene in lipid metabolism, and liver cirrhosis. Scientific Reports , 13(1), 1-13. doi:10.1038/s41598-023-47371-7

Hezekiah, C., Blakemore, A. I., Bailey, D. P., & Pazoki, R. (2023). Physical activity reduces the effect of adiposity genetic liability on hypertension risk in the UK Biobank cohort. doi:10.1101/2023.09.22.23295992

Roa-Díaz, Z. M., Teuscher, J., Gamba, M., Bundo, M., Grisotto, G., Wehrli, F., . . . Muka, T. (2022). Gene-diet interactions and cardiovascular diseases: a systematic review of observational and clinical trials. BMC Cardiovascular Disorders, 22(1), 1-22. doi:10.1186/s12872-022-02808-1

O'Farrell, F., Jiang, X., Aljifri, S., & Pazoki, R. (2022). Molecular Alterations Caused by Alcohol Consumption in the UK Biobank: A Mendelian Randomisation Study. Nutrients, 14(14), 1-14. doi:10.3390/nu14142943

Jiang, X., Anasanti, M. D., Drenos, F., Blakemore, A. I., & Pazoki, R. (2022). Urinary Sodium Excretion Enhances the Effect of Alcohol on Blood Pressure. Healthcare, 10(7), 1-13. doi:10.3390/healthcare10071296

Jiang, X., Anasanti, M., Drenos, F., Blakemore, A., & Pazoki, R. (2022). Urinary Sodium Excretion Enhances the Effect of Alcohol on Blood Pressure. doi:10.20944/preprints202205.0385.v1

Said, S., Pazoki, R., Karhunen, V., Võsa, U., Ligthart, S., Bodinier, B., . . . Dehghan, A. (2022). Genetic analysis of over half a million people characterises C-reactive protein loci. Nature Communications , 13(1), 1-10. doi:10.1038/s41467-022-29650-5

Roa-Díaz, Z. M., Asllanaj, E., Amin, H. A., Rojas, L. Z., Nano, J., Ikram, M. A., . . . Muka, T. (2021). Age at natural menopause and blood pressure traits: Mendelian randomization study. Journal of Clinical Medicine, 10(19), 1-13. doi:10.3390/jcm10194299

Jiang, X., Gao, H., Elliott, P., & Pazoki, R. (2022). Percentage of explained variance in alcohol consumption by genetic risk score in the UK Biobank. In EUROPEAN JOURNAL OF HUMAN GENETICS Vol. 30 (pp. 528-529). Online. doi:10.1038/s41431-021-01026-1

Evangelou, E., Suzuki, H., Bai, W., Pazoki, R., Gao, H., Matthews, P. M., & Elliott, P. (2021). Alcohol consumption in the general population is associated with structural changes in multiple organ systems. eLife, 10. doi:10.7554/eLife.65325

Pazoki, R., Vujkovic, M., Elliott, J., Evangelou, E., Gill, D., Mohsen, G., . . . elliott, P. (2021). Genetic analysis in European ancestry individuals identifies 517 loci associated with liver enzymes. Nature Communications , 12, 1-12. doi:10.1038/s41467-021-22338-2

Pazoki, R., Lin, B. D., van Eijk, K. R., Schijven, D., de Zwarte, S., Guloksuz, S., & Luykx, J. J. (2020). Phenome-wide and genome-wide analyses of quality of life in schizophrenia. BJPsych Open, 7(1), 1-7. doi:10.1192/bjo.2020.140

Cabrera, C. P., Pazoki, R., Giri, A., Hellwege, J. N., Evangelou, E., Ramirez, J., . . . Warren, H. R. (2020). Multi-trait genome-wide association analysis of blood pressure identifies 45 additional loci. In EUROPEAN JOURNAL OF HUMAN GENETICS Vol. 28 (pp. 105). Virtual Conference. doi:10.1038/s41431-020-00740-6

Elliott, P., Muller, D. C., Schneider-Luftman, D., Pazoki, R., Evangelou, E., Dehghan, A., . . . Tzoulaki, I. (2020). Estimated 24-Hour Urinary Sodium Excretion and Incident Cardiovascular Disease and Mortality among 398628 Individuals in UK Biobank. Hypertension, 76(3), 683-691. doi:10.1161/HYPERTENSIONAHA.119.14302

Robinson, O., Chadeau Hyam, M., Karaman, I., Climaco Pinto, R., Ala-Korpela, M., Handakas, E., . . . Vineis, P. (2020). Determinants of accelerated metabolomic and epigenetic aging in a UK cohort. Aging Cell, 19(6), 1-13. doi:10.1111/acel.13149

Schmidt, A. F., Holmes, M. V., Preiss, D., Swerdlow, D. I., Denaxas, S., Fatemifar, G., . . . Dehghan, A. (2019). Phenome-wide association analysis of LDL-cholesterol lowering genetic variants in PCSK9. BMC Cardiovascular Disorders, 19(1). doi:10.1186/s12872-019-1187-z

Pazoki, R., Lin, B. D., van Eijk, K. R., Schijven, D., Guloksuz, S., & Luykx, J. J. (2019). Phenome-wide and Genome-wide Analyses of Quality of Life in Schizophrenia. bioRxiv, preprint. doi:10.1101/744045

Pazoki, R., Evangelou, E., Mosen-Ansorena, D., Pinto, R., Karaman, I., Blakeley, P., . . . Dehghan, A. (2019). PATHWAYS UNDERLYING URINARY SODIUM AND POTASSIUM EXCRETION AND THE LINK TO BLOOD PRESSURE AND CARDIOVASCULAR DISEASE. In Journal of Hypertension Vol. 37 (pp. e74). Ovid Technologies (Wolters Kluwer Health). doi:10.1097/01.hjh.0000571108.82708.c0

Pazoki, R., Evangelou, E., Mosen-Ansorena, D., Pinto, R. C., Karaman, I., Blakeley, P., . . . Dehghan, A. (2019). GWAS for urinary sodium and potassium excretion highlights pathways shared with cardiovascular traits. Nature Communications , 10(1), 1-11. doi:10.1038/s41467-019-11451-y

Evangelou, E., Gao, H., Chu, C., Ntritsos, G., Blakeley, P., Butts, A. R., . . . Elliott, P. (2019). New alcohol-related genes suggest shared genetic mechanisms with neuropsychiatric disorders. Nature Human Behaviour , 3(9), 950-961. doi:10.1038/s41562-019-0653-z

Luykx, J., Pazoki, R., Lin, B., Guloksuz, S., Schijven, D., van Eijk, K., & GROUP collaborators. (2019). T168. Phenome-Wide and Genome-Wide Analyses of Quality of Life in Patients With Psychosis. In Biological Psychiatry Vol. 85 (pp. S194). Elsevier BV. doi:10.1016/j.biopsych.2019.03.491

Pazoki, R. (2019). Cardiovascular disease, ABO locus, and markers of platelet functionality. International Journal of Cardiology, 286(1 July 2019), 162-163. doi:10.1016/j.ijcard.2019.03.061

De Vries, P. S., Brown, M. R., Bentley, A. R., Sung, Y. J., Winkler, T. W., Ntalla, I., . . . Giulianini, F. (2019). Multiancestry Genome-Wide Association Study of Lipid Levels Incorporating Gene-Alcohol Interactions. American Journal of Epidemiology, 188(6), 1033-1054. doi:10.1093/aje/kwz005

Robinson, O., Hyam, M. C., Karaman, I., Pinto, R. C., Fiorito, G., Gao, H., . . . Vineis, P. (2018). Determinants of accelerated metabolomic and epigenetic ageing in a UK cohort. bioRxiv, preprint. doi:10.1101/411603

Kilpeläinen, T. O., Bentley, A. R., Noordam, R., Sung, Y. J., Schwander, K., Winkler, T. W., . . . Krieger, J. E. (2019). Multi-ancestry study of blood lipid levels identifies four loci interacting with physical activity. Nature Communications , 10(1). doi:10.1038/s41467-018-08008-w

Ashar, F. N., Mitchell, R. N., Albert, C. M., Newton-Cheh, C., Brody, J. A., Müller-Nurasyid, M., . . . Sotoodehnia, N. (2018). A comprehensive evaluation of the genetic architecture of sudden cardiac arrest. European Heart Journal, 39(44), 3961-3969. doi:10.1093/eurheartj/ehy474

Evangelou, E., Warren, H. R., Mosen-Ansorena, D., Mifsud, B., Pazoki, R., Gao, H., . . . Gandin, I. (2018). Genetic analysis of over 1 million people identifies 535 new loci associated with blood pressure traits. Nature Genetics , 50(10), 1412-1425. doi:10.1038/s41588-018-0205-x

Davies, G., Lam, M., Harris, S. E., Trampush, J. W., Luciano, M., Hill, W. D., . . . Kleineidam, L. (2018). Study of 300,486 individuals identifies 148 independent genetic loci influencing general cognitive function. Nature Communications , 9(1). doi:10.1038/s41467-018-04362-x

Pazoki, R., Dehghan, A., Evangelou, E., Warren, H., Gao, H., Caulfield, M., . . . Tzoulaki, I. (2018). Genetic predisposition to high blood pressure and lifestyle factors: Associations with midlife blood pressure levels and cardiovascular events. In Circulation Vol. 137 (pp. 653-661). doi:10.1161/CIRCULATIONAHA.117.030898

Pazoki, R. (2018). Methods for polygenic traits. International journal of cardiology, 1793, 145-156. doi:10.1007/978-1-4939-7868-7_10

## Research Interests

(Genetic) Epidemiology of Cardiovascular Diseases

Genome-wide Association Studies

Mendelian Randomization

### Research Projects

Understanding laminopathies: Diseases of the cell nucleus

The WDPCP gene in alcohol consumption, lipid metabolism, and liver cirrhosis`,
      teaching: `## Teaching

Introduction to Epidemiology and Disease Prevention (Block leading and delivery)

Synoptic Examinations 3 (Leading and marking)

Synoptic Examination 3 (marking, cross moderating)

Introduction to Data Analysis (Leading, delivering, marking)

Final Year Project (Leading, delivering, marking)

Final Year Project (support of leading, marking, delivering, supervision)

Final Year Project (marking, delivering, supervision)

Biomedical Sciences Examinations 3 (marking, question design)

Practical Skills 3: Molecular Analysis (marking)

Analytical Biochemistry (moderation)

Genetics, Genomics and Human Health

Scientific Communication -Essay (Coursework design & delivery, marking)

Research and Communication Skills - Presentation

Research and Communication Skills - Portfolio

Synoptic Examination 1 (marking)

Primary Literature Interrogation and Synthesis (supervision, marking)

Data Analysis, Interpretation and Presentation (poster, marking)

Biomedical Sciences Examinations 2 (moderation)

Scientific Communication – Presentation (marking)

BB3801b (term 1)-2022/23

BB3801b (term 1)-2023/24

BB3802b (term 2)-2023/24

Problem Solving and Data Analysis – Reflection (marking)

BB3802b (term 2)-2022/23

## PGT Modules:

Vaccines and Treatment for Infection and Inflammation

Radiation, Toxicology and Pollution

Scientific Communication

## PGT Dissertation Supervision:

Mendelian Randomisation study of lipid levels on alcohol consumption using MR-Base

Genetic Risk score of Alcohol Consumption and Risk of Type 2 Diabetes

## PhD supervision

- Biosciences Research for 2044965 Supervisory role: Date: January 2021 - May 2026

- Biosciences Research for 2029216 Supervisory role: Date: April 2020 - May 2025

## Courses taught

- Vaccines and Treatment for Infection and Inflammation (BB5716) Level: Postgraduate Date: February 2024

- Introduction to Data Analysis BB1719 Date: September 2021 - September 2022

- Final Year Project BB3091

- Genetics, Genomics and human health Date: January 2021

## Courses developed

- Epidemiology and Diseases Prevention BB3711`,
      impact: `## Membership and affiliation

In 2020/21, Dr. Pazoki supported colleagues during the COVID-19 pandemic by organizing a workshop on remote Final Year Project (FYP) supervision and creating a “For Supervisor” content area in Blackboard, which remains in use. She also co-designed a staff well-being survey with Dr. Daniel Bishop to assess the pandemic's impact on colleagues. Dr. Pazoki took the initiative to organize International Women’s Day events in 2022 at DLS and jointly between DLS and HS in 2023. She also organized the “Meet the Promoted” workshop in both 2021 and 2024.

In 2021, Dr. Pazoki was appointed Departmental Chair of the Athena Swan Self-Assessment Team (SAT) for DLS. Her leadership in forming a writing panel, collecting evidence, and coordinating between SATs contributed to Brunel University's first Athena Swan Silver Award. She subsequently supported the HS department in their application, resulting in Brunel's second Silver Award for gender equality. Praised by colleagues and the Dean, Dr. Pazoki collaborated with Dr. Terry Dovey to develop an operational action plan to implement the five-year Silver Action Plan. Her leadership also led to the creation of a Brightspace community page for Athena Swan, the integration of an Athena Swan topic in Level 4 diagnostic essays, a presentation at the CHMLS International Women’s Day 2023, the organization of Ada Lovelace Day 2023, and the generation of a report on the academic promotion gender gap. Additionally, Dr. Pazoki contributed to various Equality, Diversity, and Inclusion (ED&I) activities as a member of the CHMLS ED&I Committee.

Dr. Pazoki consistently leads curriculum planning. In 2021/22, she redeveloped BB1719, Introduction to Data Analysis , enhancing content and teaching methods to improve student learning and assessment readiness. In 2022/23, she proposed and developed a new block, BB3711, Epidemiology and Disease Prevention , which was approved and launched under her leadership. She designed interactive sessions, introduced the Doku tool for formative assessment, and created a Team-Based Learning (TBL) session, all of which received positive student feedback. Dr. Pazoki has led and delivered this module continuously. Since the 2023/24 academic year, she has also led the Assessment block Synoptic Examination 3 (BB3804).

Over the years, Dr. Pazoki has built an international reputation and is recognized as an expert by multiple independent organizations. Since her promotion in August 2023, she has reviewed two grant proposals for UKRI (in 2024). She currently serves on the editorial board of BMC Cardiovascular Disorders and is the academic editor for a special issue of MDPI Healthcare Journal on “Advances in Prediction, Prevention, and Precision Medicine for Myocardial Infarction and Stroke.” Dr. Pazoki regularly receives invitations to peer review for high-impact journals, including Nature Communications , eBioMedicine (Lancet group), Circulation , Stroke , and Scientific Reports . In February 2025, she was invited by the media to write an expert review alongside prominent figures in the field, commenting on a paper published in Nature Medicine . She has also been invited as an external examiner by the London School of Hygiene and Tropical Medicine for a viva in June 2025. Dr. Pazoki has established collaborations with research groups at Cambridge, Liverpool, the Million Veteran Program, and the University of Bern. She has examined dissertations at Imperial College London, spoken at prestigious societies, and reviewed grants for the MRC and British Council Newton Fund. Additionally, she has reviewed multiple MRC DTP applications at Imperial College London.`,
      phdTopics: `## Topics

Hezekiah, C., & Pazoki, R. (2024). Physical activity and favourable adiposity genetic liability reduce the risk of hypertension among high body mass individuals. doi: 10.1101/2024.12.18.24319295

MacCarthy, G., & Pazoki, R. (2024). Using Machine Learning to Evaluate the Value of Genetic Liabilities in the Classification of Hypertension within the UK Biobank. Journal of Clinical Medicine, 13(10), 1-20. doi:10.3390/jcm13102955

Hezekiah, C., Blakemore, A. I., Bailey, D. P., & Pazoki, R. (2024). Physical activity alters the effect of genetic determinants of adiposity on hypertension among individuals of European ancestry in the UKB. Scandinavian Journal of Medicine and Science in Sports, 34(5), 1-13. doi:10.1111/sms.14636

Said, S., Pazoki, R., Karhunen, V., Võsa, U., Ligthart, S., Bodinier, B., . . . Dehghan, A. (2022). Genetic analysis of over half a million people characterises C-reactive protein loci. Nature Communications , 13(1), 1-10. doi:10.1038/s41467-022-29650-5

### PhD projects for research students

- Exploring artificial intelligence for precision medicine

- Health data analysis to identify the role of gene and environment in risk of cardiovascular diseases

- Executive Dean’s PhD Studentship in Mimicking Laminopathies: the impact of disease-specific Lamin A mutations in peripheral chromatin organisation and nuclear envelope function

## Research supervision

O’Farrell, F., Aleyakpo, B., Mustafa, R., Jiang, X., Pinto, R. C., Elliott, P., . . . Pazoki, R. (2023). Evidence for involvement of the alcohol consumption WDPCP gene in lipid metabolism, and liver cirrhosis. Scientific Reports , 13(1), 1-13. doi:10.1038/s41598-023-47371-7

O'Farrell, F., Jiang, X., Aljifri, S., & Pazoki, R. (2022). Molecular Alterations Caused by Alcohol Consumption in the UK Biobank: A Mendelian Randomisation Study. Nutrients, 14(14), 1-14. doi:10.3390/nu14142943

Jiang, X., Anasanti, M. D., Drenos, F., Blakemore, A. I., & Pazoki, R. (2022). Urinary Sodium Excretion Enhances the Effect of Alcohol on Blood Pressure. Healthcare, 10(7), 1-13. doi:10.3390/healthcare10071296

Jiang, X., Anasanti, M., Drenos, F., Blakemore, A., & Pazoki, R. (2022). Urinary Sodium Excretion Enhances the Effect of Alcohol on Blood Pressure. doi:10.20944/preprints202205.0385.v1

Jiang, X., Gao, H., Elliott, P., & Pazoki, R. (2022). Percentage of explained variance in alcohol consumption by genetic risk score in the UK Biobank. In EUROPEAN JOURNAL OF HUMAN GENETICS Vol. 30 (pp. 528-529). Online. doi:10.1038/s41431-021-01026-1`,
    },
    order: 8,
    publications: rahaPazokiPublications,
  },
  {
    slug: "jacqueline-cliff",
    name: "Dr Jacqueline Cliff",
    memberType: "pi",
    role: "Senior Lecturer in Biosciences",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-5653-1818" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jackie-cliff-b1ba3010/" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?user=OowqVmQAAAAJ&hl=en&oi=ao" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=cliff+jm" },
    ],
    email: "jacqueline.cliff@brunel.ac.uk",
    office: "Heinz Wolff 228",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/jacqueline-cliff.jpg",
    researchAreaSlugs: ["infections-and-immunity"],
    bio: `## Summary

Jackie read Physiological Sciences at the University of Oxford, followed by an MSc in the Immunology of Infectious Diseases at the London School of Hygiene & Tropical Medicine.

She then moved to the National Institute for Medical Research for her PhD, where she investigated the role of cytokines in B cell activation and differentiation with Dr Gerry Klaus.

Jackie worked with Professor Hazel Dockrell at the London School of Hygiene & Tropical Medicine from 1999–2022, mainly studying immune responses in tuberculosis and how these could be utilised to assess responses to antibiotic treatment. More recently, her research has also encompassed comorbidities such as diabetes in tuberculosis, and expanded to include the role of infection and immunity in Myalgic Encephalomyelitis.

Jackie joined Brunel University London in March 2022, combining her research in the Biosciences Division with her teaching within the Medical School.

## Qualifications

- BA (Hons)
- MSc
- PhD

## Responsibilities

- Researcher in the Biosciences Division at Brunel University London
- Teaching within the Medical School at Brunel University London`,
    sections: {
      research: `## Research area(s)

Jackie’s main research interests are in infectious diseases, and particularly how chronic conditions affect immune responses to pathogens. A substantial part of Jackie’s research has been investigating immune responses in people with tuberculosis, and specifically how altered blood gene expression can be utilised for tuberculosis diagnosis and drug treatment monitoring: this is beneficial for clinical management and for the development of new drugs. In a multicentre study, her research group also found that people with type 2 diabetes have excessive inflammatory responses in tuberculosis but suppressed specific protective immune responses, which may underpin their recognised enhanced susceptibility to tuberculosis disease. We are currently using macrophage in vitro models to further understand protective immunity to Mycobacterium tuberculosis, and how this is affected in diabetes. This could lead to host-directed therapy in this group of people, alongside conventional antibiotic treatment.

Jackie has also been investigating immunological changes in people living with Myalgic Encephalomyelitis / Chronic Fatigue Syndrome (ME/CFS), a poorly understood condition estimated to affect around 125,000 people in the UK, often leading to severe disability. It is frequently triggered by viral infection, and there are substantial overlaps in symptomology with people with Long COVID, including severe fatigue, post-exertional symptom exacerbation and brain fog. We have found alterations in the T cell compartment in people with ME/CFS, and also preliminary evidence of enhanced reactivation of some human herpesviruses, which are highly prevalent in the adult population but usually well-controlled.

## Research Interests

- Myalgic Encephalomyelitis / Chronic Fatigue Syndrome

- Long COVID

- Tuberculosis

- Type 2 diabetes

- Treatment-response

- Biomarkers

### Research Projects

Investigating innate immune signalling in Gulf War Illness and blast-related TBI

Reactivation of herpesviruses in Myalgic Encephalomyelitis`,
      teaching: `## Teaching

- Medicine MBBS Academic Lead Year 2 Student Selected Component

- Medicine MBBS Academic Content Expert Immunology Y1 and Y2

- Medicine MBBS House Tutor – Elizabeth Garrett Anderson

## Courses taught

- Medicine MBBS Level: First year Date: May 2022`,
      impact: `## Membership and affiliation

- Member of the British Society for Immunology

- Member of the Acid Fast Club

- Investigator VALIDATE Network

- Fellow of the Higher Education Academy`,
    },
    order: 3,
    publications: jacquelineCliffPublications,
  },
  {
    slug: "anthony-tsolaki",
    name: "Dr Anthony Tsolaki",
    memberType: "pi",
    role: "Senior Lecturer / UG Admissions Tutor",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0003-1940-3144" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/anthony-tsolaki-6b35b397" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?user=v5oPH2cAAAAJ&hl=en&oi=ao" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=tsolaki+ag" },
    ],
        email: "anthony.tsolaki@brunel.ac.uk",
    tel: "+44 (0)1895 266077",
    office: "Heinz Wolff 234",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/anthony-tsolaki.jpg",
    researchAreaSlugs: ["microbiome-and-health", "infections-and-immunity"],
    bio: `## Qualifications

- BSc (Hons) Biochemistry — University of North London (1993)
- MSc — London School of Hygiene and Tropical Medicine (1994)
- DPhil — University of Oxford (1999)

## Responsibilities

- Biosciences Undergraduate Admissions Tutor
- Lead, Tuberculosis Research Laboratory`,
    sections: {
      research: `## Research area(s)

- Molecular epidemiology of tuberculosis Host-pathogen interactions in tuberculosis

- Molecular evolution of Mycobacterium tuberculosis

- Mechanisms of genomic variability in Mycobacterium tuberculosis Microbial genomics

- Innate Immunity in tuberculosis Infection

### Research Projects

Host-pathogen interactions in tuberculosis

Innate immunity in bovine tuberculosis`,
      teaching: `### Teaching Responsibilities:

- BB2716 Medical Microbiology

- BB3716 Microbial Pathogenesis

- BB2805 Biomedical Sciences`,
      phdTopics: `### PhD projects for research students

- The role of PE/PPE proteins in tuberculosis`,
    },
    order: 12,
    publications: anthonyTsolakiPublications,
  },
  {
    slug: "steven-smith",
    name: "Dr Steven Smith",
    memberType: "pi",
    role: "Senior Lecturer in Biomedical Sciences",
    externalLinks: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/steven-smith-aba19a28/" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=smith+sg" },
    ],
        email: "steven.smith@brunel.ac.uk",
    tel: "+44 (0)1895 268956",
    office: "Heinz Wolff 132",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/steven-smith.jpg",
    researchAreaSlugs: ["infections-and-immunity"],
    bio: `## Summary

Steven obtained a BSc in Medical Sciences from the University of Leeds and received a PhD at the Cancer Medicine Research Unit, St. James's University Hospital, Leeds, investigating the CD8 T-cell stimulating properties of a DNA vaccine encoding multiple melanoma-associated epitopes.

Following a postdoctoral position at the Edward Jenner Institute for Vaccine Research — examining the role of auto-reactive CD8 T-cells and T-cell regulation in joint inflammation — he joined the group of Professor Hazel Dockrell at the London School of Hygiene and Tropical Medicine. There he investigated the cellular immune response to BCG vaccination and immune mechanisms that might provide protection against tuberculosis infection and disease.

Steven joined the Division of Biosciences at Brunel University London in January 2020.

## Qualifications

- BSc Medical Sciences — University of Leeds
- PhD Immunology / Cancer Medicine — University of Leeds`,
    sections: {
      research: `## Research area(s)

Immunological biomarkers of protection against tuberculosis

Innate/adaptive immunity

## Research Interests

I am is interested in understanding which immune response elements are responsible for protection against infection with Mycobacterium tuberculosis , the causative agent of TB, as well as those which prevent the development of active TB disease.

Although it provides incomplete protection against TB, there is much to be learnt from the immune response to the BCG vaccine which in certain circumstances, may be effective. Although traditionally seen as T-cell-mediated, recent times have seen an increased interested in the role of B-cells and antibodies as well as potentially long-lived innate cells in immune protection against TB. As BCG is known to impact upon each of these immune compartments, each or all could have a role in protection.

In collaboration with teams at the MRC/UVRI & LSHTM Unit in Uganda, the International Tuberculosis Research Center, Korea and Institut Politecnico Nacional, Mexico, I use samples from BCG-vaccinated individuals, a variety of in vitro cellular models of innate and adaptive immune responses and analytical methods such as functional bacterial inhibition assays, multiparameter flow cytomtry, ELISA/Luminex and DNA methylation analysis to probe questions such as:

- the phenotype and function of BCG-vaccine-induced T-cells

- the potential for BCG-"trained" monocytes to protect against TB

- the role of metabolic intermediates in BCG-induced trained immunity and the potential for these to enhance vaccine effectiveness

- the use of immunological biomarker assays to monitor responses in patients and in vaccine trials against TB in different settings

### Research Projects

Metabolic reprogramming for improved BCG vaccine efficacy`,
      teaching: `## Courses taught

- Medical Immunology (BB3720) Level: Third year Date: February 2020`,
    },
    order: 11,
    publications: stevenSmithPublications,
  },
  {
    slug: "arturo-sala",
    name: "Prof. Arturo Sala",
    memberType: "pi",
    role: "Professor of Translational Cancer Research",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-2841-7866" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/arturo-sala-399a00166" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sala+a" },
    ],
        email: "arturo.sala@brunel.ac.uk",
    tel: "+44 (0)1895 265547",
    office: "Heinz Wolff 123A",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/arturo-sala.png",
    researchAreaSlugs: ["cancer", "drug-repurposing"],
    bio: `## Summary

Trained in Biochemistry and Cellular Biology at the University of Rome and the Italian National Institute of Health, I completed a PhD in Biochemistry at the University of Rome “La Sapienza” on the topic of DNA and RNA methylation in relation to muscle cell differentiation.

After a short postdoctoral training in the National Institute of Health in Rome, I won an international post-doctoral fellowship from the Italian Association for Cancer Research (AIRC) and moved to the Kimmel Cancer Institute, Thomas Jefferson University Philadelphia. Working in the laboratory of Prof. Bruno Calabretta, I was the first to characterize the transcription factor and oncoprotein B-MYB and establish its relationship with key tumour suppressor genes, such as p53 and retinoblastoma family members.

In 2001 I was recruited by the UCL Institute of Child Health as Senior Lecturer and later promoted to Reader. In UCL I continued to pursue the study of oncogenic transcription factors in the context of neuroblastoma, a childhood tumour affecting the peripheral nervous system. I was appointed Professor of Translational Cancer Research and Deputy Director of the Brunel Institute of Cancer Genetics and Pharmacogenomics in September 2011. In 2016 I joined the Synthetic Biology Theme in the Institute of Environment, Health and Societies.

## Responsibilities

- Member, Research Ethics Committee
- Panel Member, Academic Appeal Committee`,
    sections: {
      research: `## Research area(s)

Rare cancers; neurodegenerative diseases; Gene and cell therapy

## Research Interests

Neuroblastoma, adenoid cystic carcinoma, Friedreich's ataxia

### Research Projects

Improving the efficacy of immunotherapies for the childhood cancer neuroblastoma

A new cell and gene therapy approach for Friedreich's ataxia

Oncoprotein MYB in the head and neck cancer adenoid cystic carcinoma

Modelling infant leukaemia using gene editing technology

The role of CDCA2 molecule in neuroblastoma

Modelling adenoid cystic carcinoma in a mouse

### Research group(s)

- IEHS`,
      teaching: `## Teaching

Coordinator of the masters' cancer module`,
      phdTopics: `## Topics

gene and cell therapy

### PhD projects for research students

- Executive Dean’s PhD Studentship in the Development of a cellular model of rob(15;21) translocation for acute lymphoblastic leukaemia`,
    },
    order: 10,
    publications: arturoSalaPublications,
  },
  {
    slug: "ashley-houlden",
    name: "Dr Ashley Houlden",
    memberType: "pi",
    role: "Lecturer in Biosciences",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-1526-5963" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/ashley-houlden-bsc-hons-ph-d-fhea-059534150" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=wW0MqYIAAAAJ" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=houlden+a" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Ashley-Houlden" },
    ],
        email: "ashley.houlden@brunel.ac.uk",
    tel: "+44 (0)1895 265558",
    office: "Heinz Wolff 232",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/ashley-houlden.jpg",
    researchAreaSlugs: ["microbiome-and-health"],
    bio: `## Summary

I am a Microbial Ecologist in the Division of Biosciences at Brunel University London.

My research interests lie in the assessment of microbial community structure and function using high throughput sequencing and molecular microbiological techniques. Focusing on the host microbiome, their interaction with one another in this community and changes as a result of disease or injury, this characterisation of the communities allows the identification of functionally important changes in microbial assemblages and detection of Antimicrobial Resistance. My research has included work on the impact of stroke, brain injury, parasitic intestinal infections, and dementia on the interactions with the host and its microbiome.

One of my current research focus areas is women's health. I am studying bacterial vaginosis, the interaction of microbes present in the vagina, detection of potential pathogens, and the development of an in-house in vitro model system using Organ on a Chip technology for 3D tissue culture to simulate the vaginal environment. Linked to this I am interested in the impact that space travel and microgravity has on microbial populations and implications for health.

I am also interested in antimicrobial resistance (AMR) and detection of AMR in bacterial communities with a focus on the environmental impact and ecological implications. It is becoming increasingly an issue that AMR organisms are colonising animal populations and if these pathogens are accumulated in apex predators via food chain acquisition.

My doctoral training was in soil microbial ecology carrying out risk assessments and the efficacy of using bacterial biological control agents against fungal diseases of crops in laboratory, glasshouse and field experiments while at CEH-Oxford/Cardiff University. I then undertook postdoctoral research at the University of Sheffield followed by the University of Manchester, continuing research into environmental microbiology looking at biogeochemical cycling of nitrogen and sulphur. While at Manchester I moved into medical microbiome research as Researcher Co-Investigator on a grant on T. muris and the impact on the microbiome and host.

## Qualifications

- BSc (Hons) Biological Sciences (Genetics) — University of Birmingham (2000)
- PhD — Cardiff University / CEH-Oxford (2005)
- Postgraduate Certificate in Academic Practice, FHEA — Brunel University London (2019)
- Mental Health First Aider — Brunel University London (2020)

## Responsibilities

- Programme Lead, Biomedical Science Degree, Brunel University London
- Division Outreach Champion, Biosciences
- Lead, FHEQ5 Biomedical Sciences Examinations
- Lead, FHEQ5 Medical Microbiology Study Block`,
    sections: {
      research: `### Research Projects

Xcell: Studying cells and tissue biochemistry in simulated microgravity`,
      teaching: `## Teaching

BB2716 Medical Microbiology (Second Year)`,
      phdTopics: `### PhD projects for research students

- PhD in Antimicrobial Resistant Genes (ARG) and Pollutants – from Seabed to Seafood Platter - BBSRC FoodBio DTP`,
    },
    order: 4,
    publications: ashleyHouldenPublications,
  },
  {
    slug: "keith-redpath",
    name: "Dr Keith Allen-Redpath",
    memberType: "pi",
    role: "Lecturer in Biosciences (Vascular Biology)",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0009-0004-7213-2675" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/keith-allen-redpath-8a73a0167" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=keith+allen-redpath&sort=date" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Keith-Allen-Redpath" },
    ],
    email: "keith.redpath@brunel.ac.uk",
    tel: "+44 (0)1895 265514",
    office: "Heinz Wolff 123a",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/keith-redpath.jpg",
    researchAreaSlugs: ["cardiovascular-diseases"],
    bio: `## Summary

Dr Keith Allen-Redpath graduated with a BSc (Hons) in Biomedical Sciences (Physiology) from the University of Aberdeen in 2009. He undertook a PhD in the laboratory of Professor Graeme Nixon at Aberdeen, part-funded by the National Research Foundation of Korea, investigating how zinc deficiency affects vascular smooth muscle cell signalling in the aorta and carotid arteries, graduating in 2013.

Following his PhD, Keith took up a five-year British Heart Foundation Research Associate position in the laboratory of Professor Valerie O'Donnell at Cardiff University, focusing on how oxidised phospholipids contribute to the development of abdominal aortic aneurysms. In 2018 he joined the University of Reading as a Senior Research Fellow with Professor Parveen Yaqoob, developing a strong interest in extracellular vesicles and their roles in vascular disease including ischaemic heart disease.

In January 2023, Keith was appointed Lecturer in Vascular Biology at Brunel University London, where his research continues to focus on the role of extracellular vesicles in vascular pathology, with the aim of identifying novel therapeutic targets in cardiovascular disease.

## Qualifications

- BSc (Hons) Biomedical Sciences (Physiology) — University of Aberdeen
- PhD Biomedical Sciences — University of Aberdeen
- FIBMS — Fellow of the Institute of Biomedical Sciences
- FHEA — Fellow of the Higher Education Academy`,
    sections: {
      research: `## Research area(s)

Dr Keith Allen-Redpath’s research focuses on the molecular mechanisms that drive vascular dysfunction in cardiovascular disease. His work examines how extracellular vesicles (EVs) regulate coagulation, inflammation, and vascular ageing. Using proteomics, cell and molecular biology, and in vivo models, he investigates signalling pathways that contribute to atherosclerosis, aneurysm formation, and thrombosis. His translational studies integrate mechanistic insights with clinical collaborations to identify novel biomarkers and therapeutic targets for vascular disease.

## Research Interests

- Ischemic heart disease

- Abdominal aortic aneurysms

- Coagulation

- Extracellular vesicles

- Nutrition and zinc deficiency

- Inflammation

- Vascular smooth muscle cell physiology

- Coagulation and thrombosis

- Ageing and vascular senescence`,
      teaching: `## Teaching

- BB1724- Career Planning & Innovation (Block Lead)

- BB1822- Biomedical Sciences Examinations (Block Lead)

- BB1721- The Human Body: Principles of Anatomy & Physiology

- BB1700- Tutoring

- BB1601- Biomedical Science Training

- LS1807- Biochemistry and Molecular and Cellular Biology Examinations (Block Lead)

- BB2555- Work Placement

- BB2735- Human Pathology & Immunology

- BB3091- Final Year Project Supervisor`,
      impact: `## Membership and affiliation

- Fellow of the Institute of Biomedical Sciences

- Visiting Research Fellow, University of Reading

- Member of the Platelet Society

- Member of The Centre for Inflammation Research and Translational Medicine ( CIRTM )

- Fellow of the Higher Education Academy, ( Advance HE )`,
    },
    order: 9,
    publications: keithRedpathPublications,
  },
  {
    slug: "sam-willcocks",
    name: "Dr Sam Willcocks",
    memberType: "pi",
    role: "Lecturer in Biosciences (Microbiology & Infectious Diseases)",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-0756-4859" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sam-willcocks-765a9990/" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=willcocks+s" },
    ],
        email: "sam.willcocks@brunel.ac.uk",
    tel: "+44 (0)1895 265460",
    office: "Heinz Wolff 228",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/sam-willcocks.jpg",
    researchAreaSlugs: ["drug-repurposing"],
    bio: `## Summary

Sam joined Brunel University London as a Lecturer in Biosciences in 2022 from the London School of Hygiene and Tropical Medicine (LSHTM), where he worked as Assistant Professor in the Department of Infection Biology and was previously Head of Biological and Pharmacological Sciences.

He received his PhD in Innate Immunology at the Royal Veterinary College, London in 2008. In 2018, Sam received an MRC Confidence in Concept Award for the development of a novel class of antimicrobials against *Mycobacterium tuberculosis*, and in 2020 was awarded the Wellcome Translational Accelerator Award to determine their mechanism of action.

Sam retains strong links with the Antimicrobial Resistance Centre at LSHTM and holds an Honorary Fellowship at Birkbeck University London.

## Qualifications

- PhD Innate Immunology — Royal Veterinary College, London (2008)

## Responsibilities

- Lecturer, Brunel Medical School
- Honorary Fellow, Birkbeck University London`,
    sections: {
      research: `## Research Interests

My research interests are focussed on:

- Developing new antimicrobials against mycobacterial species, and using molecular approaches to understand their targets, mechanisms of action and resistance

- Exploring the repurposing of existing drugs for use as antimicrobials

- Modelling the role of the host immune system on drug-target interactions in vivo`,
    },
    order: 14,
    publications: samWillcocksPublications,
  },
  {
    slug: "camilla-cerutti",
    name: "Dr Camilla Cerutti",
    memberType: "pi",
    role: "Lecturer in Inflammation, Ageing and Cancer Biology",
    email: "camilla.cerutti@brunel.ac.uk",
    division: "Biosciences",
    tel: "+44 (0)1895 266271",
    office: "Heinz Wolff 113a",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0001-9426-686X" },
      { label: "LinkedIn", url: "https://uk.linkedin.com/in/camilla-cerutti-761825a" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=xujRQHwAAAAJ&view_op=list_works&sortby=pubdate" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=CAMILLA+CERUTTI" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Camilla-Cerutti" },
    ],
    photoUrl: "/images/people/camilla-cerutti.jpg",
    researchAreaSlugs: ["cancer"],
    bio: `## Summary

Dr Camilla Cerutti is a Lecturer in Inflammation, Ageing and Cancer Biology at Brunel University London and visiting researcher at the European Institute of Oncology since 2023.

Her research focuses on vascular and cancer cell biology, in particular on cell–cell interaction and cancer metastasis.

Camilla graduated in Medical Biotechnology (BSc) at the University of Milan Bicocca in Italy. At the same university she completed an MSc in Industrial Biotechnology-Pharmacogenomic in 2009 with an ERASMUS final project placement of one year at the Complutense University of Madrid. Here, she investigated the anti-tumoral effects of cannabinoids on breast cancer via JunD in vitro and via Akt in vivo.

She completed her PhD in neuro-vascular immunology in 2014 at The Open University, studying the role of human brain endothelial microRNAs in leukocyte adhesion in neurodegenerative disorders such as multiple sclerosis.

She developed a microfluidic system to model the interaction of human leukocytes with brain endothelial cells under hemodynamic shear forces in vitro. She found that human brain endothelial miR-155, miR-126 and miR-126* regulate leukocyte trafficking at the blood-brain barrier in inflammatory conditions.

Dr Cerutti joined the Ridley Lab at King’s College London as research associate postdoc, where she investigated the role of RhoGTPases in human breast and prostate cancer cells in the interaction with endothelial cells and during metastasis formation.

This CRUK funded project in collaboration with Professor Muschel’s Lab at the University of Oxford was further developed as senior research associate postdoc at the University of Bristol leading to the discovery that IQGAP1 and NWASP promote human cancer cell dissemination and metastasis by regulating β1-integrin via FAK and MRTF/SRF.

In 2018 she won a Global Research Development Fund from King’s College London to join Peter Searson Nanobiotechnology Lab at Johns Hopkins University to learn the fabrication of 3D perfusable vascular microvessels.

In 2020 Camilla was awarded the iCARE-2 MSCA H2020 fellowship as principal investigator of the project "Single-cell epigenetic and molecular signatures in human breast cancer metastasis formation", a reintegration fellowship in the host lab of Professor Pier Giuseppe Pelicci at the European Institute of Oncology.

Currently, Dr Cerutti’s lab at Brunel University London investigates cancer metastasis mechanisms with 2D and 3D vascular models to study cell-cell interactions by high-content live-cell imaging.

## Qualifications

- BSc Medical Biotechnology
- MSc Industrial Biotechnology – Pharmacogenomic
- PhD Neuro-vascular Immunology

## Responsibilities

- Lecturer in Inflammation, Ageing and Cancer Biology at Brunel University London`,
    sections: {
      research: `## Research Interests

We are interested in unravelling the molecular mechanisms of cell–cell interaction, with a focus on cancer metastasis formation. We develop advanced human 2D and 3D microfluidic vascular models and use high-content live-cell imaging to study how tumour cells interact with the vasculature.

**Key areas:**

- Cancer metastasis and organ-specific vasculatures
- Breast and prostate cancer
- Blood–brain barrier biology
- Microfluidic 2D and 3D human vascular models
- Cell adhesion, migration and signalling (RhoGTPases, β1-integrin, FAK, MRTF/SRF)
- Endothelial cell biology and vascular inflammation
- Haemodynamic shear stress
- High-content live-cell imaging

## Research Grants

### Current

- 2025 — Diabetes UK Early Career Small Grant *(co-PI)*
- 2025 — Royal Society International Exchanges 2024 Global Round 3 *(PI)*
- 2024 — BRIEF Award, Brunel University London *(PI)*
- 2024 — BHF Non-Clinical PhD Fellowship, British Heart Foundation *(co-PI)*

### Previous

- 2020–2023 — iCARE-2 MSCA H2020 Fellowship *(PI)* — European Institute of Oncology, Milan
- 2018 — Global Research Development Fund, King’s College London`,
      teaching: `## Modules

Dr Cerutti contributes to teaching across the Life Sciences undergraduate and postgraduate programmes at Brunel, including lectures and practical sessions in the following modules:

- **BB3091** Final Year Projects *(Trimester 1)*
- **BB2704** Molecular and Cellular Biology *(Trimester 2)*
- **BB2708** Clonogenic Assay — lecture and practicals *(Week 19)*
- **BB3733** Molecular Pharmacology and Toxicology *(Week 25)*
- **BB5715** Cancer Biology: Mechanisms and Treatments *(Week 25)*
- **BB2802 / LS2800** Primary Literature Interrogation and Synthesis *(Trimester 1)*
- **BB2555** Work Placement
- **BB2803** Data Evaluation and Reporting
- **BB2804** Data Analysis, Interpretation and Presentation
- **BB3801** Scientific Communication
- **LS2808** Cell Biology Data Evaluation and Reporting`,
      impact: `## Outreach and Public Engagement

Dr Cerutti has a strong commitment to science outreach, particularly to young people from underrepresented and disadvantaged backgrounds.

- **2024** — *In2Science UK*, Brunel University London. Hosted four young people from disadvantaged backgrounds for a week of lab-based and hands-on STEM activities in Biosciences.
- **2021–2022** — *AIRC@school* (scuola.airc.it). Outreach with high school students in Cremona and Seregno, Italy, presenting cancer research and the life of a scientist.
- **2019** — *Soapbox Science*, Bristol. Public outreach promoting women scientists.
- **2019** — *The Big Bang @ Weston*. Science outreach with young adults at the University of Bristol.
- **2018** — *United Learning*. ‘Scholars’ Club’ talk on university access and enrichment at Walthamstow Academy, London.
- **2017–2018** — *Scientists & Co* (scientistsandco.org). ‘Shadow a Scientist’ programme — CV clinic and mock interview sessions for pupils from disadvantaged backgrounds.
- **2016–2017** — *King’s STARS* (Science Training for Aspiring Research Scientists), King’s College London. Hosted year-12 students for laboratory demonstrations in biochemistry.
- **2017** — *Science Gallery London*. Contributed ideas on communicating science through art to young people.

*DBS-checked and safeguarding-trained for all activities involving young people.*`,
      phdTopics: `## Current PhD Students

- **Miss Magda Malliari** — BHF Non-Clinical PhD Studentship: *Promoting inflammation resolution as a therapeutic strategy for cardiovascular pathologies*

## Available PhD Projects

- British Heart Foundation (BHF)-funded non-clinical PhD Studentship in cardiovascular and vascular biology
- MSCA Postdoctoral Fellowships — prospective applicants are welcome to contact Dr Cerutti directly`,
    },
    order: 2,
    publications: camillaCeruttiPublications,
  },
  {
    slug: "doreen-lau",
    name: "Dr Doreen Lau",
    memberType: "pi",
    role: "Lecturer in Inflammation, Ageing and Cancer Biology",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-7623-2401" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/doreen-lau-ai-hui/" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=Z17uCZUAAAAJ" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=lau+d" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Doreen-Lau" },
    ],
        email: "doreen.lau@brunel.ac.uk",
    tel: "+44 (0)1895 265508",
    office: "Heinz Wolff 227",
    division: "Biosciences",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/doreen-lau.jpg",
    researchAreaSlugs: ["cancer"],
    bio: `## Summary

Dr Doreen Lau is a Lecturer at Brunel University London and a Visiting Researcher at the University of Cambridge. She began her scientific career at the Agency for Science, Technology and Research (A*STAR) in Singapore, focusing on functional genomics and imaging in developmental biology. She later earned her PhD at the University of Cambridge as a Cancer Research UK and Cambridge Trust Scholar, specialising in cancer immunology and the clinical translation of molecular imaging biomarkers for cancer immunotherapy in patients and preclinical models.

Dr Lau has a broad interdisciplinary background spanning cancer immunology, pharmacology, and biomedical imaging. She trained at Imperial College London with Professor Eric Aboagye, worked at the University of Oxford on antigen presentation in cancer with Professor Tim Elliott, and served as a Visiting Scientist at AstraZeneca developing tissue-based imaging biomarkers in immuno-oncology.

Her contributions to cancer immunology and imaging have been recognised with multiple international awards, including the 1st Place William G. Negendank Young Investigator Award in Cancer Imaging (ISMRM, 2018), the Women in Molecular Imaging Network Scholar Award (WMIS, 2019), a Top 3 PhD Award (ESMI, 2021), and the Merit Travel Grant and Best Poster Award in Immuno-Oncology Biomarker Development (ESMO, 2023).

## Qualifications

- BSc Life Sciences (Molecular and Cell Biology) — National University of Singapore (2009)
- Specialist Diploma in Biomedical Engineering — Singapore Polytechnic (2014)
- MRes Cancer Imaging and Pharmacology — Imperial College London (2015)
- PhD Cancer Immunology and Biomedical Imaging — University of Cambridge (2020)
- AFHEA — Associate Fellow of the Higher Education Academy (2022)

## Responsibilities

- Principal Investigator, Centre for Inflammation Research and Translational Medicine, Brunel University London
- Visiting Researcher, University of Cambridge
- Junior Research Fellow in Sciences, Wolfson College, University of Oxford (elected 2022)
- Co-opted Member, Wellcome Trust Immune System in Health & Disease Discovery Research Advisory Group
- Associate Member, MRC Molecular and Cellular Medicine Board`,
    sections: {
      research: `## Research area(s)

Cancer immunology, immunotherapy, biomarkers, imaging science, biomedical engineering

## Research Interests

Dr Lau’s research group integrates cancer immunology, experimental modelling, and advanced imaging to understand and overcome barriers to effective immunotherapy. The team investigates how immune recognition of cancer is shaped by antigen presentation, the tumour microenvironment, and host factors, and how these interactions determine treatment response, resistance, and immune-related toxicity.

To address these questions, the group combines systems immunology and multi-omic profiling to study cancer and immune cells at genetic, protein, and metabolic levels in both patient samples and preclinical models. They also employ chemical biology, bioengineering, and innovative in vitro and ex vivo platforms to dissect tumour–immune crosstalk, alongside advanced imaging technologies to visualise immune activity and tumour biology from single cells to the whole organism.

These efforts aim to uncover fundamental principles of tumour-immune interactions and translate them into biomarkers, diagnostics, and imaging tools for patient stratification, therapy monitoring, and more effective immunotherapies. In parallel, the group contributes to early-phase drug discovery by facilitating the screening and validation of novel immunotherapeutics, with approaches that also have broader relevance to chronic inflammation, infection, and autoimmune diseases.

### Research Collaboration

Open to academic collaboration, industry partnerships and joint PhD supervision.`,
      teaching: `## Teaching

Undergraduate modules: BB2735 Human Pathology and Immunology, BB2812 Synoptic Examination 2, BB3091 Final Year Projects, BB3733 Molecular Pharmacology and Toxicology

Masters modules and supervision of projects on cancer immunology`,
      impact: `## Membership and affiliation

Dr Lau holds international leadership roles to drive collaboration in immuno-oncology research, imaging science, and the advancement of women scientists and early-career professionals. She is a working group co-leader for the IMMUNO-model EU COST Action CA21135, focused on modeling immunotherapy response and toxicity in cancer. In addition, she serves on the Women in Molecular Imaging Network Leadership Committee for the World Molecular Imaging Society and was Chair (2021–2024) of the British young ESMI group within the European Society for Molecular Imaging. Dr Lau is also an active member of the British Society for Immunology, where she has chaired sessions at the annual congress and contributed as a guest editor for the society's journal. She is a member of the Association for Cancer Immunotherapy (CIMT), engaging with the international community to advance research and collaboration in cancer immunotherapy. She is also a member of the UK GIBA Network, contributing to knowledge on how the gut, immune system and brain interact in the context of inflammatory diseases. In recognition of her expertise, Dr Lau was appointed as a Co-opted Member of the Wellcome Trust Immune System in Health & Disease Discovery Research Advisory Group and as an Associate Member of the MRC Molecular and Cellular Medicine Board.

## Media interests

2025 Must-read articles from the BSI Journals - British Society for Immunology - "Imaging antigen processing and presentation in cancer"

Ars Technica, IFLScience, The Telegraph - Cancer Imaging`,
      phdTopics: `## Topics

Cancer immunology, immunotherapy, biomarkers, imaging science, biomedical engineering

### PhD projects for research students

- AI-Driven Multimodal Biomedical Data Fusion

- Hypoxia-driven macrophage modulation in cancer and its impact on T cell immunotherapy

### JOIN OUR GROUP

We are always looking for enthusiastic and driven researchers to join our group. If you are interested in cancer immunology, imaging and translational research, we encourage you to get in touch.

### PhD Students

Students interested in pursuing graduate studies are encouraged to contact Dr Lau to discuss potential research projects aligned with the group's interests. For information on PhD applications, entry requirements, fees, and funding, please visit: Biosciences PhD | Brunel University of London .

### PhD, Postdoctoral, and Visiting Scholar Opportunities

We welcome qualified applicants to explore the following funding schemes to join our group:

- Brunel-CSC Scholarship (for Chinese students and scholars)

- Commonwealth PhD Scholarships (for students from Commonwealth countries)

- Marie Skłodowska-Curie Actions (MSCA) Postdoctoral Fellowships

- Royal Society Newton International Fellowships

Please contact Dr Lau well in advance of the relevant deadlines to discuss potential projects and develop a competitive proposal. For all enquiries, please include a brief CV and short statement of research interests.`,
    },
    order: 5,
    publications: doreenLauPublications,
  },
  {
    slug: "veena-kumari",
    name: "Prof. Veena Kumari",
    memberType: "pi",
    role: "Professor of Psychology",
    externalLinks: [
      { label: "ORCID iD", url: "https://orcid.org/0000-0002-9635-5505" },
      { label: "Google Scholar", url: "https://scholar.google.co.uk/citations?hl=en&user=biruF74AAAAJ" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=kumari+v" },
    ],
    email: "veena.kumari@brunel.ac.uk",
    tel: "+44 (0)1895 268053",
    office: "Quad North 148",
    division: "Psychology",
    department: "Department of Life Sciences",
    college: "College of Health, Medicine and Life Sciences",
    photoUrl: "/images/people/veena-kumari.jpg",
    bio: `## Summary

Professor Veena Kumari obtained a PhD in Psychology from Banaras Hindu University, India in 1993 before joining the Institute of Psychiatry, London for postdoctoral research. She became a Beit Memorial Research Fellow in 1999, a Wellcome Senior Fellow in Basic Biomedical Science in 2002, and was appointed Full Professor in 2006 at the Institute of Psychiatry, Psychology and Neuroscience, King’s College London. She joined Brunel University London in January 2018 as Professor of Psychology and Director of the Centre for Cognitive and Clinical Neuroscience (CCN).

Her research focuses on the neurobiological effects of pharmacological and psychological treatments in psychosis, the neurobiology of violence in mental illness, psychobiology of addiction, and personality and brain functioning. She has over 300 publications in leading psychology, psychiatry and neuroscience journals.

Professor Kumari has received numerous national and international awards including the Young Investigator Award from the National Alliance of Research on Schizophrenia and Depression, USA (1999), the BAP Clinical Psychopharmacology Prize (2002), the Wellcome Senior Fellowship (2002–2009), the Humboldt Research Award (2014), and a Bonn International Fellowship (2020/21). She has supervised a large number of postgraduate and doctoral students.

## Qualifications

- PhD Psychology — Banaras Hindu University, India (1993)

## Responsibilities

- Professor of Psychology, Brunel University London
- Director, Centre for Cognitive and Clinical Neuroscience (CCN)
- Editor or editorial board member for multiple psychology, psychiatry and neuroscience journals`,
    sections: {
      research: `## Research Interests

- Cognitive and affective deficits in schizophrenia, depression and personality disorders

- Neurobiological effects and predictors of outcome following drug and psychological treatments

- Neurobiology of violence in psychosis and personality disorders

- Sleep deprivation and mental health

- Neuroscience of mindfulness

- Cognitive psychopharmacology, particularly the effects of psychostimulants, antipsychotics, nicotine and anxiolytics

- Neurobiology of sex related differences

- Personality neuroscience

### Research Projects

Sensorimotor gating in people with (psychotic-like) transpersonal experiences

Air pollution, brain health and wellbeing in India

A psychophysiology study of sensory processing in meditators

Recovering sense of smell and taste

Childhood maltreatment: emotional consequences and potential intervention

### Research Projects – Select

Childhood Maltreatment: Emotional Consequences and Potential Intervention

Funded by Medical Research Council, UK (Newton Fund)

14/07/2015-13/07/2018

Effect of D-Serine on Social Threat Processing

Funded by - Biomedical Research Centre, SLAM & KCL

Kumari, V. (PI), Peters, E., Williams, S, Mehta, M.

01/10/2015-01/09/2017

Imaging Avatar Therapy for Hallucinations in Psychosis (PI)

Funded by - Biomedical Research Centre, KCL

Kumari, V. (PI), Craig, T., Garety, P.

£34,880 (fMRI scanning)

01/04/2014-01/06/2016

Cognitive and Neural Processes in the Pathway to Psychosis

Kumari, V. (PI), Simmons, A., Peters, E.

£10,900 (fMRI scanning)

The Mindful Eye: Smooth Pursuit and Saccadic Eye Movements in Meditators and Non-meditators

Funded by - BIAL Foundation, Portugal

Kumari, V. (PI), Antonova, E.

One ear is better than two; but why and when?

Kumari V. (PI), Antonova, E.

Neural Effects of Mindful Attention on Sensory Information Processing

Funded by - John Templeton Foundation, USA

Antonova, E. (PI), Chadwick, P., Kumari, V., Williams, S.

Biosocial Basis of Violence in Mental Disorders

Funded by - British Academy, UK

Kumari, V. (PI), Gudjonsson, G.

A Pharmacological Validation of the Joystick Runway Task as a Repeatable and Objective Behavioural Assay of Anxiety in Humans

Funded by - Medical Research Council (MRC), UK

Perkins, A. (PI), Kumari, V., Williams, S.

Personality and Reproductive Fitness

Kumari, V (PI), Ettinger, U.

The Neurobiological Aetiology of Emotional Dysfunction in Reactive and Instrumental Violence

Funded by - Department of Health, UK

Blackwood, N., Ffytche, D., Hodgins, S. (PI), Kumari, V.

The Neuroanatomical Basis of Frontal Lobe Cognitive Dysfunction in Frontal Lobe and Idiopathic Generalised Epilepsies

Funded by - Wellcome Trust, Uk

Richardson, M. (PI), Barker, G., Kumari, V.

Sex Differences in Sensory Processing

Kumari, V. (PI), Cleare, A.

Neural Correlates of Response to Cognitive Behaviour Therapy in Schizophrenia: A Functional MRI Investigation

Funded by - Wellcome Trust, UK

Insight in Schizophrenia: Relationship to Deficits in Brain Functions and Structures, and Responsiveness to Cognitive Behaviour Therapy

Kumari, V. (PI, Prize PhD studentship for Cooke, M.), Peters, E., Williams, S.

Neural Correlates of Deficient Information Processing in "Psychosis-Prone" Healthy Individuals: A Functional Magnetic Resonance Imaging Study

Cognitive Enhancement with Rivastagmine in Schizophrenia

Funded by - Stanley Foundation, USA

Information Processing Deficits in Schizophrenia: Effects of Atypical as Compared to Typical Antipsychotics

Funded by - Beit Memorial Foundation, UK

Differential Efficacy of Atypical and Conventional Antipsychotics in Normalising Information Processing Deficits in Schizophrenia: A Functional MRI Investigation

Funded by - NARSAD (Brain and Behavior Research Foundation), USA

Schizophrenia and Violence - a Whole Brain functional MRI study

Kumari, V., Sharma, T.

### Research group(s)

- CCN`,
      teaching: `## Teaching

MSc Cognitive and Clinical Neuroscience

- Module Lead for PY5616 - Cognitive and Clinical Neuroscience - Core Topics`,
      impact: `## Membership and affiliation

- Panel Member for Psychology, Psychiatry & Neuroscience Unit of Assessment, Research Excellence Framework Exercise 2021 (the UK’s system for assessing the quality of research in UK higher education institutions)

- Member of the Scientific Council, Mental Health Research UK (the first UK charity dedicated to raising funds for research into mental illnesses, their causes and cures), 2021-2024

- Panel Member for Psychology, Psychiatry and Neuroscience, Research Council of Norway. 2017, 2018, 2019 and 2021.

- President, The British Society for the Psychology of Individual Differences (BSPID), 2020-2023

- Chair of the Ethics Committee, Schizophrenia International Research Society (SIRS) – 2021-22

### Editor/ Editorial Board Positions (Selected)

- Specialty Co-Chief Editor

- Psychological Therapy & Psychosomatics, Frontiers in Psychiatry. 2022 -

### Associate/Academic Editor

- Cortex. 2019 - 2024

- Brain and Cognition. 2020-present

- Schizophrenia Research and Treatment. 2010 - 2024

- Personality and Individual Differences. 2006- 2016

- Current Psychopharmacology. 2016 - 2020

### Guest Editor

Special issues on ‘Neurobiological Investigations of Dimensionally Conceptualized Personality Pathology’. Journal of Personality Disorders. 2020

### Volume Editor

- Electrophysiology and Psychophysiology in Psychiatry and Psychopharmacology. Current Topics in Behavioral Neurosciences, Vol 21, 2014 (Editors; V Kumari, P Bob, N Boutros)

### Editorial/Advisory Board Member

- European Psychiatry. 2019 ­– present

- Personality Neuroscience. 2019 – present

- Acta Neuropsychiatrica. 2006 - 2011

- Personality and Individual Differences. 2016 - 2018.

- Psychiatry Research: Neuroimaging. 2009 - 2018

- Australian and New Zealand Journal of Psychiatry. 2011-2020

### Membership of Professional Organizations

- British Psychological Society (BPS)

- British Psychopharmacology Association (BAP)

- The British Society for the Psychology of Individual Differences (BSPID) (founding member)

- Society of Biological Psychiatry (SOBP)

- The Society of Neuroscience (SFN)

- Schizophrenia International Research Society (SIRS)

### Reviewing for Journals and National and International Funding Bodies

Reviewer for a number of journals (including Behaviour and Brain Sciences, Archives of General Psychiatry, American Journal of Psychiatry, Schizophrenia Research, Brain, Behavioural Brain Research, Biological Psychiatry, Neuropsychopharmacology , Psychophysiology, Journal of Psychophysiology, Psychopharmacology, Journal of Psychopharmacology, Behavioural Pharmacology, Personality and Individual Differences), and national (e.g. Medical Research Council, Wellcome Trust) and international funding bodies (e.g. Swiss Federal Institute of Technology, German Research Foundation, National Institute of Mental Health, USA; Research Council of Norway).

### Presentations at National and International Meetings

Over 150 presentations including invited talks and symposiums at Convention of the Society of Biological Psychiatry (US), International Schizophrenia Research Society Conference, Schizophrenia Winter Workshop, Meeting of the Association of European Psychiatry (AEP), Congress of the European College of Neuropsychopharmacology (ECNP), World Congress of Biological Psychiatry, CINP (Collegium Internationale Neuro-Psychopharmacologicum) Congress, and Meeting of the Society of Psychophysiological Research.

Recent Presentations - Select

- Invited Lecture. Neurobiology of Violence in Schizophrenia and Antisocial Personality Disorder: The Role of Childhood Abuse. 22nd Annual Conference of British Indian Psychiatric Association, 2nd-3rd June 2018.

- Invited Lecture. Nicotine Dependence in Schizophrenia: All Smoke ? Substance Abuse Seminar. Yale University School of Medicine, 24th May 2017.

- Key Note, Targeting Abnormal Neural Circuits in Schizophrenia: From Molecules to Minds ’ at the 5th Bonn Humboldt Award Winners‘ Forum “Frontiers in Neuroscience: Multi-Scale Analysis of the Nervous System – From Molecules to Circuits”, 8th Oct 2015, Bonn, Germany

Member of the Program Committee - 8th Annual International Conference on Cognitive and Behavioral Psychology (CBP 2019). http://cognitive-behavior.org/`,
      phdTopics: `### PhD projects for research students

- Funding for the Executive Dean’s PhD Studentship. A Comprehensive Characterisation of Mentally-Disordered Offenders and Prediction of Treatment Outcomes

### Doctoral Supervision

Topic: Neuropsychology of COVID-19

PhD: Centre for Cognitive Neuroscience, Brunel University London

Start Date: 01 Oct 2020 (FT)

Topic : Mindfulness and Sensory Processing

Start date: 01 Oct 2020 (FT)

Topic : Cholesterol and Violence in Schizophrenia

Start date: 01 Jan 2020 (PT)

Topic: Music for the Mind

Start date: 01 Oct 2018 (PT)

Topic: Reading skills deficits in mental illness: A multimodal analysis

Start date: 01 Oct 2018- Submitted March 2022.

*Dr Luke Aldridge-Waddon

Topic: The Influence of Dimensional Psychopathology on Social and Monetary Reward Sensitivity and Reactivity

Date: 01 Oct 2018- Completed Sept 2021.

Topic: The Contribution of Dissocial Personality Disorder to Cognition, Emotion Processing and Clinical Outcome in Violent Men with Psychosis

PhD (Institute of Psychiatry, Psychology and Neuroscience, King’s College London, UK) - awarded 2017.

*Dr Adegboyega Sapara

Topic: Neurobiology of Insight in Psychosis: A Functional and Structural MRI Study

PhD (Institute of Psychiatry, Psychology and Neuroscience, King’s College London, UK) - awarded 2016.

Topic: Breaking through Working Memory Components and Functions in Relation to Higher Order Cognition: An Event Related Potential Study

Topic: Cognitive and Neural Processes in the Pathway to Psychosis

Topic: Noise Stress and Cognitive Function in Schizophrenia

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2015.

Topic: The Neural Mechanisms of CBT and Resilience to Relapse in Psychosis

D Clin Psych (Institute of Psychiatry, King’s College London, UK) - awarded 2015.

Topic: Emotional Processing in Mood Disorder: Clarifying the Role of Childhood Trauma

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2012.

*Dr Preethi Premkumar

Topic: Neural, Clinical and Cognitive Predictors of Cognitive Behaviour Therapy for Psychosis

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2011.

Dr Jonathan O'Muircheartaigh

Topic: The Neuroanatomical Basis of Cognitive Dysfunction in Frontal Lobe and Juvenile Myoclonic Epilepsies

Topic: Cognitive and Motivational Determinants of Smoking Behaviour

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2010

Topic: Gender Differences in Patterns of Neural Activation during Working Memory and Emotional Decision Making in Bipolar Disorder

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2010.

Topic: Cognitive Deficits in Schizophrenia: State or Trait?

Topic: Event-Related Potential Studies of Heterogeneity in the Schizophrenia Spectrum

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2009.

Topic: The Experience of Thirst and Drinking in Haemodialysis Patients on a Fluid Restriction

Dr Anastasia Christodoulou

Topic: Cognitive Vulnerability Indicators in Bipolar Disorder

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2008.

Topic: The Role of Symptoms and Neuroticism in Coping Strategies in Schizophrenia.

D Clin Psych (Royal Hollway, University of London, and Institute of Psychiatry, King’s College London, UK) - awarded 2007.

Topic: Insight and Coping in Schizophrenia: Relationship to Executive Function and Brain Structures

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2006.

Topic: The Neurobiology of Violence in Mental Illness

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2005.

Topic: Structural Alterations in Schizophrenia: Relationship to Cognitive Deficits and Drug Response

PhD (Institute of Psychiatry, King’s College London, UK) - awarded 2004.

Topic: Sex Differences and Hormonal Influences in Cognitive Performance in Normal and Schizophrenic Populations

PhD (City University, London, and Institute of Psychiatry, London, UK) - awarded 2003.

Topic: Smooth Pursuit and Antisaccade Eye Movements as Endophenotypes in Schizophrenia Spectrum Research

PhD (Goldsmiths College, London, and Institute of Psychiatry, London) - awarded 2002.

Topic: An Experimental and Neuroimaging Study into the Effects of Nicotine on Prepulse Inhibition in Schizophrenia.

PhD (City University, London, and Institute of Psychiatry, London) - awarded 2002.`,
    },
    order: 15,
    publications: veenaKumariPublications,
  },
  {
    slug: "cristiano-scotta",
    name: "Dr Cristiano Scottà",
    memberType: "associate-member",
    photoUrl: "/images/placeholdersilhouette.webp",
    researchAreaSlugs: ["infections-and-immunity"],
    order: 51,
  },
  {
    slug: "enrique-castro-sanchez",
    name: "Dr Enrique Castro-Sanchez",
    memberType: "associate-member",
    photoUrl: "/images/placeholdersilhouette.webp",
    researchAreaSlugs: ["infections-and-immunity"],
    order: 52,
  },
  {
    slug: "ansar-pathan",
    name: "Dr Ansar Pathan",
    memberType: "associate-member",
    photoUrl: "/images/placeholdersilhouette.webp",
    researchAreaSlugs: ["microbiome-and-health"],
    order: 53,
  },
  // Doctoral Researchers and Fellows
  { slug: "nazar-beirag", name: "Nazar Beirag",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 100 },
  {
    slug: "zabreen-busharat",
    name: "Zabreen Busharat",
    memberType: "doctoral-researcher",
    photoUrl: "/images/placeholdersilhouette.webp",
    order: 101,
  },
  { slug: "ylenia-ciciro", name: "Ylenia Cicirò",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 102 },
  {
    slug: "christopher-dsouza",
    name: "Christopher D'Souza",
    memberType: "doctoral-researcher",
    photoUrl: "/images/placeholdersilhouette.webp",
    order: 103,
  },
  { slug: "karanjit-das", name: "Karanjit Das",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 104 },
  { slug: "christiana-doulami", name: "Christiana Doulami",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 105 },
  { slug: "fred-jonathan-edzeamey", name: "Fred Jonathan Edzeamey",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 106 },
  {
    slug: "kavita-gadar",
    name: "Kavita Gadar",
    memberType: "doctoral-researcher",
    photoUrl: "/images/placeholdersilhouette.webp",
    order: 107,
  },
  { slug: "angila-gurung", name: "Angila Gurung",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 108 },
  { slug: "luxshieha-hareymaaran", name: "Luxshieha Hareymaaran",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 109 },
  { slug: "periklis-katopodis", name: "Periklis Katopodis",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 110 },
  { slug: "gideon-maccarthy", name: "Gideon MacCarthy",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 111 },
  { slug: "ruchira-mann", name: "Ruchira Mann",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 112 },
  { slug: "denise-ragusa", name: "Denise Ragusa",
    photoUrl: "/images/placeholdersilhouette.webp", memberType: "doctoral-researcher", order: 113 },

];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
