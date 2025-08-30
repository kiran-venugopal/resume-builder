import { SectionType } from "@/zustand/types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import RenderForm from "./RenderForm";

type Props = {
  sectionDetail: SectionType;
};

const SectionBuilder = ({ sectionDetail }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={sectionDetail.id}>
        <AccordionTrigger>{sectionDetail.title}</AccordionTrigger>
        <AccordionContent className="p-2">
          <RenderForm sectionId={sectionDetail.id} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SectionBuilder;
