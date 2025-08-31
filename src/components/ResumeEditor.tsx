// ResumeEditor.tsx
"use client";

import React from "react";
import ResumeDataForm from "./ResumeDataForm/ResumeDataForm";
import PDFViewer from "./PDFViewer/PDFViewer";

export default function ResumeEditor() {
  // Download resume as PDF by sending innerHTML to API
  const handleDownload = async () => {
    const frame = document.getElementById("pdfView") as HTMLIFrameElement;
    const resumeContent = frame.contentDocument?.body;
    if (!resumeContent) return;

    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        body: JSON.stringify({ html: resumeContent.innerHTML }),
      });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download PDF:", error);
    }
  };

  return (
    <div className="flex w-full bg-white h-screen">
      <div className="w-[40vw]">
        <ResumeDataForm />
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div>
      <PDFViewer />
    </div>
  );
}
