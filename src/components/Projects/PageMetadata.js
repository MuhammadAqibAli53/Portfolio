import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS } from "./Projects";

const SITE = "https://muhammad-aqib-ali.vercel.app";
const DEFAULT_DESC = "Explore software engineering projects, applied AI experiments, and documented engineering work by Muhammad Aqib Ali.";
const TITLES = {
  "/": ["Muhammad Aqib Ali | Software Engineering & Applied AI", DEFAULT_DESC],
  "/project": ["Projects | Muhammad Aqib Ali", "Browse source-backed software projects, AI experiments, and engineering prototypes."],
  "/about": ["About | Muhammad Aqib Ali", "Learn about Muhammad Aqib Ali's software development background and technical interests."],
  "/resume": ["Resume | Muhammad Aqib Ali", "Explore and download Muhammad Aqib Ali's curriculum vitae."],
  "/contact": ["Contact | Muhammad Aqib Ali", "Contact Muhammad Aqib Ali about software engineering and applied AI collaborations."]
};
function updateMeta(kind, name, value) {
  let element = document.head.querySelector(`meta[${kind}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(kind, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}
export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const project = pathname.startsWith("/project/")
      ? PROJECTS.find(item => pathname === `/project/${item.slug}`) : undefined;
    const [title, description] = project
      ? [`${project.title} | Muhammad Aqib Ali`, project.description]
      : (TITLES[pathname] || TITLES["/"]);
    const url = SITE + (pathname === "/" ? "/" : pathname);
    document.title = title;
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", url);
    updateMeta("property", "og:type", project ? "article" : "website");
    updateMeta("name", "robots", "index,follow,max-image-preview:large");
    const imageUrl = project && project.imgPath ? SITE + project.imgPath : SITE + "/social-preview.png";
    updateMeta("property", "og:image", imageUrl);
    updateMeta("property", "og:image:alt", project ? `Illustrative cover for ${project.title}` : "Muhammad Aqib Ali software development portfolio preview");
    updateMeta("name", "twitter:image", imageUrl);
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [pathname]);
  return null;
}
