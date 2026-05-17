import Link from "next/link";

export default function ExpertisePage() {
  const expertiseAreas = [
    "Thrombo-inflammation and its resolution following ischaemic reperfusion injury in cardiovascular and cerebrovascular diseases",
    "Pharmacology and drug safety studies (e.g. non-steroidal anti-inflammatory drugs) in zebrafish; adverse outcome pathway development to predict in vivo drug toxicity",
    "Growth factor genes in cancer immune surveillance and autoimmunity; mechanisms of antigen presentation for tumour vaccination",
    "Protective endogenous factors (e.g. lung surfactant protein D) as therapeutic targets in asthma and lung infection",
    "Innate and adaptive immunity to infectious diseases; vaccine-induced biomarkers of protection against tuberculosis; bacillus Calmette-Guerin (BCG) vaccination and its mechanisms of action; immunometabolism as a vaccine target",
    "Molecular epidemiology of tuberculosis and molecular evolution of Mycobacterium tuberculosis",
    "The microbiome, microbial ecology and ecosystems",
    "Signalling pathways that control antimicrobial resistance and biofilm formation",
    "Pseudomonas aeruginosa and Acinetobacter baumannii pathogenesis",
    "Large scale analysis of clinical and genetic determinants for cardiovascular diseases",
    "The role of oncogenic transcription factors in the development of neuroblastoma and adenoid cystic carcinoma",
    "New cell and gene therapy approaches for monogenic diseases (Friedreich's ataxia)",
    "Roles and therapeutic opportunities involving cilia and centrioles in cancer and ciliopathies",
    "Volatile organic compound analysis for non-invasive disease diagnosis and environmental monitoring",
  ];

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Expertise
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Expertise Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            CIRTM members have expertise in the following fields of research.
          </p>
          <Link href="/people" className="btn-primary">Meet the team →</Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {expertiseAreas.map((area) => (
              <li key={area} className="flex items-start gap-4">
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-teal" />
                <p className="text-gray-700 leading-relaxed">{area}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
