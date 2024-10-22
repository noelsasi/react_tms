import SubmitThesisForm from "@/app/components/Forms/SubmitThesisForm";
import Pagination from "@/app/components/misc/Pagination";

function Submit_Thesis() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <SubmitThesisForm />
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-block">
                <h4 className="card-title">Guidelines and Template</h4>
                <p className="m-0 subtitle">
                  Follow every rule and guideline to submit thesis
                </p>
              </div>
              <div className="card-body">
                <a
                  className="m-0 subtitle"
                  href="https://grad.ucsd.edu/academics/preparing-to-graduate/dissertation-thesis-template.html"
                >
                  Click here to see template
                </a>
                <div
                  className="accordion accordion-no-gutter accordion-bordered"
                  id="accordion-four"
                >
                  <div className="accordion-item">
                    <div
                      className="accordion-header  rounded-lg"
                      id="accord-4One"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4One"
                      aria-controls="collapse4One"
                      aria-expanded="true"
                      role="button"
                    >
                      <span className="accordion-header-text">
                        Fonts and Desktop Publishing
                      </span>
                      <span className="accordion-header-indicator" />
                    </div>
                    <div
                      id="collapse4One"
                      className="collapse accordion__body show"
                      aria-labelledby="accord-4One"
                      data-bs-parent="#accordion-four"
                    >
                      <div className="accordion-body-text">
                        Features that should stand out in the thesis include the
                        quality of the scholarship or research, the soundness of
                        the logic, the originality of ideas, and the lucidity of
                        the prose, but not the size of the headlines. The use of
                        headers or chapter titles larger than 3/16" is
                        discouraged and the use of excessive italics or bold
                        print is discouraged.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed rounded-lg"
                      id="accord-4Two"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4Two"
                      aria-controls="collapse4Two"
                      aria-expanded="true"
                      role="button"
                    >
                      <span className="accordion-header-text">Spacing</span>
                      <span className="accordion-header-indicator" />
                    </div>
                    <div
                      id="collapse4Two"
                      className="collapse accordion__body"
                      aria-labelledby="accord-4Two"
                      data-bs-parent="#accordion-four"
                    >
                      <div className="accordion-body-text">
                        Use 1.5 or double spaced text. Only footnotes, long
                        quotations, bibliography entries (double space between
                        entries), table captions, and similar special material
                        may be single-spaced.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed rounded-lg"
                      id="accord-4Three"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4Three"
                      aria-controls="collapse4Three"
                      aria-expanded="true"
                      role="button"
                    >
                      <span className="accordion-header-text">Margins</span>
                      <span className="accordion-header-indicator" />
                    </div>
                    <div
                      id="collapse4Three"
                      className="collapse accordion__body"
                      aria-labelledby="accord-4Three"
                      data-bs-parent="#accordion-four"
                    >
                      <div className="accordion-body-text">
                        We recommend a left margin of 1.5" and a top, bottom,
                        and right margin of 1" if the thesis is to be bound.
                        Page numbers do not need to meet the 1" margin
                        requirement. If you do not follow the appropriate margin
                        guidelines that are included here, you might lose
                        content if your thesis is later bound. Some students may
                        wish to extend their work beyond the margin requirement
                        for aesthetic reasons; this is acceptable.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed rounded-lg"
                      id="accord-4Three"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4Four"
                      aria-controls="collapse4Four"
                      aria-expanded="true"
                      role="button"
                    >
                      <span className="accordion-header-text">Abstract</span>
                      <span className="accordion-header-indicator" />
                    </div>
                    <div
                      id="collapse4Four"
                      className="collapse accordion__body"
                      aria-labelledby="accord-4Three"
                      data-bs-parent="#accordion-four"
                    >
                      <div className="accordion-body-text">
                        An abstract is to be included with the thesis.
                        Particular care should be taken in preparing the
                        abstract since it will be published in Dissertation
                        Abstracts or Master's Abstracts and the length is
                        limited by the publisher. The abstract may not exceed
                        350 words for a doctorate or 150 words for a master's.
                        In style, the abstract should be a miniature version of
                        the thesis. It should be a summary of the results,
                        conclusions or main arguments presented in the thesis.
                        The heading of the abstract must contain the word
                        Abstract, and must show the title of the thesis and the
                        writer's name as indicated here.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed rounded-lg"
                      id="accord-4Three"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4Five"
                      aria-controls="collapse4Five"
                      aria-expanded="true"
                      role="button"
                    >
                      <span className="accordion-header-text">
                        Page Numbering
                      </span>
                      <span className="accordion-header-indicator" />
                    </div>
                    <div
                      id="collapse4Five"
                      className="collapse accordion__body"
                      aria-labelledby="accord-4Three"
                      data-bs-parent="#accordion-four"
                    >
                      <div className="accordion-body-text">
                        Page numbers should be placed in the upper right corner
                        of the page. Only the number should appear, not "page 9"
                        or the abbreviation "p. 9." On the first page of each
                        chapter, the number may be placed at the center bottom,
                        one double space below the last line of type (the
                        conventional placement), or at the top right corner.
                        Page numbers should not be shown on the Title Page, the
                        Abstract, or on the first page of the Acknowledgments,
                        Table of Contents, List of Tables or the Preface.
                        However, the following pages (e.g., the second and
                        succeeding pages) of each of these sections should be
                        numbered using Roman numerals. The count for these
                        preliminary pages should start with the title page. For
                        example, if the thesis has a two-page abstract, then the
                        second page of the acknowledgments should be the first
                        page showing a number, and it should be numbered with
                        the Roman numeral v. Pages of the text itself and of all
                        items following the text (i.e. the notes and
                        bibliography) should be numbered consecutively
                        throughout in Arabic numbers, beginning with number 1 on
                        the first page of the first chapter or introduction (but
                        not preface). Please number every page to be bound,
                        including pages on which only illustrations, drawings,
                        tables, or captions appear. The page numbers do not need
                        to meet the 1" margin requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Thesis</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: 80 }}>
                          <strong>ID</strong>
                        </th>

                        <th>
                          <strong>Title</strong>
                        </th>
                        <th>
                          <strong>Author</strong>
                        </th>
                        <th>
                          <strong>Category</strong>
                        </th>
                        <th>
                          <strong>Keywords</strong>
                        </th>
                        <th>
                          <strong>Abstract</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>01</strong>
                        </td>
                        <td>AI in health care</td>
                        <td>David</td>
                        <td>Medicine</td>
                        <td>Bioinformatics</td>
                        <td>The use of AI in health care</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>02</strong>
                        </td>
                        <td>Machine Learning in Education</td>
                        <td>Susan</td>
                        <td>Education</td>
                        <td>Data Science</td>
                        <td>Leveraging ML to enhance learning outcomes</td>
                        <td>Accepted</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>03</strong>
                        </td>
                        <td>Blockchain for Data Security</td>
                        <td>Michael</td>
                        <td>Computer Science</td>
                        <td>Security</td>
                        <td>
                          Exploring blockchain for enhancing data security
                        </td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>04</strong>
                        </td>
                        <td>Climate Change Modeling</td>
                        <td>Emma</td>
                        <td>Environmental Science</td>
                        <td>Climate Studies</td>
                        <td>AI-based climate prediction models</td>
                        <td>Pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Submit_Thesis;
