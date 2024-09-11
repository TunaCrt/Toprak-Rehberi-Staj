import { Link } from "react-router-dom";
import WelcomeNavbar from "../component/WelcomeNavbar";

const Home = () => {
  return (
    <>
      <WelcomeNavbar/>
      <div>
        <main className="main" id="top">
          <section className="py-0" id="header">
            <div
              className="bg-holder d-none d-md-block"
              style={{
                backgroundImage:
                  "url(assets/img/illustrations/hero-header.png),url(assets/img/illustrations/bg.png) ",
                backgroundPosition: "right top, top left",
                backgroundSize: "contain",
              }}
            ></div>

            <div
              className="bg-holder d-md-none"
              style={{
                backgroundImage: "url(assets/img/illustrations/hero-bg.png)",
              }}
            ></div>

            <div className="container">
              <div className="row align-items-center min-vh-75 min-vh-lg-100">
                <div className="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
                  <h1 className="mt-6 mb-sm-4 fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                    Tarıma Yatırım Yapmanın Yeni Bir Yolu{" "}
                  </h1>
                  <p className="mb-4 fs-1">
                    Toprak Rehberi, çiftçilere, çiftlik sahiplerine, özel
                    ormancılara ve tarım üreticilerine çevrimiçi self servis
                    uygulamaları ve eğitim materyalleri sağlıyor.
                  </p>
                  <Link to={"/home"} className="btn btn-lg btn-success">
                    Bize Katıl{" "}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-0" id="nasılCalisir">
            <div
              className="bg-holder"
              style={{
                backgroundImage:
                  "url(assets/img/illustrations/how-it-works.png)",
                backgroundPosition: "center bottom",
                backgroundsize: "cover",
              }}
            ></div>

            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
                  <h5 className="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">
                    Nasıl Çalışır ?
                  </h5>
                  <p className="mb-5 text-white">
                    Tedarik zincirinden dilediğinizi seçin ve yalnızca Toprak Rehberi
                    tarafından değil, aynı zamanda en iyi arazi, aile mirası,
                    yenilikçilik ve genel olarak üstün uzmanlık tarafından
                    desteklenen tarımsal işletme projelerine katılın.
                  </p>
                </div>
                <div className="col-sm-9 col-md-12 col-xxl-9">
                  <div className="theme-tab">
                    <ul className="nav justify-content-between">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active fw-semi-bold"
                          href="#bootstrap-tab1"
                          data-bs-toggle="tab"
                          data-bs-target="#tab1"
                          id="tab-1"
                        >
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">01</span>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link fw-semi-bold"
                          href="#bootstrap-tab2"
                          data-bs-toggle="tab"
                          data-bs-target="#tab2"
                          id="tab-2"
                        >
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">02</span>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link fw-semi-bold"
                          href="#bootstrap-tab3"
                          data-bs-toggle="tab"
                          data-bs-target="#tab3"
                          id="tab-3"
                        >
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">03</span>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link fw-semi-bold"
                          href="#bootstrap-tab4"
                          data-bs-toggle="tab"
                          data-bs-target="#tab4"
                          id="tab-4"
                        >
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">04</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tab1"
                        role="tabpanel"
                        aria-labelledby="tab-1"
                      >
                        <div className="row align-items-center my-6 mx-auto">
                          <div className="col-md-6 col-lg-5 offset-md-1">
                            <h3 className="fw-bold lh-base text-white">
                              Select your farmshare and complete reservation
                              form here.
                            </h3>
                          </div>
                          <div className="col-md-5 text-white offset-lg-1">
                            <p className="mb-0">
                              Et harum quidem rerum facilis est et expedita
                              distinctio. Nam libero tempore, cum soluta nobis
                              est eligendi optio cumque nihil impedit quo minus
                              id quod maxime placeat facere
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab2"
                        role="tabpanel"
                        aria-labelledby="tab-2"
                      >
                        <div className="row align-items-center my-6 mx-auto">
                          <div className="col-md-6 col-lg-5 offset-md-1">
                            <h3 className="fw-bold lh-base text-white">
                              The Farm Share has been one of the best new
                              additions to our life
                            </h3>
                          </div>
                          <div className="col-md-5 text-white offset-lg-1">
                            <p className="mb-0">
                              We the farmers choose the vegetables in your share
                              each week. A Farm Share is perfect for those who
                              love the weekly surprise, and who look forward to
                              cooking with inspiration from the seasons.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab3"
                        role="tabpanel"
                        aria-labelledby="tab-3"
                      >
                        <div className="row align-items-center my-6 mx-auto">
                          <div className="col-md-6 col-lg-5 offset-md-1">
                            <h3 className="fw-bold lh-base text-white">
                              There is so much love and thought put into this
                              CSA. You can feel that.
                            </h3>
                          </div>
                          <div className="col-md-5 text-white offset-lg-1">
                            <p className="mb-0">
                              We the farmers choose the vegetables in your share
                              each week. A Farm Share is perfect for those who
                              love the weekly surprise, and who look forward to
                              cooking with inspiration from the seasons.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab4"
                        role="tabpanel"
                        aria-labelledby="tab-4"
                      >
                        <div className="row align-items-center my-6 mx-auto">
                          <div className="col-md-6 col-lg-5 offset-md-1">
                            <h3 className="fw-bold lh-base text-white">
                              The Farm Share has been one of the best new
                              additions to our life
                            </h3>
                          </div>
                          <div className="col-md-5 text-white offset-lg-1">
                            <p className="mb-0">
                              We the farmers choose the vegetables in your share
                              each week. A Farm Share is perfect for those who
                              love the weekly surprise, and who look forward to
                              cooking with inspiration from the seasons.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-0" id="contact">
            <div
              className="bg-holder"
              style={{
                backgroundImage: "url(assets/img/illustrations/footer-bg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="container">
              <div
                className="row justify-content-lg-between min-vh-75"
                style={{ paddingTop: "21rem" }}
              >
                <div className="col-6 col-sm-4 col-lg-auto mb-3">
                  <h6 className="mb-3 text-1000 fw-semi-bold">COMPANY </h6>
                  <ul className="list-unstyled mb-md-4 mb-lg-0">
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        About Us
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Team
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Careers
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-4 col-lg-auto mb-3">
                  <h6 className="mb-3 text-1000 fw-semi-bold">INVEST </h6>
                  <ul className="list-unstyled mb-md-4 mb-lg-0">
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Features
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        How it works
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Pricing
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-4 col-lg-auto mb-3">
                  <h6 className="mb-3 text-1000 fw-semi-bold">LEGAL </h6>
                  <ul className="list-unstyled mb-md-4 mb-lg-0">
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Privacy
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Terms
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-700 text-decoration-none" href="#!">
                        Security
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-auto mb-3">
                  <div className="card bg-success">
                    <div className="card-body p-sm-4">
                      <h5 className="text-white">Blog</h5>
                      <p className="mb-0 text-white">
                        Bize Mail Atın{" "}
                        <span className="text-white fs--1 fs-sm-1">
                          tarim@mail.com
                        </span>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <hr className="text-300 mb-0" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
