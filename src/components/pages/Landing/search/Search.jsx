import ThesisHorizontal from "./../../../custom/Cards/ThesisHorizontal";
import AdvancedSearch from "./../../../custom/Search/AdvancedSearch";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: "url(/assets/images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Search Thesis</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search Thesis
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="content-inner bg-white position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="row">
                <ThesisHorizontal
                  title="Use of AI in healtcare"
                  abstract="
              AI has been used in healthcare for a long time. It has been used to
              diagnose diseases, develop treatments, and even to predict the
              future. In this thesis, we will discuss the use of AI in
              "
                  author="KK Sharma"
                  date="25 Sep 2024"
                  img_src="/assets/images/blog/t2.png"
                />
                <ThesisHorizontal
                  author="ELon "
                  date="18 Jun 2024"
                  title="Impact of Climate Change on Marine Biodiversity"
                  abstract="Analyzes the effects of global climate change on marine ecosystems and species diversity."
                  img_src="/assets/images/blog/t5.png"
                />
                <ThesisHorizontal
                  author="Chris"
                  date="18 Jun 2024"
                  title="Advancements in Quantum Computing"
                  abstract="A study of the potential breakthroughs in quantum computing and its future applications"
                  img_src="/assets/images/blog/t6.png"
                />
                <ThesisHorizontal
                  author="David"
                  date="18 Jun 2024"
                  title="Mental Health Awareness in Modern Workplaces"
                  abstract="Focuses on promoting mental health initiatives and support systems within corporate environments."
                  img_src="/assets/images/blog/t7.png"
                />
                <div className="col-lg-12 m-b30 m-t30 m-lg-t10">
                  <nav aria-label="Blog Pagination">
                    <ul
                      className="pagination style-2 text-center wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <li className="page-item">
                        <a className="page-link prev">
                          <i className="fas fa-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link next">
                          <i className="fas fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
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

export default Search;
