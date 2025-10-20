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
      type: "summary",
      id: "profSummary",
      summary: {},
    },
    workExperience: {
      title: "WORK EXPERIENCE",
      type: "withEntries",
      id: "workExperience",
      entries: [
        {
          title: "Marketing Manager",
          subTitle: "Company Name",
          location: "Australia",
          startDate: "01/01/2022",
          endDate: "",
          summary: {},
        },
      ],
    },
    education: {
      title: "Education",
      type: "withEntries",
      id: "education",
      entries: [
        {
          title: "Course Name",
          subTitle: "College Name",
          location: "Australia",
          startDate: "01/01/2022",
          endDate: "",
          summary: {},
        },
      ],
    },
    uuid1: {
      title: "Education",
      type: "withEntries",
      id: "uuid1",
      entries: [
        {
          title: "Course Name",
          subTitle: "College Name",
          location: "Australia",
          startDate: "01/01/2022",
          endDate: "",
          summary: {},
        },
      ],
    },
  },
};

type State = {
  resumeData: ResumeData;
  setResumeData: (resumeData: ResumeData) => void;
  updatePersonalInfo: (personalInfo: Partial<Pick<ResumeData, 'name' | 'titles' | 'location' | 'email' | 'phone'>>) => void;
};

export const useResumeStore = create<State>((set) => ({
  resumeData: initialResumeData,
  setResumeData: (resumeData: ResumeData) => set({ resumeData }),
  updatePersonalInfo: (personalInfo) => 
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        ...personalInfo
      }
    })),
}));
