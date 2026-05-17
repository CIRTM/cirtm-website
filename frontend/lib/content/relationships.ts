import { people, type Person } from "./people";
import { projects, type Project } from "./projects";
import { publications, type Publication } from "./publications";
import { researchAreas, type ResearchArea } from "./research-areas";

export function getPeopleForArea(areaSlug: string): Person[] {
  return people.filter((p) => p.researchAreaSlugs?.includes(areaSlug));
}

export function getProjectsForArea(areaSlug: string): Project[] {
  return projects.filter((p) => p.researchAreaSlugs.includes(areaSlug));
}

export function getPublicationsForArea(areaSlug: string): Publication[] {
  return publications.filter((p) => p.researchAreaSlugs?.includes(areaSlug));
}

export function getProjectsForPerson(personSlug: string): Project[] {
  return projects.filter((p) =>
    p.investigators.some((i) => i.personSlug === personSlug),
  );
}

export function getPublicationsForPerson(personSlug: string): Publication[] {
  return publications.filter((p) => p.personSlugs?.includes(personSlug));
}

export function getPublicationsForProject(projectSlug: string): Publication[] {
  return publications.filter((p) => p.projectSlugs?.includes(projectSlug));
}

export function getResearchAreasForPerson(personSlug: string): ResearchArea[] {
  const person = people.find((p) => p.slug === personSlug);
  if (!person?.researchAreaSlugs) return [];
  return person.researchAreaSlugs
    .map((slug) => researchAreas.find((a) => a.slug === slug))
    .filter((a): a is ResearchArea => Boolean(a));
}

export function getResearchAreasForProject(projectSlug: string): ResearchArea[] {
  const project = projects.find((p) => p.slug === projectSlug);
  if (!project) return [];
  return project.researchAreaSlugs
    .map((slug) => researchAreas.find((a) => a.slug === slug))
    .filter((a): a is ResearchArea => Boolean(a));
}

export function getCoAuthors(personSlug: string): Person[] {
  const coAuthorSlugs = new Set<string>();
  for (const pub of publications) {
    if (!pub.personSlugs?.includes(personSlug)) continue;
    for (const slug of pub.personSlugs) {
      if (slug !== personSlug) coAuthorSlugs.add(slug);
    }
  }
  return people.filter((p) => coAuthorSlugs.has(p.slug));
}
