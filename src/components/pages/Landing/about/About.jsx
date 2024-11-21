import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: 'url(/assets/images/banner/bnr1.jpg)' }}
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
              Our Mission
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p>
                Our mission is to champion academic excellence by ensuring that
                every thesis is not only accessible but also thoroughly
                documented and subjected to rigorous peer review. We believe
                that the foundation of great research lies in its ability to be
                shared, scrutinized, and refined through collaboration. By
                creating a robust platform, we aim to empower scholars to
                present their work to a global audience, fostering an
                environment where diverse perspectives contribute to the
                refinement of ideas and the advancement of knowledge.
                Accessibility is at the heart of our mission, as we strive to
                eliminate barriers and make academic research available to
                anyone who seeks to learn or contribute.
              </p>
              <p>
                Beyond accessibility, we are dedicated to cultivating a
                community of scholars who prioritize integrity, transparency,
                and collaboration in their research endeavors. Our platform is
                designed not only to share knowledge but also to connect
                researchers with peers and mentors who can provide constructive
                feedback and inspire innovation. By emphasizing the importance
                of peer review and detailed documentation, we aim to uphold the
                highest standards of academic rigor, ensuring that the work
                published through our platform serves as a reliable resource for
                future research. Together, we are building a vibrant ecosystem
                where ideas flourish, knowledge grows, and the boundaries of
                human understanding are continuously expanded.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/images/about/mission.png"
                alt="image"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
