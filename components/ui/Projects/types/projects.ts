export interface ProjectsData {
  projects: Project[];
}

export interface Project {
  src: string;
  title: string;
  body: string;
  links: Links;
}

export interface Links {
  website: string;
  sourceCode: string;
}
