import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useResumeStore } from "@/zustand/useResumeStore";
import RichTextExample from "./RTE";

type Props = {
  sectionId: string;
};

const RenderForm = ({ sectionId }: Props) => {
  const { resumeData, setResumeData } = useResumeStore();

  const sectionDetail = resumeData.sectionDetails[sectionId];

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setResumeData({
      ...resumeData,
      sectionDetails: {
        ...resumeData.sectionDetails,
        [sectionId]: {
          ...sectionDetail,
          title: newTitle,
        },
      },
    });
  };

  return (
    <div className="list-inside">
      <Label htmlFor="sectionTitle">Section name</Label>
      <Input
        id="sectionTitle"
        value={sectionDetail.title}
        title="Section"
        className="bg-background"
        onChange={handleTitleChange}
      />
      <Label htmlFor="sectionTitle">Summary</Label>
      <RichTextExample />
    </div>
  );
};

export default RenderForm;
