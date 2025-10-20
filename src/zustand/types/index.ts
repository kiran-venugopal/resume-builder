export type SocialMediaItem = {
  type: string;
  url: string;
  label: string;
};

export type Entry = {
  title: string;
  subTitle?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  summary?: Record<string, unknown>;
};

export type BaseSection = {
  title: string;
  type: string;
  id: string;
};

export type SummarySection = BaseSection & {
  type: "summary";
  summary: Record<string, unknown>;
};

export type WithEntriesSection = BaseSection & {
  type: "withEntries";
  entries: Entry[];
};

export type SectionDetail = SummarySection | WithEntriesSection;

export type SectionDetails = {
  [key: string]: SectionDetail;
};

export type ResumeData = {
  name: string;
  titles: string[];
  location: string;
  email: string;
  phone: string;
  socialMedia: SocialMediaItem[];
  sections: string[];
  sectionDetails: SectionDetails;
};
