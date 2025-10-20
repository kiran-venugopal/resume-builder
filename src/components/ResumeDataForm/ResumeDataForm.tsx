import { useResumeStore } from "@/zustand/useResumeStore";
import React from "react";
import SectionBuilder from "./SectionBuilder";
import PersonalInfoForm from "./forms/PersonalInfoForm";

const ResumeDataForm = () => {
  const { resumeData } = useResumeStore();
  console.log({ resumeData });

  return (
    <section className="p-2">
      <PersonalInfoForm />
      {resumeData.sections.map((sectionId) => (
        <SectionBuilder
          key={sectionId}
          sectionDetail={resumeData.sectionDetails[sectionId]}
        />
      ))}
    </section>
  );
};

export default ResumeDataForm;
