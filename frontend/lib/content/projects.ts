export type Investigator = {
  role: "PI" | "External PI" | "Co-investigator" | string;
  name: string;
  /** Slug into our local /people/<slug> page if the investigator is a CIRTM member. */
  personSlug?: string;
  /** Full URL to an external profile (e.g. Brunel staff page) for collaborators who aren't CIRTM members. */
  externalUrl?: string;
};

export type SustainableDevelopmentGoal = {
  num: number;
  label: string;
};

export type ProjectStatus = "Ongoing" | "Completed";

export type Project = {
  slug: string;
  title: string;
  researchAreaSlugs: string[];
  description: string;
  investigators: Investigator[];
  funder?: string;
  imageUrl?: string;
  sdgs?: SustainableDevelopmentGoal[];
  status?: ProjectStatus;
  /** ISO date (YYYY-MM-DD) of the last update on the source listing. */
  lastModified?: string;
};

export const projects: Project[] = [
  {
    slug: "investigating-innate-immune-signalling-in-gulf-war-illness-and-blast-related-tbi",
    title: "Investigating innate immune signalling in Gulf War Illness and blast-related TBI",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Dr Jacqueline Cliff", personSlug: "jacqueline-cliff" },
    ],
    lastModified: "2026-05-05",
    funder: "Self-funded PhD",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/soldiers-holding-guns-in-desert.x99d7d988.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
      { num: 4, label: "Quality Education" },
      { num: 10, label: "Reduced Inequality" },
      { num: 8, label: "Decent Work and Economic Growth" },
    ],
    description: `This project explores whether persistent changes in innate immune signalling contribute to long‑term symptoms in veterans with Gulf War Illness and blast‑related traumatic brain injury.
It focuses on myeloid‑derived suppressor cells and their cytokine activity, alongside upstream HMGB1–P2X7–NLRP3 signalling. By comparing immune markers in affected and healthy groups, the study aims to identify measurable biological differences behind chronic post‑deployment conditions.

### Understanding long‑term health impacts on veterans

Long‑term health problems following military service - including Gulf War Illness and blast‑related traumatic brain injury - remain poorly understood, even though they affect many veterans. Persistent symptoms such as fatigue, pain and cognitive difficulties often lack clear biological explanations, which makes diagnosis, treatment and support harder.

This research tackles that gap by examining immune‑signalling mechanisms, particularly the role of myeloid‑derived suppressor cells and the HMGB1–P2X7–NLRP3 pathway, in chronic inflammation. By identifying measurable biological differences, the project strengthens scientific understanding, supports fairer recognition of veteran health conditions, and informs future research, clinical practice and policy to improve long‑term care and wellbeing.

This project is distinctive in its focus on the HMGB1–P2X7–NLRP3 innate immune‑signalling pathway in living veterans with Gulf War Illness and blast‑related traumatic brain injury - an area that has not been systematically explored. It centres on myeloid‑derived suppressor cells and their cytokine activity, linking upstream danger signalling to downstream immune regulation.

By analysing peripheral blood using integrated approaches - including flow cytometry, inflammasome assays and cytokine profiling - the study provides a minimally invasive but comprehensive assessment of immune function. Comparing multiple veteran cohorts with healthy controls helps identify shared and condition‑specific mechanisms. This approach addresses a critical gap in understanding upstream immune processes and offers new insights into chronic inflammation behind persistent post‑deployment symptoms.

### Background and rationale

Many veterans experience persistent symptoms years after deployment, including fatigue, chronic pain and cognitive difficulties. Despite extensive research, the biological mechanisms behind these long‑term conditions - particularly Gulf War Illness and blast‑related traumatic brain injury - remain poorly understood. Evidence suggests that chronic neuroinflammation and immune dysregulation may play a role, but the upstream signalling pathways driving these processes are still unclear.

**Research aims and objectives**

This project investigates whether persistent activation of innate immune signalling contributes to long‑term symptoms in affected veterans. It focuses on the HMGB1–P2X7–NLRP3 pathway and its relationship with myeloid‑derived suppressor cells (MDSCs) and cytokine activity.

**Key objectives:**

- Assess activation of the HMGB1–P2X7–NLRP3 signalling pathway

- Evaluate cytokine production

- Characterise MDSC populations in peripheral blood

- Compare findings across Gulf War Illness, blast‑related TBI and healthy military controls

**Methodology**

This cross‑sectional observational study involves a single visit per participant.

**Data collection includes:**

- Informed consent and a symptom questionnaire

- Peripheral blood sampling via venepuncture

**Laboratory techniques:**

- Flow cytometry to assess immune cell populations and P2X7 receptor expression

- Inflammasome activation assays to measure IL‑1β and IL‑18 release

- ELISA to quantify circulating HMGB1 and cytokines

This integrated approach provides a detailed, minimally invasive assessment of immune signalling.

**Innovation and contribution**

This project is among the first to investigate upstream innate immune signalling in living veterans, linking danger‑associated molecular signalling (HMGB1) with inflammasome activation and MDSC‑mediated immune regulation. By combining multiple immunological techniques and comparing distinct veteran cohorts, it addresses a critical gap in understanding chronic inflammatory mechanisms.

**Expected impact**

The research aims to identify measurable biological differences associated with persistent post‑deployment symptoms.

**Findings may:**

- Advance understanding of chronic inflammation in veteran health

- Inform future biomedical and translational research

- Support improved clinical recognition and long‑term care strategies

*(self‑funded PhD)*`,
  },
  {
    slug: "investigating-thrombo-inflammation-in-disease",
    title: "Investigating thrombo-inflammation associated with cardiovascular diseases",
    researchAreaSlugs: ["vascular-cardiovascular-sciences"],
    investigators: [
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-27",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/heart-organs1.x35fac4e4.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Cardiovascular disease (CVD), including heart disease and stroke are leading causes of mortality in the UK and worldwide. CVD is a multifactorial disease in which the number of risk factors correlates with disease progression and worse outcome. Common to the comorbidities and risk factors for CVDs is inflammation, which occurs through the crosstalk between inflammatory leukocytes, platelets and the vascular endothelium. Systemic inflammation is a potent prothrombotic stimulus, and inflammatory mechanisms upregulate procoagulant factors, downregulate natural anticoagulants and inhibit fibrinolytic activity. Thus, inflammation can beget local thrombosis, and thrombosis can amplify inflammation.

Ischemia reperfusion injury (I/RI) is a common complication of CVDs. The interdependent connection of both thrombosis and inflammation in eliciting a detrimental pro-thrombotic and pro-inflammatory state after I/RI has led to the concept of thrombo-inflammation. A thrombo-inflammatory state has been shown to be present in a number of common diseases including myocardial infarction, stroke, deep vein thrombosis, acute kidney disease, peripheral artery disease, infectious diseases, cancer and disseminated intravascular coagulation (DIC). During reperfusion, the rapid inflammatory response that ensues leads to microvascular dysfunction involving the adherence of platelets and neutrophils at ischaemic vascular lesions, which increase the risk of secondary thrombotic events and further tissue injury. Thus, thrombogenesis is being considered as a potentially promising target for anti-thrombotic therapy.

Inflammation and hypercoagulability have been shown to link arterial and venous thrombosis and epidemiological studies have focussed on the presence of risk factors including hypertension, chronic kidney disease, obesity, diabetes, smoking and more recently coronavirus 2 (SARS-CoV-2) infection (which is associated with coagulopathy causing venous and arterial thrombosis). Interestingly, patients with venous thrombosis are at increased risk of arterial thrombosis and patients with arterial thrombosis are at increased risk of venous thrombosis. Furthermore, the global burden of thrombo-inflammation is likely to increase with the ageing population, because both thrombosis and inflammation increase with age.

A number of cellular constituents are involved in thrombo-inflammation, with neutrophils and platelets playing key roles. However, it remains poorly understood how neutrophil-platelet interactions are regulated under various thrombo-inflammatory disease conditions. We recently discovered a novel role for platelets in inflammation resolution, uncovering a major role for anti-inflammatory pro-resolving mediator Annexin A1 (AnxA1) which was able to suppress integrin (αIIbβ3) activation via small GTPase Ras-related protein 1, Rap1, altering platelet phenotype from pathogenic to regulatory in cerebral I/RI. This study was the first to link AnxA1 with integrin signalling, supporting AnxA1 as an anti-thrombotic agent.

This project focuses on further understanding and characterising thrombo-inflammation in different disease states, with a particular focus on the role of platelets beyond just haemostasis and thrombosis. Major clinical importance will be to define the drivers and molecular mechanisms regulating thrombo-inflammation in specific disease states, providing mechanistic insight into both inflammation and thrombosis as central pathological processes to CVDs. Additionally, we will focus on pharmacologically manipulating the thrombo-inflammatory profile to promote its resolution.** Collectively, we aim to develop novel strategies to not only protect against I/RI, but to provide new therapeutic possibilities for patient populations with a thrombo-inflammatory phenotype.**`,
  },
  {
    slug: "promoting-inflammation-resolution-in-sickle-cell-disease",
    title: "Promoting inflammation resolution in sickle cell disease",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Completed",
    lastModified: "2024-09-27",
    funder: "The Royal Society; The Wolfson Foundation",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/sickle-cell.x0d5dd7b6.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `**Targeting Formyl Peptide Receptors to Promote Resolution Following Cerebral Ischaemia/Reperfusion Injury in Sickle Cell Disease **

Ischaemic stroke is a leading cause of death and disability, with inflammation crucially involved in AIS pathophysiology. During ischaemic stroke, blood supply to parts of the brain becomes limited causing cell death. This complex response involves blood vessels, chemical mediators and immune cells (termed "inflammation-immunity-infection"). Ongoing or worsening inflammation further damages the brain. Reducing, and ideally eliminating inflammation is critical to recovery from stroke – a process termed 'resolution'. The ideal outcome of inflammation is its resolution, which is a tightly orchestrated process. We are particularly interested in one key player of resolution, the formyl peptide receptor 2 (Fpr2/ALX), which is found on certain immune cells. In mice, targeting Fpr2/ALX limits brain damage during stroke.

This project focuses on an in vivo model of stroke that is coupled to a chronic inflammatory condition: Sickle Cell Disease (SCD), a disorder affecting red blood cells. People with SCD have chronic inflammation throughout their bodies and are at high-risk of ischaemic stroke. We are investigating whether targeting the Fpr2/ALX, which resolves inflammation, can limit brain damage during SCD-associated stroke. To test this hypothesis, we are initiating stroke in SCD mice to study its extent in the presence of drugs affecting Fpr2/ALX.

The potential impact of this research project is far reaching. It will provide insight into the pathophysiology of stroke, discovering novel ways to promote resolution of inflammation post stroke in SCD.`,
  },
  {
    slug: "pharmacological-strategies-for-resolution-of-inflammation",
    title: "Pharmacological strategies for resolution of inflammation",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-27",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/neutrophils-2.xefaff23f.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Inflammation plays a crucial role in the pathophysiological cascade of ischaemia reperfusion injury (I/RI), the incidence of which is extensive including myocardial infarction, stroke, peripheral artery disease, solid organ transplantation, sepsis, inflammatory bowel diseases, blood disorders (e.g. Sickle Cell Disease) and cancer. Although the exact mechanisms responsible for post-ischaemic damage (especially in the context of the brain) are not fully understood, there is increasing evidence suggesting that the inflammatory state following I/R is a crucial contributing factor to the pathophysiology and outcome. Endothelial cell activation, production of pro-inflammatory mediators and the recruitment and activation of leukocytes (especially neutrophils) and platelets have all shown to contribute to microvascular dysfunction and subsequent tissue injury post I/RI. Thus prevention of ischaemic events (especially in the context of the brain and stroke) has become a major part of modern health care.

The ideal outcome of inflammation following I/R is its resolution, which is a tightly orchestrated, active process involving specific pro-resolving mediators (e.g. Annexin A1 [AnxA1], resolvins, protectins, maresins) and pathways (e.g. formyl peptide receptor 2 [Fpr2/ALX] pathway). However, compelling evidence suggests pro-resolving mediators and pathways are disrupted in chronic inflammatory conditions leading to prolonged and exaggerated inflammatory responses with poor prognosis in humans. Inflammation post-CI/R contributes significantly to post-ischaemic damage (particularly in the cerebral microvasculature), although exact mechanisms remain undefined. We have made significant progress defining inflammatory events post I/R and have discovered an important protective role for Fpr2/ALX, supporting this key resolution pathway as a potential therapeutic target for I/RI.

The overarching objective of this project is to generate novel data in an area of scientific and clinical need, specifically, we aim to understand and characterise pathophysiological responses to I/RI in a number of clinical situations and disease states; we hope to discover potential prognostic biomarkers; we aim to identify anti-inflammatory mechanisms and pharmacological strategies that control the Fpr2/ALX-pathway to promote resolution post-I/RI, and we aim to develop ideal biased ligands and novel delivery methods (e.g. nanotechnology) for treatment of I/RI. Furthermore, these findings will also have an impact on helping to treat and reduce morbidity and mortality of patients with or susceptible to coronavirus disease of 2019 (COVID-19). Collectively, findings will help to guide innovative drug discovery programs focussed on Resolution biology to help treat and protect against I/RI.`,
  },
  {
    slug: "manipulating-our-immune-system-to-protect-against-ageing",
    title: "Understanding and manipulating our immune system to protect against ageing",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-27",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/blood-cells-2.x8dc273b9.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Understanding and manipulating our immune system to protect against ageing
Ageing is the most important non-modifiable risk factor for a number of diseases and conditions of the immune system including ischaemia reperfusion injury (e.g. myocardial infarction and stroke), cancer, infections, wound healing, degenerative diseases (e.g. vascular dementia, Alzheimer's disease) and cardiovascular diseases. Ageing is also associated with several morbidities that finally lead to organ failure and death.

As we age, our immune system undergoes a dynamic change characterised by low-grade chronic inflammation and involving a number of immune cells (e.g. neutrophils, platelets and endothelial cells) and pro-inflammatory cytokines e.g. tumour necrosis factor (TNF)-α, interleukin (IL)-1β and IL-6. This chronic activation of inflammation associated with ageing has been termed 'inflammageing' and although the detrimental effects of ageing are well defined, mechanisms contributing to poor outcomes following many morbidities remain unknown. In addition, these effects may also be compounded by additional co-morbidities including environmental factors (e.g. stressful environments, alcohol consumption, smoking).

Multimorbidity (i.e. two or more long-term health conditions) is prevalent as we age, with 75% of adults by the age of 70 having multimorbidities. These effects increase the risk of infections in the elderly and are at greater risk for infections (e.g. COVID-19), with worse outcomes. Additionally, inflammaging affects immune responses to illness, infections and vaccines, which may lead vaccination against e.g. SARS-CoV-2 being less effective, or not lasting as long as in younger patient cohorts. How inflammageing affects COVID-19 risk and poor outcome in the elderly remains unknown and is of great unmet clinical need to help identify potential novel disease biomarkers for future clinical trials.

In summary, we are particularly interested in the mode, dynamics and mechanisms of inflammaging that occur in the microcirculation (both in the brain and systemic organs). The aim of this project is to provide a greater understanding of the complex haemodynamic responses of the immune system as we age in order to drive drug discovery programmes aimed at manipulating our immune system to protect against ageing and help solutions to key global challenges.`,
  },
  {
    slug: "xcell-cells-and-tissue-biochemistry-in-simulated-microgravity",
    title: "Xcell: Studying cells and tissue biochemistry in simulated microgravity",
    researchAreaSlugs: [],
    investigators: [
      { role: "PI", name: "Dr Alessandro Esposito", externalUrl: "https://www.brunel.ac.uk/people/alessandro-esposito" },
      { role: "PI", name: "Dr Joanna Bridger", externalUrl: "https://www.brunel.ac.uk/people/joanna-bridger" },
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
      { role: "PI", name: "Dr Bin Zhang", externalUrl: "https://www.brunel.ac.uk/people/bin-zhang" },
      { role: "PI", name: "Dr Ruth Mackay", externalUrl: "https://www.brunel.ac.uk/people/ruth-mackay" },
      { role: "PI", name: "Professor Paola Vagnarelli", externalUrl: "https://www.brunel.ac.uk/people/paola-vagnarelli" },
      { role: "PI", name: "Dr Ines Castro", externalUrl: "https://www.brunel.ac.uk/people/ines-castro" },
      { role: "PI", name: "Dr Ashley Houlden", personSlug: "ashley-houlden" },
      { role: "PI", name: "Dr Sibylle Ermler", externalUrl: "https://www.brunel.ac.uk/people/sibylle-ermler" },
      { role: "PI", name: "Dr Camilla Cerutti", personSlug: "camilla-cerutti" },
      { role: "PI", name: "Dr Emmanouil Karteris", externalUrl: "https://www.brunel.ac.uk/people/emmanouil-karteris" },
    ],
    status: "Ongoing",
    lastModified: "2024-12-06",
    funder: "Engineering and Physical Sciences Research Council (EPSRC); Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/cell-culture-flasks-in-laboratory-incubator-thumbnail.xd9530bc4.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
      { num: 5, label: "Gender Equality" },
    ],
    description: `Microgravity, where objects seem weightless and float as they do in space, significantly affects biological systems. It changes the mechanical forces that cells experience, which influences key processes such as cell division, nuclear dynamics, and cellular behaviours.

The Xcell project aims to maintain a strategic infrastructure to observe 3D cellular systems under simulated microgravity conditions. This helps us study how cells and tissues behave in an environment similar to space.

### The need for microgravity research

The space industry is rapidly evolving, leading to more space missions and new regulatory and ethical challenges. Understanding how microgravity affects biology is essential as space exploration increases. For example, the NASA Artemis programme will make history by landing the first woman and the first person of colour on the moon. This programme will also set up the Lunar Gateway, a space station that will serve as a stepping stone for future missions to the moon and Mars.

In response, the British aerospace industry and the UK Space Agency are heavily investing in these activities to capitalise on future scientific, technological, and financial opportunities. Recognising the importance of this field, a group of experts from engineering and biosciences have come together to raise external funding for space biology, focusing on microgravity research.

The Xcell project is part of Brunel University of London's B-STAR research network, which includes experts in policy and regulation, social sciences, aerospace engineering, additive manufacturing, organ-on-the-chip technology, and biomedical sciences. This interdisciplinary approach makes Xcell unique in the field of microgravity research.`,
  },
  {
    slug: "improving-immunotherapy-efficacy-for-neuroblastoma",
    title: "Improving the efficacy of immunotherapies for the childhood cancer neuroblastoma",
    researchAreaSlugs: ["cancer-biology", "translational-medicine-novel-therapeutics"],
    investigators: [
      { role: "PI", name: "Professor Arturo Sala", personSlug: "arturo-sala" },
      { role: "Co-investigator", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-12",
    funder: "Little Princess Trust; CCLG",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/aerial-view-of-brunel-university-london-campus.xbaf63f95.jpg",
    description: `Neuroblastoma is a deadly childhood cancer originating from the peripheral nervous system. Metastatic neuroblastoma is very hard to treat, but about half of the patients respond to immunotherapy. Thus, there is an urgent need to find ways of increasing the number of patients benefiting from this treatment.

This research could benefit children with cancer by increasing their chance of responding successfully to immunotherapy.

A major cause of failure of cancer immunotherapies is the activation of inflammatory cells, which interferes with the antitumour immune response. In neuroblastoma, formation of myeloid derived suppressor cells (MDSCs) or regulatory T-cells reduce the efficacy of immunotherapies with GD2 antibody or CAR-T cells. Therefore, eliminating the immunosuppressive tumour microenvironment is a major priority in paediatric oncology because it could greatly improve the clinical benefits of immunotherapies.

Developing new molecules designed to inactivate immunosuppressive cells may require many years. A better, and more cost-effective, alternative might be drug repurposing. We propose to use antidepressants (SSRI inhibitors) to increase the efficacy of immunotherapies in neuroblastoma. Preliminary data in our laboratory and in the scientific literature suggest that antidepressant molecules modulate the phenotype and cytokine expression of myeloid cells and have anti-inflammatory activity; the popular antidepressant fluoxetine (Prozac) has direct anti-neuroblastoma activity.`,
  },
  {
    slug: "a-new-cell-and-gene-therapy-approach-for-friedreichs-ataxia",
    title: "A new cell and gene therapy approach for Friedreich's ataxia",
    researchAreaSlugs: ["cancer-biology"],
    investigators: [
      { role: "PI", name: "Professor Arturo Sala", personSlug: "arturo-sala" },
      { role: "Co-investigator", name: "Prof Adrian Thrasher, UCL" },
      { role: "Co-investigator", name: "Dr Giorgia Santilli, UCL" },
    ],
    status: "Completed",
    lastModified: "2024-09-27",
    funder: "Medical Research Council",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/wheelchair-children-2.xfdb5ecbc.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Friedreich's ataxia is a rare disease caused by mutation of the Frataxin gene (FXN). This results in dramatically reduced levels in the tissues of patients of a protein essential for life called Frataxin.

Children born with the defective version of the FXN gene by the age of 5 to 10 years start to manifest the symptoms of the disease that include a gradual loss of strength and sensation in the arms and legs; muscle stiffness (spasticity); and impaired speech, hearing, and vision. Individuals with Friedreich's ataxia develop muscle weakness and often have a form of heart disease called hypertrophic cardiomyopathy, which enlarges and weakens the heart muscle and can be life-threatening.

The average life expectancy is 37 years and there is still no definitive cure for the condition. Standard management is mainly symptomatic and based on physiotherapy, to alleviate difficulty on speech or swallowing, surgery, for severe cases of scoliosis or foot deformities, and medication to control heart arrhythmias.

The experimental approach that we are using in our laboratory to tackle the condition is based on cell and gene therapy. We aim to restore appropriate levels of the Frataxin protein by engineering a new version of the FXN gene that will be inserted in the DNA of blood-forming (stem) cells. The blood stem cells will deliver the therapeutic protein to the heart, the brain and other tissues that are particularly sensitive to the loss of Frataxin. Since the therapeutic protein will be produced by stem cells that are permanently homed in the bone marrow of patients, the treatment should result in the cure of the condition. Before testing this strategy in patients, we need to demonstrate its efficacy in a mouse model of Friedrich's ataxia that was developed in our laboratory.

We will conduct a clinical trial in mice using appropriately modified FXN genes that will be introduced into blood cells. The modified cells will be injected into mice and the progression of the disease will be compared between treated and control animals. If our strategy will be successful in the laboratory, this will justify the start of a clinical trial in patients with Friedrich's ataxia.`,
  },
  {
    slug: "host-pathogen-interactions-in-tuberculosis",
    title: "Host-pathogen interactions in tuberculosis",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Dr Anthony Tsolaki", personSlug: "anthony-tsolaki" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-27",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/upper-body-944557-Cropped-350x350.xc9ddbd8e.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Tuberculosis (TB) is one of the world's major infectious diseases and continues to be a major public health challenge globally. Human tuberculosis (hTB) accounts for 2 million deaths annually, with around a third of the world's population being infected with the pathogen Mycobacterium tuberculosis.

There is both epidemiological and molecular data giving insights into why there are profound differences in the clinical presentation of tuberculosis. The central question focuses on whether distinct M. tuberculosis strains co-evolved with distinct human populations and if so, what are the molecular determinants of this association. We seek to determine whether there is a specific host-pathogen molecular dialogue between innate immunity and bacterial virulence factors.

The objectives of this proposal are to investigate the key initial interactions between host and pathogen in tuberculosis using genomic sequence data from host and pathogen. It is hypothesised that there is a specific host-pathogen dialogue involving the innate immune response to Mycobacterium tuberculosis infection which plays a central role in disease outcome. This specific response can be influenced by host susceptibility factors and pathogen determinants, playing a pivotal role in disease progression.`,
  },
  {
    slug: "human-endogenous-factors-in-the-control-of-mycobacterial-infection",
    title: "Human endogenous factors in the control of mycobacterial infection",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Dr Ansar Pathan" },
    ],
    status: "Ongoing",
    lastModified: "2024-09-27",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/cell-3089947-1920-Cropped-350x350.xeb20527d.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Mycobacterium tuberculosis (Mtb), one of the major pathogens of mankind, which kills approximately 1.3 million people each year. The control of Mtb infection is further complicated with the emergence of multi-drug resistant Mtb strains and introduction of HIV infection. Therefore, new interventions are needed on urgent bases for global control of this infection.

Mtb infection induces inflammation at the site of infection, leading to leakage of serum factors, which in turn, are likely to come in contact with the pathogen, thus modulate the pathogenesis of tuberculosis. We are investigating some of these factors such as Surfactant Protein D (SP-D), Complement Protein C1q, Fibronectin and Platelet Activating Factor (PAF) which are either produced locally or leak-out from serum during inflammation, for their interaction and growth inhibitory effect on mycobacteria. In this project the non-pathogenic mycobacteria such as M. smegmatis and BCG are used as models for Mtb and later these findings and the underlying mechanisms will be confirmed with Mtb.

If these endogenous factors showed inhibitory effect on Mtb growth, then, these factors have the potential to be used to treat multi-drug resistant tuberculosis.`,
  },
  {
    slug: "metabolic-reprogramming-for-improved-bcg-vaccine-efficacy",
    title: "Metabolic reprogramming for improved BCG vaccine efficacy",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "External PI", name: "Prof F. Javier Sanchez-Garcia" },
      { role: "Co-investigator", name: "Dr Steven Smith", personSlug: "steven-smith" },
    ],
    status: "Completed",
    lastModified: "2023-11-21",
    funder: "The VALIDATE Network (GCRF)",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/medic-563423-1920-Cropped-350x350.xf05524dc.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Cellular metabolism and immunity are inextricably linked. In this project we are investigating the hypothesis that the BCG vaccine, which works with variable efficacy across the globe, will confer more effective protection against tuberculosis if delivered to cells that are metabolically optimal in terms of their immune capabilities.

Having previously demonstrated a fumarate-induced mitochondrial signature of trained innate immunity in monocytes, we are now exploring the potential of using metabolites such as fumarate to re-programme cells at the site of vaccination for better responses to BCG.

Using both in vitro models of human cellular immune responses and murine vaccination models, we are delivering metabolites to monocytes isolated from human blood or to the skin site of vaccination respectively, before vaccinating with BCG. We are then testing for immunological markers of vaccine response as well as investigating the change in metabolic pathway usage of immune cells as a result of metabolite treatment.

Novel approaches to optimize vaccine-delivered immune protection can help deliver an effective vaccine against tuberculosis, which currently kills more people worldwide than any other infectious disease. There is also potential for a wider impact on the development of vaccines for other infectious disease threats, for example SARS-CoV-2.

Related Research Group(s)

**Inflammation Research and Translational Medicine** - Driving scientific innovation and discovery for diagnosis, treatment, and management of cardiovascular disease, inflammatory and immune disorders, microbial resistance, and cancer.

Partnering with confidence

Organisations interested in our research can partner with us with confidence backed by an external and independent benchmark: The Knowledge Exchange Framework. Read more.

Project last modified 21/11/2023

Funding Body

Contact our research team members
**External Principal investigator(s)**

Prof F. Javier Sanchez-Garcia (PI - ENCB-IPN, Mexico City)

**Co-investigator(s)**

Dr Steven Smith

Sustainable Development Goals

Explore similar research
bcg | Biomedical Sciences | College of Health, Medicine and Life Sciences | Department of Life Sciences | Dr Steven Smith | Health | Inflammation Research and Translational Medicine | innate immunity | metabolism | Mexico City) | Prof F. Javier Sanchez-Garcia (PI - ENCB-IPN | SDG 3: Good Health and Well-being | The VALIDATE Network (GCRF) | tuberculosis |`,
  },
  {
    slug: "early-growth-protein-molecules-and-preventing-autoimmune-disease-and-cancer",
    title: "Early growth protein molecules and preventing autoimmune disease and cancer",
    researchAreaSlugs: ["inflammation-immunity-infection", "cancer-biology"],
    investigators: [
      { role: "PI", name: "Dr Su-ling Li", personSlug: "su-ling-li" },
    ],
    status: "Completed",
    lastModified: "2023-11-21",
    funder: "Medical Research Council",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/pash-centre-3.x7c677692.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `T lymphocytes are major part of white blood cells and play essential roles in protecting people from virus and bacterial infections. However, if over activated, T lymphocytes can attack normal tissues leading to the development of autoimmune diseases. Previously, we discovered an important mechanism mediated by molecule of a protein called early growth responsive 2 (Egr2) for preventing over activation of T lymphocytes. Importantly, we found a possible antagonistic function of Egr2 to T-bet, an inflammatory factor associated with autoimmune disease. However, the molecular mechanism of action by Egr2 on Tbet is still unknown which limits the translation of our findings into the development of novel relevant therapeutic strategies.

Based on our findings, we propose to investigate the mechanism of Egr2 using genetic modified mouse models established and analysing function of these cells and the importance in protection of autoimmune diseases.

We have developed unique models: Egr2 KO mice in which Egr2 removed from T lymphocytes, GFP-Egr2 mice in which Egr2 is linked with green fluorescent protein to visualise Egr2; GFP-Egr2/Amcyin-Tbet, in which in addition to GFP-Egr2, Tbet is linked with red fluorescent protein Amycin to visualise both Egr2 and Tbet in order to see how Egr2 interacts with Tbet in possible control of autoimmune disease.

By using unique mouse models, the objectives of this project and relevant impact are:

- To evaluate gene expressions of Egr2 and Tbet in order to find possible biomarkers in the diagnosis and prognosis of autoimmune diseases.

- To investigate the mechanisms how Egr2 regulates Tbet function for the development of therapeutic strategies in control autoimmune diseases.

Tumour infiltrated lymphocytes (TILs) contain tumour reactive T cells and have been used as adoptive cell transfer therapy in patients which can mediate cancer regression. However, without in vitro manipulation, TIL T cells are tolerant to tumour. Although it has been reported that PD1, a negative co-stimulatory molecule, could be induced highly in TIL T cells than T cells from peripheral, the intrinsic mechanisms for TIL T cells to resistant to tumour are largely unknown.

The aim of the project is to understand the mechanisms of Egr2 and 3 mediated T cell tolerance in tumour immunology. We will analyse the phenotype and function of Egr2 positive T cells in TILs using EG7 tumor model with GFP-Egr2 knockin mice; investigate what effects of Egr2/3 influence anti-tumour responses of T cells using Egr2/3 knockout and Egr2 overexpression transgenic mice; and understand how Egr2 and 3 expressions are regulated under tumour microenvironment, which may provide the potential bio-marks for tumour immune responses, and new strategy for individual immunotherapy of cancer patients.

**Publications**

- Zhu B., Symonds A.L.J, Martin JE., Kioussis D., Wraith D., Li SL and Wang P. Early growth response gene 2 (Egr-2) controls the self-tolerance of T cells and development of lupus like autoimmune disease. Vol. 205, 2295-2307, J Exp. Medicine, 2008.

- Suling Li, Tizong Miao, Meera Sebastian, Punamdip Bhullar, Emma Ghaffari, Mengya Liu, Alistair L. J. Symonds, and Ping Wang, Egr-2 and -3 are essential for both the control of inflammatory autoimmune diseases and antigen receptor mediated activation of B and T cells, Immunity,19;37(4):685-96, 2012.

- Miao, T., Symonds, A. L., Singh, R., Symonds, J. D., Ogbe, A., Omodho, B., Zhu, B., Li, S., Wang, P. Egr2 and 3 control adaptive immune responses by temporally uncoupling clonal expansion from T cell differentiation. Miao, T., Symonds, A. L., Singh, R., Symonds, J. D., Ogbe, A., Omodho, B., Zhu, B., Li, S., Wang, P. Egr2 and 3 control adaptive immune responses by temporally uncoupling clonal expansion from T cell differentiation. J Exp Med. 2017 Jun 5;214(6):1787-1808. doi: 10.1084/jem.20160553. Epub 2017 May 9.`,
  },
  {
    slug: "modelling-infant-leukaemia-using-gene-editing-technology",
    title: "Modelling infant leukaemia using gene editing technology",
    researchAreaSlugs: ["cancer-biology"],
    investigators: [
      { role: "PI", name: "Dr Sabrina Tosi" },
      { role: "Co-investigator", name: "Professor Arturo Sala", personSlug: "arturo-sala" },
      { role: "Co-investigator", name: "Dr Giorgia Santilli, UCL" },
    ],
    status: "Completed",
    lastModified: "2023-11-13",
    funder: "Kidscan Children's Cancer Research",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/kidscan-tosi-cropped-350x350.x4bfd02c2.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Some pioneer studies have shown the potential of using gene-editing technologies to model human malignancies. We propose to use such technologies to generate a cellular model for a deadly form of infant leukaemia.

Excellent progress has been made in the cure of childhood leukaemia in the past 20 years, achieving complete remission in more than 90% of acute lymphoid leukaemia sufferers. However, a proportion of very young patients still die of acute myeloid leukaemia. The cancer cells of these children harbour a specific genetic rearrangement between chromosomes 7 and 12, known as t(7;12). This chromosomal abnormality disrupts the function of two genes: *ETV6* (normally involved in the production of blood cells), and *HLXB9* (involved in the normal development of the embryo).

The exact mechanism that leads to this deadly form of leukaemia due to the interaction of these two genes is still unclear. Due to the short life span of these young patients, availability of bone marrow samples is limited impacting on the number and type of studies possible. An ideal study tool would be an *in-vitro* cellular model that contains the same genetic characteristics of the leukaemia cells found in the patients. Some pioneer studies have shown the potential of using DNA modification methods (gene-editing technologies) to model human malignancies. We propose to use such technologies to generate a cellular model for the t(7;12) leukaemia. This will help us understand the biology of the disease and identify molecular targets leading to a possible new treatment.

The potential impact of this research project is far reaching. The generation of a cellular model for the t(7;12) chromosome rearrangement will enable us to make the critical breakthrough in identifying the biological mechanisms that initiate this specific type of infant leukaemia. The natural next step would be the development of new and less harmful drugs and therapies to cure children from this deadly disease. This project has the real potential to improve the survival rate of children suffering from the disease worldwide. Furthermore, the findings emanating from this research project can be extrapolated and applied to the understanding and treatment of other cancers.`,
  },
  {
    slug: "reactivation-of-herpesviruses-in-chronic-fatigue-syndrome",
    title: "Reactivation of herpesviruses in Myalgic Encephalomyelitis",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Dr Jacqueline Cliff", personSlug: "jacqueline-cliff" },
      { role: "External PI", name: "Dr Eliana Lacerda" },
    ],
    status: "Ongoing",
    lastModified: "2023-11-16",
    funder: "National Institutes of Health, National Institute of Allergy and Infectious Diseases",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/ucl-rfh-biobank-32-jacqueline-cliff-1.xe61c9ee7.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Myalgic Encephalomyelitis/Chronic Fatigue Syndrome affects an estimated 24 million people worldwide, of whom around a quarter are severely affected and are house- or bed-bound, and it strikes people in their prime of life, causing enormous personal and societal economic costs. Few people recover completely from ME/CFS, although symptoms can fluctuate. There is no diagnostic test for ME/CFS, and the lack of understanding of disease mechanisms is preventing the development of rational treatments.

There is an overlap in clinical presentation with some people experiencing Long COVID, including post-viral fatigue and brain fog, potentially caused by similar disease mechanisms. It is characterised by persistent or recurrent incapacitating fatigue and the worsening of symptoms following even minor physical or mental exertion, alongside symptoms affecting the immune, endocrine and neural systems.

Human Herpesviruses (HHVs) have been speculatively implicated in ME/CFS pathogenesis, but there is no correlation between infection per se and ME/CFS development. Most people are infected with HHVs early in life and do not experience any symptoms due to an effective immunological system.

We hypothesise that the characteristic persistent remitting and relapsing nature of the ME/CFS syndrome in many individuals is the result of repeated HHV-6B reactivation, due to abnormal immune responses in susceptible people following an initial triggering event such as infection with another virus. In a small pilot study, we found that the concentration of DNA from HHV-6B was higher in saliva from people with ME/CFS, and that the concentration correlated with the severity of symptoms.

We were unable to determine whether HHV-6B reactivation directly caused the symptoms, or whether it was a result of another ME/CFS disease process.

In our current project, we are performing a larger-scale prospective virologic study, with people with mild/moderate or severe ME/CFS alongside healthy people. We are asking our study participants to record their symptom severity frequently, so that we can determine whether changes in HHV-6B concentration in saliva occur before or after changes in ME/CFS symptoms.

In this way, we aim to determine whether HHV-6B causes the symptom changes or if these occur after the disease gets worse. We are also investigating immune cell function in people with ME/CFS and/or Long COVID: specifically, we are looking at cytotoxic T cells, including their responses to stimulation and at the impact of HHV-6B on their interaction with other immune cells.

We will gain a better understanding of the role of herpesviruses, particularly HHV-6B, in the onset and progression of ME/CFS and Long COVID, which will lead to the development of specific drug treatments, including anti-viral therapy and drugs to boost the immune system appropriately. It will also help with the development of diagnostic and prognostic markers for ME/CFS.

Publications

- Lee J-S., Lacerda EM., Nacul L., Kingdon CC., Norris J., O'Boyle S., Roberts CH., Palla L., Riley EM. and Cliff JM. (2021) 'Salivary DNA Loads for Human Herpesviruses 6 and 7 Are Correlated With Disease Phenotype in Myalgic Encephalomyelitis/Chronic Fatigue Syndrome'. Frontiers in Medicine, 8. pp. 656692.

- Cliff JM., King EC., Lee J-S., Sep&uacute;lveda N., Wolf A-S., Kingdon C., Bowman E., Dockrell HM., Nacul L., Lacerda E. and Riley EM. (2019) 'Cellular Immune Function in Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS)'. Frontiers in Immunology, 10. pp. 796.

- O'Boyle S., Nacul L., Nacul FE., Mudie K., Kingdon CC., Cliff JM., Clark TG., Dockrell HM. and Lacerda EM (2021). "A Natural History of Disease Framework for Improving the Prevention, Management, and Research on Post-viral Fatigue Syndrome and Other Forms of Myalgic Encephalomyelitis/Chronic Fatigue Syndrome". Frontiers in Medicine 8. pp. 688159.

- Nacul L., de Barros B., Kingdon CC., Cliff JM. Clark TG., Mudie K., Dockrell HM and Lacerda EM. (2019) 'Evidence of Clinical Pathology Abnormalities in People with Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME/CFS) from an Analytic Cross-Sectional Study'. Diagnostics 9. pp.41.`,
  },
  {
    slug: "modelling-adenoid-cystic-carcinoma-in-a-mouse",
    title: "Modelling adenoid cystic carcinoma in a mouse",
    researchAreaSlugs: ["cancer-biology"],
    investigators: [
      { role: "PI", name: "Professor Arturo Sala", personSlug: "arturo-sala" },
    ],
    status: "Completed",
    lastModified: "2023-11-21",
    funder: "The Adenoid Cystic Carcinoma Research Foundation (ACCRF)",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/Biosciences-17-3921.x81dc2ebe.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Modelling the (6:9) translocation and MYB-NFIB gene fusion using the Crispr/Cas9 technology: implications for adenoid cystic carcinoma
Adenoid Cystic Carcinoma, also known as ACC, is a rare tumour of the salivary glands that can also originate in the breast, sinonasal tract, bronchoalveolar tree and other exocrine glands. In spite ACC is a slow growing tumour, it is relentless and most of the patients with metastatic disease do not survive after 10 years. This is also due to the fact that ACC responds very poorly to chemotherapy, radiotherapy and other treatments.

A major breakthrough in ACC research has been the identification of a molecular aberration in tumours in which two genes encoding the transcription factors MYB and NFIB are fused, forming a chimeric product. This new product, called MYB-NFIB, is thought to be the primary cause of the disease. Finding drugs specifically inhibiting this molecule could thus hold the promise for a more effective and personalised therapeutic approach for this cancer. However, the creation of a faithful cellular and animal model of the fusion is an essential prerequisite for the development of specific drugs targeting the oncogene.

Using a new technology called DNA editing we have been able to demonstrate that it is possible to modify the genome of mouse cells to induce the formation of a MYB-NFIB fusion gene that is identical to the corresponding human lesion observed in ACCs. We propose to complete and extend this pilot study by inducing the formation of the MYB-NFIB fusion gene in cells and tissues relevant to ACC to assess whether this causes tumourigenesis in living mice.

Given the great similarity of the mouse and human systems the in vitro and in vivo models developed in this study will be invaluable for the understanding of the molecular causes of the disease and the validation of new drugs.`,
  },
  {
    slug: "oncoprotein-myb-in-the-head-and-neck-cancer-adenoid-cystic-carcinoma",
    title: "Oncoprotein MYB in the head and neck cancer adenoid cystic carcinoma",
    researchAreaSlugs: ["cancer-biology"],
    investigators: [
      { role: "PI", name: "Professor Arturo Sala", personSlug: "arturo-sala" },
    ],
    status: "Completed",
    lastModified: "2023-11-21",
    funder: "Oracle Head and Neck Cancer UK",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/cancer-cells-541954-1920-cropped-350x3501.xe9096ccd.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Adenoid cystic carcinoma is characterised by slow but relentless growth that is only minimally affected by therapeutic treatments. Despite radio- and chemo-therapy, metastatic adenoid cystic carcinomas invariably progress until the patient succumb to the disease. In this research, we will investigate the role of the transcription factor and protooncogene MYB, frequently altered in adenoid cystic carcinoma, in promoting radio and chemo-resistance.

The central hypothesis that will be investigated is whether MYB gene rearrangements/overexpression in adenoid cystic carcinoma lead to activation of ATR, ATM, BUB1 and resistance to radiation and/or DNA damaging agents. A further aim will be to investigate whether disruption of the MYB > (ATR, ATM, BUB1) axis could cause enhanced sensitivity of cancer cells to radiation and/or chemotherapy, with the ultimate objective of improving treatment and survival of cancer patients.`,
  },
  {
    slug: "dysfunction-of-the-cerebral-microvasculature-in-sickle-cell-disease",
    title: "Investigating cerebral microvasculature dysfunction in stroke",
    researchAreaSlugs: ["vascular-cardiovascular-sciences"],
    investigators: [
      { role: "PI", name: "Professor Felicity Gavins", personSlug: "felicity-gavins" },
    ],
    status: "Completed",
    lastModified: "2023-09-29",
    funder: "National Institutes of Health",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/intelligence-4234828-1920.x2942a3a9.jpg",
    sdgs: [
      { num: 3, label: "Good Health and Well-being" },
    ],
    description: `Cerebrovascular disease is a leading cause of mortality worldwide, with numbers on the rise. It is a serious complication of a number of disease states, including sickle cell disease (SCD). Sickle cell disease (SCD) is a chronic, genetic disease resulting from a single amino acid substitution in the haemoglobin β chain of red blood cells, which affects millions of people worldwide. SCD patients suffer from a prothrombogenic phenotype with excess clot formation and thrombosis, leading to serious consequences such as ischemic stroke. Markers of neutrophil activity have revealed that circulating neutrophils of SCD patients are activated and as such this has provided indirect evidence for their implication in thrombosis. In the proposed studies we will investigate ways in which neutrophils contribute directly to cerebral thrombosis, something that is currently unknown and has never been investigated. We strongly believe that by understanding ways that neutrophils contribute not only to the systemic prothrombogenic phenotype of SCD, but more specifically to the actual local thrombus formation, we will uncover the potential implication of targeting neutrophils as a therapeutic strategy for this debilitating and life threatening disease.

Our findings will have far-reaching implications, as they will increase our knowledge of not only cerebral microvascular disease, but also microvascular thrombosis in general and the role that neutrophils play in linking inflammation and thrombosis in SCD.`,
  },
  {
    slug: "innate-immunity-in-bovine-tuberculosis",
    title: "Innate immunity in bovine tuberculosis",
    researchAreaSlugs: ["inflammation-immunity-infection"],
    investigators: [
      { role: "PI", name: "Dr Anthony Tsolaki", personSlug: "anthony-tsolaki" },
      { role: "Co-investigator", name: "Dr Uday Kishore" },
    ],
    status: "Completed",
    lastModified: "2021-07-08",
    funder: "Brunel University London",
    imageUrl: "https://www.brunel.ac.uk/research/Projects/images/cows-1086049-Cropped-350x350.x7d718e20.jpg",
    description: `Bovine tuberculosis remains the most costly agricultural problem in the UK, with this year an estimated &pound;40m spent on testing and compensation to farmers, as well as risks of transmission to wildlife and humans. Currently, there is no effective vaccine or prophylaxis in use to combat the transmission of the disease. New interventions are needed urgently.

The objective of this project is to identify the role of soluble innate immune factors e.g. conglutinin, in the early stages of bovine tuberculosis infection and how this interaction at the host-pathogen interface contributes to the adaptive immune response against the pathogen Mycobacterium bovis and the formation of the granuloma.

The granuloma is the primary pathological feature of bovine tuberculosis in the lungs and understanding how its formed and the intricacies of the host-pathogen interface within it are essential in understanding the pathogenesis of bovine tuberculosis and how it can be combated.

We hypothesise that conglutinin and other innate immune factors could play a major role here and this may lead to new ideas for the prevention and treatment of bovine tuberculosis.

**Publications**

-
Mehmood A, Kouser L, Kaur A, Holmskov U, Al-Ahdal MN, Sim RB, Kishore U, Tsolaki AG. Complement Dependent and Independent Interaction Between Bovine Conglutinin and Mycobacterium bovis BCG: Implications in Bovine Tuberculosis. Front Immunol. 2019 Feb 5;9:3159. doi: 10.3389/fimmu.2018.03159. eCollection 2018.`,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
