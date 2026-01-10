export interface Project {
  id?: string;
  number: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  demoUrl: string;
  githubUrl?: string;
  stars: number;
  technologies?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
