export type ResearchArea = {
  slug: string;
  title: string;
  tag: string;
  icon: string;
  color: string;
  /** Tailwind classes for the coloured area pill — must be full strings for Tailwind JIT. */
  pillClass: string;
  description: string;
  body: string;
  image?: { url: string };
  heroImage?: string;
  academicSlugs?: string[];
};

const AREA_IMG = "/images/research-areas";

export const researchAreas: ResearchArea[] = [
  {
    slug: "cardiovascular-diseases",
    title: "Cardiovascular Diseases",
    tag: "Cardiovascular",
    icon: "❤️",
    color: "border-red-100",
    pillClass: "border border-red-400 text-gray-900",
    image: { url: `${AREA_IMG}/cardiovascular-diseases.jpg` },
    heroImage: `${AREA_IMG}/cardiovascular-diseases-hero.jpg`,
    description:
      "Better understanding, diagnosis, and treatment of heart and circulatory disease through cutting-edge research and international collaboration.",
    body: `Cardiovascular disease is a general term for conditions affecting the heart or blood vessels. This includes conditions that are inherited from birth or those that develop throughout the lifetime of an adult, such as coronary heart disease, angina, heart attack, hypertension, stroke and vascular dementia. In the UK alone, there are around 7.6 million people living with heart and circulatory diseases and cardiovascular diseases are responsible for 25% of all UK deaths.

In the CIRTM we aim to better understand, diagnose and treat heart and circulatory disease through our cutting-edge research and collaborations with other research-intensive institutions both within the UK and Internationally.`,
  },
  {
    slug: "inflammation",
    title: "Inflammation",
    tag: "Inflammation",
    icon: "🔥",
    color: "border-orange-100",
    pillClass: "border border-orange-400 text-gray-900",
    image: { url: `${AREA_IMG}/inflammation.jpg` },
    heroImage: `${AREA_IMG}/inflammation-hero.png`,
    description:
      "Targeting uncontrolled inflammatory responses across cardiovascular, infectious, and oncological disease.",
    body: `Inflammation is the body's natural biological immune response that can be triggered by a variety of factors, including pathogens, damaged cells and toxic compounds. These factors can induce acute or chronic immune responses in organ systems throughout the body such as the heart, liver, brain and intestinal tracts, leading to tissue damage or disease.

Both infectious and non-infectious agents accompanied with cell damage activate inflammatory signalling pathways that can be uncontrolled and needing intervention. Therefore, understanding the inflammatory response is critical in forming rational treatment strategies to control this process in various disease states.

Within CIRTM our research focuses on how we can target these uncontrolled inflammatory responses in various diseases including cardiovascular diseases, infection and immunity, and cancer.`,
  },
  {
    slug: "infections-and-immunity",
    title: "Infections and Immunity",
    tag: "Infection & Immunity",
    icon: "🦠",
    color: "border-blue-100",
    pillClass: "border border-blue-400 text-gray-900",
    image: { url: `${AREA_IMG}/infections-and-immunity.jpg` },
    heroImage: `${AREA_IMG}/infections-and-immunity-hero.png`,
    description:
      "How the body handles harmful pathogens, and how we can boost immune defences and treat conditions where the immune system goes awry.",
    body: `Infections and immunity are all about how our body handles harmful pathogens like bacteria and viruses and protects us from getting sick.

When a pathogen enters our body, our immune system, acting like an army of tiny defenders, springs into action to fight it off. These defenders include special immune cells and proteins that recognise and destroy the invaders before they can cause serious illness. Sometimes, though, the immune system can become confused and attack our own healthy cells by mistake, leading to problems known as autoimmune disorders, like rheumatoid arthritis. Additionally, when someone receives a transplant, their immune system might mistakenly see the new organ as a foreign invader and try to reject it, which is another critical area of research.

Researchers at CIRTM study these processes to understand how to boost our immune defenses and treat conditions where the immune system doesn't function correctly. This knowledge aids in developing diagnostic biomarkers, creating vaccines to protect against infectious diseases, and finding better treatments for infections, autoimmune disorders, and transplant rejection.`,
  },
  {
    slug: "microbiome-and-health",
    title: "Microbiome and Health",
    tag: "Microbiome",
    icon: "🧫",
    color: "border-green-100",
    pillClass: "border border-green-500 text-gray-900",
    image: { url: `${AREA_IMG}/microbiome-and-health.jpg` },
    heroImage: `${AREA_IMG}/microbiome-and-health-hero.png`,
    description:
      "Understanding the host microbiome's role in disease, including organ-on-a-chip technology that substitutes for animal testing.",
    body: `Rarely do organisms live in isolation and often they live with close relationships to others. These relationships can range from beneficial to pathogenic which are very common throughout the natural world. It has become clear that there is a huge community of microorganisms that live all over the human body made up of thousands of species, and the role of these small and invisible colonisers is essential for our health and survival. This community of organism is known as the microbiome.

It is now understood that the microbiome plays a key role in our development from birth and maintaining homeostasis within the body. They aid in the digestion of food, provide vitamins and help in the absorption of nutrients. They produce chemicals essential for gut health with the education and regulation of our immune system, provide protective barriers against infection and produce anti-inflammatory compounds to fight pathogens and communicate via the gut brain axis. The microbiome changes with age, and environmental factors such as diet and disease, with research demonstrating changes associated with numerous diseases including cardiovascular disease, inflammatory bowel disease, sepsis, obesity, diabetes, anxiety and depression, bacterial vaginosis, and cancer.

In the CIRTM we aim to look at the associations of the host microbiome and its role in disease, not only identifying changes that occur but understanding the biological reasons for these changes, their importance and implications for long-term health and recovery. These include the development and use of in vitro model systems, including Organ-on-a-Chip technology. Microbiome research within CIRTM covers a wide range of topics, with experts in Women's Health, cardiovascular diseases, stroke, animal pathogens, exposure to anthropogenic toxins, and links to microbial resistance.

## Development of Organ-on-a-chip technology to substitute animal testing

The Organ-on-a-chip research at Brunel is made up of an interdisciplinary group of experts from Life Sciences and Engineering developing microfluidic devices to culture tissues in order to replicate organ-like functions. The engineered tissues can be used in preclinical trials as substitutes for animal testing, replicating human pathophysiology more closely.

The group's main research focus is on women's health and developing four main organ-on-a-chip (OOC) models: the breast, vagina, ovary, and placenta. At present most global research on tissue culture is 2D and as a result has its limitations on how representative it is. In addition to mimicking this complex environment, Brunel's OOC technology aims to incorporate the microbiome associated with these tissues to develop a more representative system.`,
  },
  {
    slug: "cancer",
    title: "Cancer",
    tag: "Cancer",
    icon: "🎗️",
    color: "border-purple-100",
    pillClass: "border border-purple-400 text-gray-900",
    image: { url: `${AREA_IMG}/cancer.jpg` },
    heroImage: `${AREA_IMG}/cancer-hero.png`,
    academicSlugs: ["arturo-sala", "camilla-cerutti", "doreen-lau", "felicity-gavins", "su-ling-li"],
    description:
      "Cancer immunology and metastasis research, from neuroblastoma to breast and prostate cancer, using advanced microscopy, transcriptomics, and organ-on-a-chip models.",
    body: `Cancer is a leading cause of premature death in every country in the world ([Cancer Atlas](https://canceratlas.cancer.org/)) and it is estimated that one in three people will be affected by the disease in the UK.

Cancer researchers at Brunel University London aim to increase our understanding on different hallmarks of cancer development and progression, in particular within CIRTM, we focus on cancer immunology and cancer metastasis.

We investigate cellular and molecular factors in childhood cancers like neuroblastoma, and adult cancers such as melanoma, gastrointestinal, breast and prostate cancers. The primary research themes at CIRTM include oncogenic transcription factors, immunity against cancers, cell-signalling, transcriptional deregulation, and targets for clinical intervention.

To investigate these key mechanisms, we use a range of cutting-edge techniques and models, including advanced microscopy, transcriptomics, in vivo imaging (MRI/PET/optical), transgenic preclinical animal models, and non-animal models, such as microfluidics and human organ-on-a-chip in vitro models. These innovative approaches aim to provide deeper insights into cancer biology and develop more effective, diagnostic biomarkers and targeted therapies for patients.

Our ultimate goal is to establish approaches to improve treatment and management of cancer in clinics.

## Neuroblastoma

It is the most common and aggressive extracranial solid tumours occurring in childhood. It remains a major cause of cancer-related deaths in infancy. Around 100 children in the UK are diagnosed with neuroblastoma each year and half will be high-risk. This is equal to six out of 100 of all childhood cancers diagnoses. Despite therapeutic strategies based on chemotherapy, radiotherapy, surgery, GD2-targeted immunotherapy, stem cell transplant and treatment with 13-cis-retinoic acid, high-risk neuroblastoma outcome remains poor, with a 5-year event-free survival <40%. Tumours show initial response to therapeutic interventions but typically relapse into an incurable form of the disease. Moreover, several drugs cause severe side effects, including cognitive impairment and retarded growth. Thus, to reduce drug toxicity and to improve the outcome and the lifestyle of the patients affected by neuroblastoma, additional therapeutic options are required.

**Professor Arturo Sala's Lab:** We are developing new anti-cancer immunoconjugates for neuroblastoma targeting the MYCN oncogene. We are also repurposing selective serotonin reuptake inhibitors, such as Prozac, to combat neuroinflammation and reactivate the anticancer immune response.

![Comparative immunomodulatory activity diagram](/images/research-areas/cancer-page/Comparative-immunomodulatory-activity-of-11-antidepressants-generated-by-data-mining-the-computational-predictions-generated-by-Kidd-et-al.-2016-for-1309-drugs-.jpg)

#### Comparative immunomodulatory activity of 11 antidepressants generated by data-mining the computational predictions generated by Kidd et al. (2016) for 1,309 drugs and 221 immune cell states

## Breast and Prostate cancer metastasis

Breast and prostate cancers are the first and the fourth most diagnosed solid cancers worldwide, respectively. More than half of the new cancer cases in the UK are breast and prostate. Primarily, ~90% of cancer-related deaths for breast and prostate cancers are due to cancer spreading to a different part of the body forming a secondary tumour called metastasis. Breast and prostate cancer metastasis can form in secondary organ as lungs, bone and brain, as a result of cancer cells leaving the primary tumour and invading the surrounding to reach the bloodstream. Here, cancer cells can interact and adhere to the endothelial cells forming the blood vessels of secondary organs followed by transmigration and growth of cancer cells in metastasis. Despite clinical treatments including surgery, radiotherapy, chemotherapy, hormone therapy, metastasis is a big challenge in healthcare due to ineffective clinical treatments. Metastasis steps underline molecular mechanisms are not fully understood and the clinical trials failure show a need for further research to identify metastasis formation targets.

**Dr Camilla Cerutti's Lab:** We are investigating the molecular mechanisms and signalling of early steps of metastasis, such as cancer adhesion and migration using microfluidic 2D and 3D vasculature-on-a-chip in vitro model to mimic in vivo features like hemodynamic shear stress.

## Development of vasculature-on-a-chip for cancer metastasis studies

CIRTM Organ on chip research is formed by an international and multi-interdisciplinary group of experts from Life Sciences and Engineering developing microfluidic devices to mimic human tissues in order to replicate organ-like functions. The research and development of the vasculature-on-a-chip is part of the [organ-on-a-chip (OOC) group's](https://www.brunel.ac.uk/research/Groups/Organ-on-a-Chip) at Brunel University London working on breast, vagina, ovary, and placenta-on-a-chip. Cerutti's lab aims to study early steps of metastasis within the vasculature-OoC to develop a human 3D representative system, allowing a better understanding of metastasis and to identify targets for better treatments.

![Microfluidic workflow diagram](/images/research-areas/cancer-page/Microfluidic-workflow-to-study-early-steps-of-cancer-metastasis-with-high-content-imaging.jpg)

#### Microfluidic workflow to study early steps of cancer metastasis with high-content imaging (Cerutti et al. [2016](https://fluidsbarrierscns.biomedcentral.com/articles/10.1186/s12987-016-0032-3), [2017](https://www.nature.com/articles/srep45284), [2021](https://link.springer.com/protocol/10.1007/978-1-0716-1350-4_7), [2022](https://link.springer.com/protocol/10.1007/978-1-0716-2289-6_19), [2023](https://open-research-europe.ec.europa.eu/articles/3-115), [2024](https://www.cell.com/cell-reports/fulltext/S2211-1247%2824%2900317-6)). Image created with Biorender.com.

![3D organ-on-a-chip device](/images/research-areas/cancer-page/Picture-of-a-3D-organ-on-a-chip-device-used-in-Dr-Cerutti's-lab.jpg)

#### Picture of a [3D organ-on-a-chip device](https://doi.org/10.1063/5.0170606) used in Dr Cerutti's lab.

![Endothelial cells in 3D organ-on-a-chip](/images/research-areas/cancer-page/Images-of-endothelial-cells-growing-in-the-3D-organ-on-a-chip-device-used-in-Dr-Cerutti's-lab.jpg)

#### Images of endothelial cells growing in the [3D organ-on-a-chip device](https://doi.org/10.1063/5.0170606) used in Dr Cerutti's lab.

## Cancer Immunology

Cancer immunology is the study of how the immune system interacts with cancer. Normally, the immune system protects our bodies by identifying and destroying harmful invaders like viruses and bacteria. However, cancer cells can sometimes trick the immune system or hide from it, allowing the cancer to grow unchecked. Immunotherapy, a promising new approach, helps the immune system fight cancer more effectively. Treatments like cancer vaccines and immune checkpoint inhibitors work by boosting the immune system's ability to find and destroy cancer cells or by preventing cancer cells from hiding. Although immunotherapy is increasingly used in clinics, not all patients benefit from treatment, and some may experience autoimmune side effects that require careful monitoring. To improve these treatments, researchers are working to better understand how cancer interacts with the immune system and to develop biomarkers and diagnostic tools for treatment monitoring and matching the right treatment to the right patient.

**Dr Doreen Lau's Lab:** We are investigating the biological mechanisms that govern cancer immunity, how patients respond to immunotherapy, and why some treatments fail. To do this, we employ advanced techniques to profile cancer and immune cells at the genetic, protein and metabolic levels in both patients and preclinical models. Additionally, we use chemical biology and engineering approaches to develop new tools for tracking immune cells and imaging the entire body. These efforts aim to gain deeper insights into how immune cells interact with cancer cells, whether at the level of individual cells, within specific tissues, or across the entire body.

![Understanding cancer immunity diagram](/images/research-areas/cancer-page/Understanding-cancer-immunity-immunotherapy-response-and-treatment-resistance-from-single-cell-to-whole-body-level.jpg)

#### Understanding cancer immunity, immunotherapy response and treatment resistance from single-cell to whole-body level ([Lau et al. 2020](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2020.01514/full), [2021](https://jitc.bmj.com/content/9/9/e003125), [2022](https://jitc.bmj.com/content/10/9/e004708), [2023](https://jitc.bmj.com/content/11/8/e007114)). Image created with Biorender.com.`,
  },
  {
    slug: "microbial-resistance",
    title: "Microbial Resistance",
    tag: "Antimicrobial",
    icon: "💊",
    color: "border-yellow-100",
    pillClass: "border border-yellow-500 text-gray-900",
    image: { url: `${AREA_IMG}/microbial-resistance.jpg` },
    heroImage: `${AREA_IMG}/microbial-resistance-hero.png`,
    description:
      "Understanding how bacteria evolve resistance and developing a drug-discovery pipeline to disrupt virulence and biofilm formation.",
    body: `The discovery of penicillin over 90 years ago and its subsequent uptake by healthcare systems around the world revolutionised global health and wellbeing. It marked the beginning of a golden age in antibiotic discovery with new classes of antibiotics being routinely discovered and saving millions of lives annually.

However, towards the end of the last century the rate of discovery slowed to a near standstill. This lack of discovery has been compounded by the rapid emergence and spread of bacterial pathogens that exhibit resistance to multiple antibiotic treatments threatening the sustainability of healthcare systems globally. In fact, it is estimated that by 2050, antibiotic resistance may be responsible for up to 50 million deaths per year.

In the CIRTM, we aim to understand how bacteria evolve resistance to specific antibiotics and to characterise the different mechanisms enabling this resistance. We have a particular focus on understanding biofilm formation, a community-like behaviour that allows bacteria to overcome exposure to antibiotics. We have also established a robust drug discovery pipeline that aims to identify and profile novel compounds that can disrupt the virulence mechanisms that bacteria use to establish infection or overcome antibiotic therapy.`,
  },
  {
    slug: "drug-repurposing",
    title: "Drug Repurposing for Clinical Translation",
    tag: "Drug Discovery",
    icon: "🔬",
    color: "border-teal-100",
    pillClass: "border border-teal-500 text-gray-900",
    image: { url: `${AREA_IMG}/drug-repurposing.jpg` },
    heroImage: `${AREA_IMG}/drug-repurposing-hero.png`,
    description:
      "Applying clinically-approved drugs to new uses, accelerating discovery against both non-infectious and infectious diseases.",
    body: `Drug repurposing involves the application of clinically-approved drugs for a purpose other than their intended use. Drugs are developed for a wide range of human diseases, from cancer to diabetes, to malaria and viral infections. Often, the mechanism of the drug action can be effective against more than one disease. Due to the long duration and high costs associated with developing new drugs, repurposing represents a low-hanging fruit to accelerate the discovery of new treatment and drive clinical impact. It is additionally attractive because often the drugs are already well characterised, with known biochemical and safety profiles.

At the CIRTM, we are using high-throughput technologies to study libraries of small molecules with the potential to treat both non-infectious and infectious diseases. These include pathogens that are resistant to some currently used antibiotics, or those that require complex combination therapies. We utilise a multidisciplinary approach to understand how the repurposed drugs work in the context of a new disease, including computational methods to simulate drug-target interactions, and zebrafish models of efficacy.`,
  },
];

export function getResearchArea(slug: string): ResearchArea | undefined {
  return researchAreas.find((a) => a.slug === slug);
}
