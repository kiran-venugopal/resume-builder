import React from "react";
import { SectionType, WorkExperienceSection } from "@/zustand/types";
import { useResumeStore } from "@/zustand/useResumeStore";

type Props = {
  section: SectionType & WorkExperienceSection;
};

export function SectionRenderer({ section }: Props) {
  if (!section) return null;

  if (section.type === "profSummary") {
    return (
      <div style={{ marginBottom: 10, background: "#fff", color: "#222" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
            borderBottom: "1px solid #222",
            paddingBottom: 5,
            marginTop: 16,
            marginBottom: 6,
            color: "#222",
          }}
        >
          {section.title}
        </div>
        <div style={{ color: "#222" }}>
          {typeof section.summary?.text === "string"
            ? section.summary.text
            : ""}
        </div>
      </div>
    );
  }

  if (section.type === "workExperience" && Array.isArray(section.subSections)) {
    return (
      <div style={{ marginBottom: 10, background: "#fff", color: "#222" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
            borderBottom: "1px solid #222",
            paddingBottom: 2,
            marginTop: 16,
            marginBottom: 6,
            color: "#222",
          }}
        >
          {section.title}
        </div>

        {section.subSections.map((job, index) => (
          <div
            key={index}
            style={{ marginBottom: 2, background: "#fff", color: "#222" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#222",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", color: "#222" }}>
                  {job.title}
                </span>{" "}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    marginLeft: 8,
                    color: "#222",
                  }}
                >
                  {job.company}, {job.location}
                </span>
              </div>
              <span style={{ fontSize: 10, color: "#555" }}>
                {job.isActive
                  ? `${job.startDate} – Present`
                  : `${job.startDate} – ${job.endDate}`}
              </span>
            </div>

            {Array.isArray(job.summary?.bullets) && (
              <ul style={{ marginLeft: 12, marginTop: 2, color: "#222" }}>
                {job.summary.bullets.map((bullet: string, idx: number) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: 11,
                      marginBottom: 2,
                      listStyle: "disc inside",
                      color: "#222",
                    }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "education" && Array.isArray(section.subSections)) {
    return (
      <div style={{ marginBottom: 10, background: "#fff", color: "#222" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
            borderBottom: "1px solid #222",
            paddingBottom: 2,
            marginTop: 16,
            marginBottom: 6,
            color: "#222",
          }}
        >
          {section.title}
        </div>

        {section.subSections.map((edu, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
              color: "#222",
            }}
          >
            <div>
              <span style={{ fontWeight: "bold", color: "#222" }}>
                {edu.title}
              </span>{" "}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: "bold",
                  marginLeft: 8,
                  color: "#222",
                }}
              >
                {edu.company}, {edu.location}
              </span>
            </div>
            <span style={{ fontSize: 10, color: "#555" }}>
              {edu.isActive
                ? `Graduated: ${edu.startDate}`
                : `Graduated: ${edu.endDate}`}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "custom") {
    return (
      <div style={{ marginBottom: 10, background: "#fff", color: "#222" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
            borderBottom: "1px solid #222",
            paddingBottom: 2,
            marginTop: 16,
            marginBottom: 6,
            color: "#222",
          }}
        >
          {section.title}
        </div>
        <div style={{ color: "#222" }}>
          {typeof section.summary?.text === "string"
            ? section.summary.text
            : ""}
        </div>
      </div>
    );
  }

  return null;
}

const PAGE_HEIGHT = 1123; // A4 height at 96 dpi

const ViewerContent = () => {
  const { resumeData } = useResumeStore();
  console.log({ resumeData });

  // Render paginated pages now that heights are known
  return (
    <>
      <style>
        {`
        body{
            margin:0px;
        }
        `}
      </style>

      <div
        style={{
          background: "#fff",
          padding: "32px 24px",
          fontSize: 12,
          color: "#222",
          height: PAGE_HEIGHT,
          width: 794,
          fontFamily: "Arial, Helvetica, sans-serif",
          boxSizing: "border-box",
          marginBottom: 40,
          overflow: "hidden",
        }}
        className="resume-page"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #222",
            background: "#fff",
            color: "#222",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 4,
              color: "#222",
            }}
          >
            {resumeData.name ?? ""}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 2,
              color: "#222",
            }}
          >
            {resumeData.titles?.join(" | ") ?? ""}
          </div>
          <div style={{ fontSize: 10, marginBottom: 2, color: "#222" }}>
            {[
              resumeData.location,
              resumeData.email,
              resumeData.phone,
              resumeData.socialMedia?.map((s) => s.label).join(" | "),
            ]
              .filter(Boolean)
              .join(" | ")}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewerContent;
