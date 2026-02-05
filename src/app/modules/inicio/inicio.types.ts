export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundClass: string;
  backgroundImage: string;
  backgroundVideo?: string;
  isVideo?: boolean;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  detailedDescription: string;
  image: string;
  video?: string;
}

export interface Methodology {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowWeDoItem {
  id: number;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface SectorInfo {
  name: string;
  description: string;
  position: { x: number; y: number };
  tooltipPosition: { x: number; y: number };
  arrowPath?: { viewBox: string; d: string };
  arrowHead?: { d: string };
  image?: string;
}

export interface SectorCarouselItem {
  name: string;
  description: string;
  image: string;
}

export type TechCategoryId = 'web' | 'movil' | 'tecnologia';

export interface TechCategory {
  id: TechCategoryId;
  label: string;
  items: string[];
}
