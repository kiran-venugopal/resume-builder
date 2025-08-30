import { SectionType } from "@/zustand/types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  sectionDetail: SectionType;
};

const SectionBuilder = ({ sectionDetail }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={sectionDetail.id}>
        <AccordionTrigger>{sectionDetail.title}</AccordionTrigger>
        <AccordionContent>{sectionDetail.type}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SectionBuilder;
