export const LINKEDIN_URL = "https://www.linkedin.com/company/cirtm-bruneluniversitylondon/";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: "Research" | "Award" | "Funding" | "Community";
  summary: string;
  image?: string;
  link?: string;
  sample?: boolean;
};

export const news: NewsItem[] = [
  {
    slug: "tb-global-evolution",
    title: "Scientists map TB's global evolution, paving the way for targeted vaccines",
    date: "2025-08-15",
    category: "Research",
    summary:
      "A study led by Dr Anthony Tsolaki identified eight genetic variants of the TB protein PPE50, each tied to different world regions. It is the first evidence that the protein evolved alongside human populations, opening the door to region-specific vaccines and treatments.",
    image: "/images/news/tb-global-evolution.webp",
    link: "https://www.brunel.ac.uk/news-and-events/news/articles/Scientists-map-TBs-global-evolution",
  },
  {
    slug: "sample-bps-role",
    title: "Professor Felicity Gavins appointed Deputy Vice-President (Meetings) of the British Pharmacological Society",
    date: "2025-07-01",
    category: "Award",
    summary: "Sample story for the mock-up. Replace with the client's wording and date.",
    image: "/images/about/felicity-lab.jpg",
    sample: true,
  },
  {
    slug: "sample-funding",
    title: "New funding to study thrombo-inflammation in sickle cell disease",
    date: "2025-05-20",
    category: "Funding",
    summary: "Sample story for the mock-up. Replace with a real CIRTM announcement.",
    image: "/images/research-areas/cardiovascular-diseases.jpg",
    sample: true,
  },
  {
    slug: "sample-outreach",
    title: "CIRTM researchers open the lab doors for Brunel's community science day",
    date: "2025-04-12",
    category: "Community",
    summary: "Sample story for the mock-up. Replace with a real CIRTM announcement.",
    image: "/images/facilities/bioscience-lab.jpg",
    sample: true,
  },
];

export type LinkedInPost = {
  date: string;
  text: string;
  url: string;
  image?: string;
  sample?: boolean;
};

export const linkedinPosts: LinkedInPost[] = [
  {
    date: "2025-08-15",
    text: "TB breakthrough! A study by Dr Anthony Tsolaki found 8 genetic variants of the TB protein PPE50, each tied to different world regions. First proof that the TB protein evolved alongside human populations.",
    url: LINKEDIN_URL,
    image: "/images/news/tb-global-evolution.webp",
  },
  {
    date: "2025-06-03",
    text: "Sample post for the mock-up. Great turnout at this month's CIRTM seminar, thank you to our speaker and everyone who joined the discussion on inflammation resolution.",
    url: LINKEDIN_URL,
    sample: true,
  },
  {
    date: "2025-05-14",
    text: "Sample post for the mock-up. Congratulations to our doctoral researchers presenting posters at the British Pharmacological Society meeting this week.",
    url: LINKEDIN_URL,
    image: "/images/about/lab-image.webp",
    sample: true,
  },
];
