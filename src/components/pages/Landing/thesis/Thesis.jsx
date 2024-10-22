import AdvancedSearch from "../../../custom/Search/AdvancedSearch";
import { Link } from "react-router-dom";

function Thesis() {
  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: "url(/assets/images/banner/bnr3.jpg)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Thesis</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Thesis Details
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section
        className="content-inner position-relative"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single pt-20 sidebar dz-card">
                <div className="dz-media dz-media-rounded rounded">
                  <img src="/assets/images/blog/large/ai.jpeg" alt="Image" />
                </div>
                <div className="dz-info m-b30">
                  <div className="dz-meta">
                    <ul>
                      <li className="post-author">
                        <a>
                          <img
                            src="/assets/images/avatar/user.png"
                            alt="Image"
                          />
                          <span>By Jone Doe</span>
                        </a>
                      </li>
                      <li className="post-date">
                        <a> 17 May 2022</a>
                      </li>
                      <li className="post-comment">
                        <a>3 comment</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="dz-title">AI in health care</h3>
                  <div className="dz-post-text">
                    <p>
                      The aim of this research is to identify adoption barriers
                      to the implementation of artificial intelligence in
                      medical diagnosis using the Technology Acceptance Model
                      and the Theory of Planned Behaviour. A qualitative case
                      study in Dutch hospitals involved eight semi-structured
                      interviews with stakeholders. In this study, it became
                      clear that the stakeholder's intention to adopt artificial
                      intelligence in medical diagnosis is influenced by the
                      perceived barriers. The adoption intention is
                      characterized by the factors of perceived usefulness,
                      attitude, subjective norms, and perceived behavioural
                      control, which can have a negative or positive influence
                      on the intention. For example, perceived usefulness has a
                      positive influence when work efficiency or quality
                      increases, but a negative influence if there are
                      significant potential risks involved in implementing AI.
                    </p>
                    <p>
                      If there is a positive attitude or positive subjective
                      norms, then this positively influences the intention to
                      adopt AI. For example, if important stakeholders have a
                      positive attitude, it can serve as a driving force because
                      they have more impact on the implementation process than
                      other stakeholders. It was found that the barriers that
                      influence the intention are knowledge and expertise, data
                      availability, ethical considerations, the business case of
                      AI, resistance to change of physicians, and life-cycle
                      management.&gt;
                    </p>

                    <p>
                      This study was carried out with a small research sample of
                      eight participants of which seven of the eight
                      participants work in hospitals in the Netherlands, and one
                      is a human-AI expert that provides expertise to hospitals.
                      This limits the external validity of the findings since
                      they might not be the same in different parts of the
                      world. This study could be expanded to other countries to
                      validate the findings. Furthermore, another limitation is
                      the purchasing department's involvement in the
                      implementation process. Artificial intelligence is still a
                      relatively new topic in healthcare companies, and
                      comparable research may be conducted after it has become
                      more established.
                    </p>

                    <p>
                      There has been limited research on the use of artificial
                      intelligence in medical diagnosis from the procurement
                      department's standpoint. The developed artificial
                      intelligence adoption model provides fresh perspectives on
                      this topic. Furthermore, the different factors that have a
                      positive or negative influence on the artificial
                      intelligence adoption process is a new aspect that got
                      introduced to the research field.
                    </p>
                  </div>
                  <div className="dz-share-post">
                    <div className="post-tags">
                      <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                      <a>
                        <span>AI</span>
                      </a>
                      <a>
                        <span>ML</span>
                      </a>
                      <a>
                        <span>NLP</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clear" id="comment-list">
                <div className="comments-area" id="comments">
                  <div className="widget-title style-1">
                    <h4 className="title">Comments</h4>
                  </div>
                  <div className="clearfix">
                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author vcard">
                            <img
                              className="avatar photo"
                              src="/assets/images/avatar/user.png"
                              alt="Image"
                            />
                          </div>
                          <cite className="fn">David</cite>
                          <p>
                            Good to know that you are working on this project
                            which clarifies my doubts about the AI in
                            healthcare.
                          </p>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author vcard">
                            <img
                              className="avatar photo"
                              src="/assets/images/avatar/user.png"
                              alt="Image"
                            />
                          </div>
                          <cite className="fn">Mark</cite>
                          <p>Deep insights on ai influence on healthcare</p>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author vcard">
                            <img
                              className="avatar photo"
                              src="/assets/images/avatar/user.png"
                              alt="Image"
                            />
                          </div>
                          <cite className="fn">Chris</cite>
                          <p>
                            I am working on this project and I would like to
                            know more about the AI in healthcare.
                          </p>
                        </div>
                      </li>
                    </ol>

                    
                  </div>
                </div>
              </div>
            </div>
            <AdvancedSearch />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thesis;
