import { PROJECTS } from "./Projects";
import { CASE_STUDIES } from "./caseStudies";

describe("portfolio project catalog", () => {
  test("every project has a unique URL slug", () => {
    const slugs = PROJECTS.map(project => project.slug);
    expect(slugs).toHaveLength(25);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("all published detailed case studies belong to a project", () => {
    const slugs = new Set(PROJECTS.map(project => project.slug));
    Object.keys(CASE_STUDIES).forEach(slug => {
      expect(slugs.has(slug)).toBe(true);
      expect(CASE_STUDIES[slug].problem).toBeTruthy();
      expect(CASE_STUDIES[slug].approach.length).toBeGreaterThan(0);
    });
  });

  test("each project has a meaningful description and category", () => {
    PROJECTS.forEach(project => {
      expect(project.title.length).toBeGreaterThan(2);
      expect(project.description.length).toBeGreaterThan(20);
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.imgPath).toMatch(/^\/project-covers\/[^/]+\.webp$/);
    });
  });
});
