export interface SocialMedia {
  type: string;
  url: string;
  label: string;
}

export interface ResumeSectionBase {
  id: string;
  title: string;
  type: string;
  summary?: Record<string, object>;
}

export interface ExperienceSubSection {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  summary: Record<string, object>;
}

export interface WorkExperienceSection extends ResumeSectionBase {
  subSections: ExperienceSubSection[];
}

export interface EducationSubSection {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  summary: Record<string, object>;
}

export interface EducationSection extends ResumeSectionBase {
  subSections: EducationSubSection[];
}

export type SectionType =
  | ResumeSectionBase
  | WorkExperienceSection
  | EducationSection;

export interface SectionDetails {
  profSummary: ResumeSectionBase;
  workExperience: WorkExperienceSection;
  education: EducationSection;
  [key: string]: ResumeSectionBase | WorkExperienceSection | EducationSection;
}

export interface ResumeData {
  name: string;
  titles: string[];
  location: string;
  email: string;
  phone: string;
  socialMedia: SocialMedia[];
  sections: string[];
  sectionDetails: SectionDetails;
}
