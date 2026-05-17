import Image from "next/image";

const technicalResources = [
  "In vivo (rodent and larger species e.g. pigs) models of disease such as thrombosis, inflammation, infection, lung allergy, oedema and transplantation",
  "Mouse models of human cancers (neuroblastoma and adenoid cystic carcinoma)",
  "Zebrafish models of drug safety and mechanisms of action",
  "In vivo Galleria mellonella model (infection, microbiome, burn wound, drug discovery/kinetics)",
  "Robotic High throughput screening (phenotype screening, drug discovery, library preparation, colony picking)",
  "Gene synthesis; cDNA cloning; recombinant protein expression in E. coli, Pichia pastoris, baculovirus, Drosophila S2 cells and mammalian cell lines; Crispr/Cas9 technology",
  "High throughput sequencing; microarray; proteomics; epigenomics; ELISA; immunohistochemistry; multiparameter flow cytometry; multiplex bead array assays",
  "Intra-vital and confocal intravital microscopy; magnetic resonance imaging; positron emission tomography; single photon emission tomography and in vivo imaging systems",
  "Confocal analysis of mitochondrial dynamics and function",
  "In vitro models of human innate and adaptive immune responses, mycobacterial growth inhibition assays",
  "Bioinformatic and statistical analysis of large datasets; genome-wide association studies; genetic risk scores; machine learning",
  "Selected ion flow tube mass spectrometry for volatile compound and trace gas analysis",
];

