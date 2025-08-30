import { create } from "zustand";
import { ResumeData } from "./types";

const initialResumeData: ResumeData = {
  name: "MICHAEL HARRIS",
  titles: ["SEO", "SEM"],
  location: "Sydney, Australia",
  email: "Email",
  phone: "+61 2323232323",
  socialMedia: [
    {
      type: "linkedin",
      url: "https://linkedin.com/in/michaelharris",
      label: "linkedin.com/in/michaelharris",
    },
  ],
  sections: ["profSummary", "workExperience", "education", "uuid1"],
  sectionDetails: {
    profSummary: {
      title: "Professional Summary",
      type: "profSummary",
      id: "profSummary",
      summary: {},
    },
    workExperience: {
      title: "WORK EXPERIENCE",
      type: "workExperience",
      id: "workExperience",
      subSections: [
        {
          title: "Marketing Manager",
          company: "Company Name",
          location: "Australia",
          startDate: "01/01/2022",
          endDate: "",
          isActive: true,
          summary: {},
        },
      ],
    },
    education: {
      title: "Education",
      type: "education",
      id: "education",
      subSections: [
        {
          title: "Course Name",
          company: "College Name",
          location: "Australia",
          startDate: "01/01/2022",
          endDate: "",
          isActive: true,
          summary: {},
        },
      ],
    },
    uuid1: {
      id: "uuid1",
      title: "Some title",
      summary: {},
      type: "custom",
    },
  },
};

type State = {
  resumeData: ResumeData;
  setResumeData: (resumeData: ResumeData) => void;
};

export const useResumeStore = create<State>((set) => ({
  resumeData: initialResumeData,
  setResumeData: (resumeData: ResumeData) => set({ resumeData }),
}));
