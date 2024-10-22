"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFr() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/assets/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width="500"
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default PDFr;