function FacilityImage({ src, alt, aspect = "aspect-square", objectPosition = "center" }: {
  src: string;
  alt: string;
  aspect?: string;
  objectPosition?: string;
}) {
  return (
    <div className={`relative ${aspect} rounded-xl overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover/facility:scale-105"
        style={{ objectPosition }}
        unoptimized
      />
      <div className="absolute inset-0 bg-teal/0 group-hover/facility:bg-teal/10 transition-colors duration-500 pointer-events-none rounded-xl" />
    </div>
  );
}

function FacilitySection({ bg = "bg-white", children }: { bg?: string; children: React.ReactNode }) {
  return (
    <section className={`group/facility py-20 ${bg} transition-colors duration-300 hover:brightness-[0.97]`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden py-20">
        <Image
          src="/images/facilities/Arturo-Sala-in-the-lab-for-JustGiving-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag mb-4 inline-block" style={{ backgroundColor: "rgba(0,169,157,0.2)", color: "#1AC9BF" }}>
            Facilities
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Our Research Facilities</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            State-of-the-art facilities at Brunel&apos;s Uxbridge campus and through collaborative links with
            partner institutions.
          </p>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            CIRTM operates state-of-the-art research infrastructure at Brunel University London,
            purpose-built to support translational science, from molecular discovery through to
            clinical-grade validation.
          </p>
          <ul className="space-y-4">
            {technicalResources.map((resource) => (
              <li key={resource} className="flex items-start gap-4">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                <p className="text-gray-700 leading-relaxed">{resource}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bio-imaging Suite */}
      <FacilitySection bg="bg-[#F8F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Imaging</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Bio-imaging Suite</h2>
            <p className="text-gray-600 leading-relaxed">
              Our bio-imaging suite provides access to advanced fluorescence microscopy for high-resolution
              imaging of live cells and fixed tissues, with integrated image analysis workstations for data
              processing and visualisation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FacilityImage src="/images/facilities/researchers-in-a-bio-imaging-suite.jpg" alt="Researchers in a bio-imaging suite" />
            <FacilityImage src="/images/facilities/Spinning-disk-microscope.jpg" alt="Spinning disk microscope" />
          </div>
        </div>
      </FacilitySection>

      {/* Flow Cytometry Facility */}
      <FacilitySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 order-last lg:order-first">
            <FacilityImage src="/images/facilities/Flow-Cytometry-Facility.jpg" alt="Flow Cytometry Facility" />
            <FacilityImage src="/images/facilities/Flow-cytometer.jpg" alt="Flow cytometer" objectPosition="left" />
          </div>
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Cell Analysis</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Flow Cytometry Facility</h2>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated flow cytometry suite enables rapid multiparameter analysis of cell populations,
              supporting immunophenotyping, intracellular staining, and fluorescence-activated cell sorting.
            </p>
          </div>
        </div>
      </FacilitySection>

      {/* Microscopy Suite */}
      <FacilitySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Microscopy</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Microscopy Suite</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The microscopy suite provides a range of conventional and advanced light microscopy platforms
              for cell biology, histology, and pathology applications. Multiple independent workstations
              allow several researchers to work concurrently, with integrated digital image capture and
              analysis software at each station.
            </p>
            <ul className="space-y-3">
              {[
                "Brightfield, phase contrast, and epifluorescence microscopy",
                "Multiple concurrent workstations",
                "Integrated image capture and analysis at each station",
                "Suitable for live-cell and fixed-sample imaging",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FacilityImage src="/images/facilities/microscope-suite.jpg" alt="Researchers working at multiple microscope stations" aspect="aspect-[4/3]" />
        </div>
      </FacilitySection>

      {/* Bioscience Laboratories */}
      <FacilitySection bg="bg-[#F8F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 order-last lg:order-first">
            <FacilityImage src="/images/facilities/bioscience-lab.jpg" alt="Bioscience laboratory" />
            <FacilityImage src="/images/facilities/tissue-culture.png" alt="Tissue culture laboratory" />
          </div>
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Bioscience</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Bioscience Laboratories</h2>
            <p className="text-gray-600 leading-relaxed">
              CIRTM researchers are supported by fully equipped bioscience laboratories in the Heinz Wolff
              Building, providing dedicated space for cell and tissue culture work alongside a broad range
              of experimental techniques used across the centre&apos;s research programmes.
            </p>
          </div>
        </div>
      </FacilitySection>

      {/* Molecular Laboratory */}
      <FacilitySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Molecular Biology</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Molecular Laboratory</h2>
            <p className="text-gray-600 leading-relaxed">
              Fully equipped molecular biology laboratories support a broad range of techniques including
              nucleic acid extraction, PCR and qPCR, cloning, gel electrophoresis, and protein biochemistry,
              underpinning experimental work across all CIRTM research groups.
            </p>
          </div>
          <FacilityImage src="/images/facilities/molecular-laboratory.png" alt="Molecular biology laboratory" aspect="aspect-[4/3]" />
        </div>
      </FacilitySection>

      {/* Pash Centre */}
      <FacilitySection bg="bg-[#F8F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-3 order-last lg:order-first w-11/12 mx-auto lg:mx-0">
            <FacilityImage src="/images/facilities/pash-centre.webp" alt="Pash Centre rodent holding facility" aspect="aspect-[5/3]" />
            <FacilityImage src="/images/facilities/PashCentre.jpg" alt="The Pash Centre entrance" aspect="aspect-[5/3]" />
          </div>
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Animal Models</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">The Pash Centre</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Brunel has an expandable range of bio-annexe facilities and benefits from the expertise of
              highly experienced technicians, all of whom hold Personal Investigator Licences (PILs). Our
              technical staff have vast experience with pair breeding studies of Fathead Minnows and have
              also worked with various other species including Stickleback, Medaka, Sheepshead Minnows,
              Xenopus Laevis and Tropicalis, and snails.
            </p>
            <p className="text-sm font-semibold text-navy mb-3">New state-of-the-art category 1 and 2 research facilities include:</p>
            <ul className="space-y-3">
              {[
                "A Severe Combined Immuno-Deficiency (SCID) facility with two holding rooms: one housing 320 cages and a second surgical recovery room housing 160 cages, fitted with the latest DVC monitoring system",
                "A Surgical Laboratory with an IVIS imaging system housed in a laminar flow booth",
                "A conventional unit with two holding rooms capable of housing 90 GM900 cages and 220 GM500 cages",
                "A minor procedures room",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FacilitySection>

      {/* Advanced Bioprocessing Centre */}
      <FacilitySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Bioprocessing</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Advanced Bioprocessing Centre</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Four dedicated laboratories specialising in separation and purification techniques, supporting
              method development at analytical scale through to pilot-scale manufacture of trial-grade
              material for academic and commercial collaborations.
            </p>
            <ul className="space-y-3">
              {[
                "CCC centrifuges from analytical mini-scale to pilot scale (4.6 L and 18 L capacity)",
                "Robotic liquid handling for solvent selection and high-throughput method development",
                "HPLC with PDA and ELSD detectors, and GC for fraction analysis",
                "ATEX-compliant hazards laboratory with remote operation behind explosion-proof glass",
                "Walk-in fume cupboard and large-scale solvent evaporators (up to 2 × 25 L)",
                "Partnership with Dynamic Extractions Ltd, a Brunel University spinout",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FacilityImage src="/images/facilities/bio-process-biopharma-eng.webp" alt="Advanced Bioprocessing Centre equipment" aspect="aspect-[4/3]" />
        </div>
      </FacilitySection>

      {/* BRAGG - Experimental Techniques Centre */}
      <FacilitySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Cross-Disciplinary</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">BRAGG - Experimental Techniques Centre</h2>
            <p className="text-gray-600 leading-relaxed">
              One of our cross-disciplinary centres, equipped with state-of-the-art microscopy and
              spectroscopy facilities and X-ray suites.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FacilityImage src="/images/facilities/bragg-experimental.png" alt="BRAGG Experimental Techniques Centre" />
            <FacilityImage src="/images/facilities/bragg-experimental-2.jpg" alt="BRAGG Experimental Techniques Centre" />
          </div>
        </div>
      </FacilitySection>

      {/* Microfluidics & Organ-on-a-chip */}
      <FacilitySection bg="bg-[#F8F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-last lg:order-first">
            <FacilityImage src="/images/facilities/organ-on-a-chip.webp" alt="Organ-on-a-chip microfluidic device" aspect="aspect-square" />
          </div>
          <div>
            <span className="tag mb-4 inline-block group-hover/facility:bg-teal/20 transition-colors duration-300">Microfluidics</span>
            <h2 className="text-3xl font-bold text-navy mb-4 group-hover/facility:text-teal transition-colors duration-300">Microfluidics &amp; Organ-on-a-chip</h2>
            <p className="text-gray-600 leading-relaxed">
              Platforms for the fabrication and use of microfluidic devices and organ-on-a-chip models
              to support translational and mechanistic biomedical research.
            </p>
          </div>
        </div>
      </FacilitySection>
    </>
  );
}
