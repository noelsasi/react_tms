import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: "url(/assets/images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>About Us</h1>

            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="content-inner overflow-hidden position-relative">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
              What We Believe In
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 m-b30">
              <div
                className="icon-bx-wraper style-1 bg-clr-sky wow bounceInLeft"
                data-wow-delay="1.2s"
              >
                <div className="icon-media">
                  <img
                    src="/assets/images/icon/pic1.png"
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="icon-content">
                  <h4 className="title">Mission</h4>
                  <p className="text">
                    We aim to support academic excellence by ensuring that every
                    thesis is accessible, well-documented, and subjected to
                    rigorous peer review
                  </p>
                </div>
                <h3 className="count">01</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-b30">
              <div
                className="icon-bx-wraper style-1 bg-clr-pink wow bounceInUp"
                data-wow-delay="1.0s"
              >
                <div className="icon-media">
                  <img
                    src="/assets/images/icon/value.png"
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="icon-content">
                  <h4 className="title">Values</h4>
                  <p className="text">
                    We believe in transparency, academic integrity, and the
                    power of collaboration to drive scholarly advancement
                  </p>
                  <br></br>
                </div>
                <h3 className="count">02</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-b30">
              <div
                className="icon-bx-wraper style-1 bg-clr-green wow bounceInRight"
                data-wow-delay="1.2s"
              >
                <div className="icon-media">
                  <img
                    src="/assets/images/icon/pic3.png"
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="icon-content">
                  <h4 className="title">History</h4>
                  <p className="text">
                    Founded in 1990, our repository has grown to include
                    thousands of theses from institutions around the world.
                  </p>
                  <br></br>
                </div>
                <h3 className="count">03</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-inner position-relative">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
              Our Team
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6  m-b30">
              <div
                className="dz-card style-1 overlay-shine wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="dz-media">
                  <img src="/assets/images/about/p1.jpeg" alt="img" />
                </div>
                <div className="dz-info">
                  <div className="dz-meta">
                    <ul>
                      <li className="post-author text-primary">
                        <span>
                          <i className="fa-solid fa-user" />
                        </span>
                        Scholar
                      </li>
                    </ul>
                  </div>
                  <h4 className="dz-title">David</h4>
                  <p>
                    {" "}
                    Thesis Contributed:10 <br></br>Thesis Reviewed:12<br></br>
                    Since 2010
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  m-b30">
              <div
                className="dz-card style-1 overlay-shine wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="dz-media">
                  <img src="/assets/images/about/p2.jpeg" alt="img" />
                </div>
                <div className="dz-info">
                  <div className="dz-meta">
                    <ul>
                      <li className="post-author text-primary">
                        <span>
                          <i className="fa-solid fa-user" />
                        </span>
                        Scholar
                      </li>
                    </ul>
                  </div>
                  <h4 className="dz-title">Mark</h4>
                  <p>
                    {" "}
                    Thesis Contributed:15 <br></br>Thesis Reviewed:16<br></br>
                    Since 2014
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  m-b30">
              <div
                className="dz-card style-1 overlay-shine wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="dz-media">
                  <img src="/assets/images/about/p3.jpeg" alt="img" />
                </div>
                <div className="dz-info">
                  <div className="dz-meta">
                    <ul>
                      <li className="post-author text-primary">
                        <span>
                          <i className="fa-solid fa-user" />
                        </span>
                        Scholar
                      </li>
                    </ul>
                  </div>
                  <h4 className="dz-title">Harris</h4>
                  <p>
                    {" "}
                    Thesis Contributed:20 <br></br>Thesis Reviewed:17<br></br>
                    Since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
