// DynamicAccordion.tsx
// Accordions for Skills, Projects, Experience, Education (dynamic fields)
import React from "react";
import type { ResumeData, SetResumeData } from "./types";

const sections = [
  { key: "skills", label: "Skills", placeholder: "Add a skill..." },
  { key: "projects", label: "Projects", placeholder: "Add a project..." },
  { key: "experience", label: "Experience", placeholder: "Add experience..." },
  { key: "education", label: "Education", placeholder: "Add education..." },
];

export default function DynamicAccordion({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: SetResumeData;
}) {
  const handleAdd = (key: keyof ResumeData) => {
    setResumeData((d) => ({
      ...d,
      [key]: [...((d[key] as string[]) || []), ""],
    }));
  };
  const handleChange = (key: keyof ResumeData, idx: number, value: string) => {
    setResumeData((d) => {
      const arr = [...((d[key] as string[]) || [])];
      arr[idx] = value;
      return { ...d, [key]: arr };
    });
  };
  const handleRemove = (key: keyof ResumeData, idx: number) => {
    setResumeData((d) => {
      const arr = [...((d[key] as string[]) || [])];
      arr.splice(idx, 1);
      return { ...d, [key]: arr };
    });
  };
  return (
    <div className="flex flex-col gap-2">
      {sections.map((section) => (
        <div key={section.key} className="border rounded mb-2 bg-gray-50">
          <details open>
            <summary className="cursor-pointer px-3 py-2 font-semibold text-gray-700 select-none">
              {section.label}
            </summary>
            <div className="flex flex-col gap-2 px-3 pb-3">
              {(resumeData[section.key] || []).map(
                (item: string, idx: number) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      className="input input-bordered flex-1"
                      value={item}
                      placeholder={section.placeholder}
                      onChange={(e) =>
                        handleChange(section.key, idx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => handleRemove(section.key, idx)}
                    >
                      ✕
                    </button>
                  </div>
                )
              )}
              <button
                type="button"
                className="text-blue-600 text-sm mt-1"
                onClick={() => handleAdd(section.key)}
              >
                + Add {section.label}
              </button>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
