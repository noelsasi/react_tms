"use client";
import { pdfjs } from "react-pdf";
import PDFr from "./PDFr";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Render() {
  return (
    <div>
      <PDFr />
    </div>
  );
}

export default Render;
