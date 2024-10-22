"use client";
import React, { useState } from "react";

const ThesisAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Thesis Guidelines & Template</h4>
      </div>
      <div className="card-body">
        <div
          className="accordion accordion-no-gutter accordion-bordered"
          id="accordion-four"
        >
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 0 ? "" : "collapsed"
              }`}
              id="accord-4One"
              role="button"
              onClick={() => toggleAccordion(0)}
            >
              <span className="accordion-header-text">
                How do I create an account on the thesis management website?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4One"
              className={`accordion__body ${
                openIndex === 0 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4One"
            >
              <div className="accordion-body-text">
                To create an account, click on the "Sign Up" button on the
                homepage. Fill in your details, including your email, password,
                and any required information. After submitting, check your email
                for a confirmation link to activate your account.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 1 ? "" : "collapsed"
              }`}
              id="accord-4Two"
              role="button"
              onClick={() => toggleAccordion(1)}
            >
              <span className="accordion-header-text">
                What file formats are accepted for thesis submissions?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4Two"
              className={`accordion__body ${
                openIndex === 1 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4Two"
            >
              <div className="accordion-body-text">
                The platform accepts submissions in various formats, including
                PDF. Please ensure your document adheres to the formatting
                guidelines specified on the submission page.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 2 ? "" : "collapsed"
              }`}
              id="accord-4Three"
              role="button"
              onClick={() => toggleAccordion(2)}
            >
              <span className="accordion-header-text">
                Can I edit my thesis after submission?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4Three"
              className={`accordion__body ${
                openIndex === 2 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4Three"
            >
              <div className="accordion-body-text">
                No, once you submit your thesis, you cannot edit it. Please
                ensure everything is correct before submitting.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 3 ? "" : "collapsed"
              }`}
              id="accord-4Four"
              role="button"
              onClick={() => toggleAccordion(3)}
            >
              <span className="accordion-header-text">
                How will I be notified about the review status of my thesis?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4Four"
              className={`accordion__body ${
                openIndex === 3 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4Four"
            >
              <div className="accordion-body-text">
                You will receive email notifications at each stage of the review
                process. This includes confirmation of submission, updates on
                the review status, and any feedback or required revisions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 4 ? "" : "collapsed"
              }`}
              id="accord-4Five"
              role="button"
              onClick={() => toggleAccordion(4)}
            >
              <span className="accordion-header-text">
                Is there a fee for submitting my thesis?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4Five"
              className={`accordion__body ${
                openIndex === 4 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4Five"
            >
              <div className="accordion-body-text">
                No, there is no fee for submitting your thesis. You can submit
                as many theses as you need without any cost.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className={`accordion-header rounded-lg ${
                openIndex === 5 ? "" : "collapsed"
              }`}
              id="accord-4Six"
              role="button"
              onClick={() => toggleAccordion(5)}
            >
              <span className="accordion-header-text">
                What should I do if I encounter technical issues during
                submission?
              </span>
              <span className="accordion-header-indicator" />
            </div>
            <div
              id="collapse4Six"
              className={`accordion__body ${
                openIndex === 5 ? "show" : "collapse"
              }`}
              aria-labelledby="accord-4Six"
            >
              <div className="accordion-body-text">
                If you experience any technical difficulties, please reach out
                to our support team via the "Contact Us" page. You can also
                check our FAQs for troubleshooting tips.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-success">
            Download Thesis Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThesisAccordion;
