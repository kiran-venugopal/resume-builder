import { SectionType } from "@/zustand/types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  sectionDetail: SectionType;
};

const SectionBuilder = ({ sectionDetail }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={sectionDetail.id}>
        <AccordionTrigger>{sectionDetail.title}</AccordionTrigger>
        <AccordionContent className="p-2">
          <div>
            <Label htmlFor="sectionTitle">Section name</Label>
            <Input
              id="sectionTitle"
              value={sectionDetail.title}
              title="Section"
              className="bg-background"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SectionBuilder;
