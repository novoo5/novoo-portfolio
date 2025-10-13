export interface Project {
  priority: number;
  title: string;
  shortDescription: string;
  cover: string;
  livePreview?: string;
  githubLink?: string;
  kaggleLink?: string;  // Added Kaggle support
  type?: string;
  siteAge?: string;
  visitors?: string;
  earned?: string;
  ratings?: string;
  githubStars?: string;
  numberOfSales?: string;
  status?: string;
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}
