import { useEffect, useState } from "react";
import axios from "axios";
import ThesisCard from "../../custom/Cards/ThesisCard";
import { Link } from "react-router-dom";
export default function Home() {
  const [theses, setTheses] = useState({
    latest: [],
    featured: []
  });

  useEffect(() => {
    const fetchTheses = async () => {
      try {
        const response = await axios.get("/api/misc/home");
        setTheses(response.data);
      } catch (error) {
        console.error("Error fetching theses:", error);
      }
    };

    fetchTheses();
  }, []);

  return (
    <div>
      <div className="main-bnr bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <h6 className="sub-title wow fadeInUp" data-wow-delay="0.4s">
                We Have 10,000+ Thesis
              </h6>
              <h1 className=" wow fadeInUp" id="text" data-wow-delay="0.6s">
                Discover, Submit, and Inspire Academic<br></br>
                <span className=" text-primary">Thesis</span>
              </h1>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="banner-media">
                <img
                  className="media wow bounceInRight"
                  data-wow-delay="1.4s"
                  src="/assets/images/home-banner/h1.png"
                  alt="home-banner"
                />
                <ul className="bnr-blocks">
                  <li>
                    <div
                      className="bnr-block wow fadeInUp anm"
                      data-wow-delay="1.6s"
                      data-speed-x={-1}
                      data-speed-scale={-1}
                    >
                      <i className="fa-solid fa-envelope" />
                      <span className="block-text">
                        Explore Thesis <br />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="bnr-block wow fadeInUp anm"
                      data-wow-delay="1.6s"
                      data-speed-x={-2}
                      data-speed-scale={-1}
                    >
                      <i className="fa-solid fa-briefcase" />
                      <span className="block-text">
                        Download Thesis <br />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="bnr-block-pics wow fadeInUp anm"
                      data-wow-delay="1.6s"
                      data-speed-x={-3}
                      data-speed-scale={-1}
                    >
                      <span className="block-text">Expert Team Members</span>
                      <div className="twm-pics">
                        <span>
                          <img
                            src="/assets/images/banner/banner-block-pics/1.png"
                            alt="image"
                          />
                        </span>
                        <span>
                          <img
                            src="/assets/images/banner/banner-block-pics/2.png"
                            alt="image"
                          />
                        </span>
                        <span>
                          <img
                            src="/assets/images/banner/banner-block-pics/3.png"
                            alt="image"
                          />
                        </span>
                        <span>
                          <img
                            src="/assets/images/banner/banner-block-pics/4.png"
                            alt="image"
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="shape1"
          viewBox="0 0 250 315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-15.8534 213.126L-49.2042 179.81C-58.9952 170.029 -58.9952 154.167 -49.2042 144.38L-15.8534 111.064C-6.0624 101.283 9.81609 101.283 19.6137 111.064L52.9646 144.38C62.7556 154.161 62.7556 170.023 52.9646 179.81L19.6137 213.126C9.81609 222.914 -6.0624 222.914 -15.8534 213.126Z"
            fill="var(--rgba-primary-6)"
          />
          <path
            d="M54.9201 306.94L23.9065 275.959C13.4659 265.529 13.4659 248.623 23.9065 238.194L54.9201 207.212C65.3607 196.783 82.2839 196.783 92.7245 207.212L123.738 238.194C134.179 248.623 134.179 265.529 123.738 275.959L92.7245 306.94C82.2839 317.37 65.354 317.37 54.9201 306.94Z"
            fill="var(--rgba-primary-6)"
          />
          <path
            d="M11.2693 151.465L-104.622 35.6945C-115.062 25.2648 -115.062 8.35919 -104.622 -2.0705L11.2693 -117.841C21.7099 -128.27 38.6331 -128.27 49.0737 -117.841L164.965 -2.0705C175.405 8.35919 175.405 25.2648 164.965 35.6945L49.0737 151.465C38.6331 161.894 21.7099 161.894 11.2693 151.465Z"
            fill="var(--primary-dark)"
          />
          <path
            d="M169.833 69.519L135.973 35.6945C125.533 25.2648 125.533 8.35919 135.973 -2.0705L169.833 -35.8951C180.274 -46.3248 197.197 -46.3248 207.638 -35.8951L241.497 -2.0705C251.938 8.35919 251.938 25.2648 241.497 35.6945L207.638 69.519C197.197 79.9487 180.274 79.9487 169.833 69.519Z"
            fill="var(--primary)"
          />
          <path
            d="M109.494 186.871L69.1182 146.537C63.0708 140.496 63.0708 130.702 69.1182 124.661L109.494 84.3272C115.542 78.2861 125.346 78.2861 131.393 84.3272L171.769 124.661C177.817 130.702 177.817 140.496 171.769 146.537L131.393 186.871C125.346 192.912 115.542 192.912 109.494 186.871Z"
            fill="var(--primary)"
          />
        </svg>
        <svg
          className="shape2"
          viewBox="0 0 319 612"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_54_23"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={319}
            height={612}
          >
            <rect width={319} height={612} fill="var(--primary)" />
          </mask>
          <g mask="url(#mask0_54_23)">
            <path
              d="M76.7559 377.481L36.5386 359.615C23.3563 353.759 16.9589 338.129 22.2524 324.711L38.402 283.774C43.6954 270.356 58.6781 264.223 71.8604 270.08L112.078 287.946C125.26 293.802 131.657 309.432 126.364 322.85L110.214 363.787C104.921 377.205 89.9382 383.338 76.7559 377.481Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M245.853 304.82L166.379 269.514C146.657 260.753 137.091 237.381 145.011 217.305L176.924 136.41C184.844 116.335 207.247 107.165 226.97 115.927L306.443 151.232C326.166 159.994 335.731 183.365 327.812 203.441L295.899 284.336C287.979 304.412 265.575 313.581 245.853 304.82Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M376.662 571.765L157.738 474.51C138.015 465.748 128.449 442.377 136.369 422.301L224.28 199.46C232.2 179.384 254.603 170.215 274.326 178.976L493.25 276.232C512.973 284.994 522.539 308.365 514.619 328.441L426.708 551.282C418.784 571.348 396.381 580.518 376.662 571.765Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M115.525 575.71L45.2359 544.485C25.5131 535.723 15.9473 512.352 23.8672 492.276L52.0921 420.73C60.012 400.654 82.4152 391.485 102.138 400.246L172.427 431.471C192.149 440.233 201.715 463.605 193.795 483.68L165.57 555.226C157.659 575.299 135.247 584.472 115.525 575.71Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M185.275 121.967L151.156 106.81C135.544 99.8747 127.966 81.3589 134.235 65.4683L147.936 30.7383C154.205 14.8477 171.953 7.58327 187.565 14.5184L221.684 29.6757C237.296 36.6109 244.874 55.1268 238.605 71.0173L224.904 105.747C218.635 121.638 200.895 128.899 185.275 121.967Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M141.303 344.782L115.419 333.283C106.513 329.327 102.19 318.765 105.766 309.699L116.16 283.352C119.736 274.287 129.861 270.143 138.767 274.099L164.651 285.598C173.557 289.555 177.88 300.117 174.304 309.182L163.91 335.529C160.334 344.595 150.209 348.739 141.303 344.782Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M88.3079 244.487L79.933 240.767C75.6064 238.845 73.5055 233.712 75.2429 229.308L78.6059 220.783C80.3433 216.379 85.2636 214.365 89.5903 216.287L97.9652 220.007C102.292 221.93 104.393 227.063 102.655 231.467L99.2923 239.991C97.5549 244.395 92.6346 246.409 88.3079 244.487Z"
              stroke="var(--primary-dark)"
              strokeWidth={2}
              strokeMiterlimit={10}
            />
            <path
              d="M83.1256 390.858L42.9082 372.992C29.7259 367.135 23.3286 351.505 28.622 338.087L44.7716 297.15C50.065 283.732 65.0478 277.6 78.23 283.456L118.447 301.322C131.63 307.178 138.027 322.808 132.734 336.227L116.584 377.163C111.291 390.582 96.3167 396.71 83.1256 390.858Z"
              fill="var(--primary-dark)"
            />
            <path
              d="M275.11 335.94L195.637 300.634C175.914 291.873 166.348 268.501 174.268 248.426L206.181 167.531C214.101 147.455 236.504 138.285 256.227 147.047L335.7 182.352C355.423 191.114 364.989 214.486 357.069 234.561L325.156 315.456C317.245 335.528 294.833 344.701 275.11 335.94Z"
              fill="var(--rgba-primary)"
            />
            <path
              d="M416.689 688.933L358.103 662.906C338.38 654.144 328.814 630.773 336.734 610.697L360.26 551.063C368.18 530.987 390.583 521.818 410.306 530.579L468.892 556.606C488.615 565.367 498.181 588.739 490.261 608.815L466.735 668.449C458.815 688.525 436.412 697.694 416.689 688.933Z"
              fill="white"
            />
            <path
              d="M405.915 602.876L186.991 505.621C167.268 496.859 157.702 473.488 165.622 453.412L253.533 230.571C261.453 210.495 283.856 201.326 303.579 210.087L522.503 307.343C542.226 316.105 551.792 339.476 543.872 359.552L455.961 582.393C448.041 602.469 425.638 611.638 405.915 602.876Z"
              fill="var(--primary-dark)"
            />
            <path
              d="M144.79 606.827L74.5018 575.601C54.779 566.84 45.2132 543.468 53.133 523.393L81.358 451.847C89.2779 431.771 111.681 422.601 131.404 431.363L201.693 462.588C221.415 471.35 230.981 494.721 223.061 514.797L194.836 586.343C186.916 606.419 164.504 615.592 144.79 606.827Z"
              fill="var(--primary-dark)"
            />
            <path
              d="M214.529 153.078L180.409 137.921C164.798 130.986 157.219 112.47 163.488 96.5792L177.189 61.8492C183.458 45.9587 201.207 38.6942 216.818 45.6293L250.938 60.7867C266.549 67.7219 274.127 86.2377 267.859 102.128L254.158 136.858C247.893 152.758 230.153 160.019 214.529 153.078Z"
              fill="var(--primary-dark)"
            />
            <path
              d="M170.56 375.902L144.676 364.404C135.769 360.447 131.446 349.885 135.023 340.82L145.417 314.473C148.993 305.407 159.118 301.263 168.024 305.22L193.908 316.718C202.814 320.675 207.137 331.237 203.56 340.302L193.167 366.649C189.59 375.715 179.475 379.855 170.56 375.902Z"
              fill="var(--primary-dark)"
            />
            <path
              d="M117.561 275.598L109.186 271.878C104.86 269.956 102.759 264.823 104.496 260.419L107.859 251.894C109.596 247.49 114.517 245.476 118.843 247.398L127.218 251.118C131.545 253.04 133.646 258.173 131.909 262.577L128.546 271.102C126.808 275.506 121.897 277.517 117.561 275.598Z"
              fill="var(--primary-dark)"
            />
          </g>
        </svg>
      </div>
      <section className="content-inner overflow-hidden position-relative">
        <div className="container">
          <div className="section-head text-center">
            <h6 className="text wow fadeInUp" data-wow-delay="0.6s">
              Working Process
            </h6>
            <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
              How It Work
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
                  <h4 className="title">Register Your Account</h4>
                  <p className="text">
                    Create an account to submit, review, and access a world of
                    academic knowledge.
                    <br></br>
                    <br></br>
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
                    src="/assets/images/icon/forms.png"
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="icon-content">
                  <h4 className="title">Submit Thesis</h4>
                  <p className="text">
                    Share your research with the global academic community by
                    submitting your thesis.
                  </p>
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
                  <h4 className="title">Explore Theses</h4>
                  <p className="text">
                    Discover a rich collection of academic theses across various
                    fields and disciplines.
                    <br></br>
                    <br></br>
                  </p>
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
              Latest Thesis
            </h2>
          </div>
          <div className="row">
            {theses.latest.map((thesis) => (
              <ThesisCard
                key={thesis.thesis_id}
                author={thesis.author.name}
                authorProfile={thesis.author.profilePic}
                date={new Date(thesis.created_at).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
                title={thesis.title}
                desc={thesis.abstract.substring(0, 100) + '...'}
                img_src="/assets/images/blog/t2.png"
                thesis_id={thesis.thesis_id}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="content-inner position-relative">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
              Featured Thesis
            </h2>
          </div>
          <div className="row">
            {theses.featured.map((thesis) => (
              <ThesisCard
                key={thesis.thesis_id}
                author={thesis.author.name}
                authorProfile={thesis.author.profilePic}
                date={new Date(thesis.created_at).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
                title={thesis.title}
                desc={thesis.abstract.substring(0, 100) + '...'}
                img_src="/assets/images/blog/t5.png"
                thesis_id={thesis.thesis_id}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <section className="footer-action wow fadeInUp" data-wow-delay="1.0s">
          <div className="inner-content wow fadeInUp" data-wow-delay="1.2s">
            <div className="row justify-content-between align-items-center">
              <div className="text-center text-xl-start col-lg-7 m-lg-b20">
                <h2 className="title">
                  Let's Get Connected And Explore Thesis
                </h2>
              </div>
              <div className="text-center text-xl-end col-lg-5">
                <Link to="/auth/signin" className="btn btn-light btn-lg">
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
