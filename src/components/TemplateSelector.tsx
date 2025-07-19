// TemplateSelector.tsx
// Dropdown for selecting resume template
import React from "react";
import type { ResumeData, SetResumeData } from "./types";

const templates = [
  { id: "default1", name: "Modern Clean", pro: false },
  { id: "default2", name: "Classic", pro: false },
  { id: "default3", name: "Minimal", pro: false },
  { id: "pro1", name: "Elegant (Pro)", pro: true },
];

export default function TemplateSelector({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: SetResumeData;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">Template</label>
      <select
        className="input input-bordered"
        value={resumeData.template}
        onChange={(e) =>
          setResumeData((d) => ({ ...d, template: e.target.value }))
        }
      >
        {templates.map((t) => (
          <option key={t.id} value={t.id} disabled={t.pro}>
            {t.name} {t.pro ? "🔒" : ""}
          </option>
        ))}
      </select>
      <span className="text-xs text-gray-400">
        Unlock more templates with Pro plan
      </span>
    </div>
  );
}
