export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type Affiliation = {
  id: number;
  title: string;
  desc: string;
  date: string;
  link?: string;
};
