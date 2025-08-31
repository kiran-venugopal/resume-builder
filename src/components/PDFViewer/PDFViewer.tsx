import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import ViewerContent from "./ViewerContent";

const PDFViewer = () => {
  const ref = useRef(document.createElement("iframe"));
  useEffect(() => {
    const element = ref.current.contentDocument?.body;
    if (!element || element.children.length) {
      return;
    }

    const style = document.createElement("style");
    style.textContent = `
        .resume-page{
            box-shadow:0 4px 15px rgba(0, 0, 0, 0.15);
            margin: 20px auto;
        }
    `;
    ref.current.contentDocument?.head.append(style);

    createRoot(element).render(<ViewerContent />);
  }, []);

  return (
    <iframe
      style={{
        width: "904px", // A4 width at 96dpi
        maxHeight: "100vh",
        overflow: "auto",
      }}
      ref={ref}
      id="pdfView"
    />
  );
};

export default PDFViewer;
