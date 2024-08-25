import Image from "next/image";
import Head from "next/head";
import React from "react";
import Script from "next/script";

import "./css/bootstrap.min.css";
import "./css/aos.css";
import "./css/owl.theme.default.min.css";
import "./css/jquery.fancybox.min.css";
import "./fonts/icomoon/style.css";
import "./fonts/flaticon/font/flaticon.css";
import "./css/style.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Transcripto | Modify, Generate, Succed</title>
      </Head>
      <body
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="100"
      >
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <nav className="site-nav dark js-site-navbar mb-5 site-navbar-target">
          <div className="container">
            <div className="site-navigation">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={150}
                className="logo m-1 float-left"
              />
              <ul className="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
                <li className="cta-button-outline">
                  <a href="/sign-in">Sign in</a>
                </li>
                <li className="cta-primary">
                  <a href="/sign-up">Sign-up</a>
                </li>
              </ul>
              <a
                href="#"
                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span />
              </a>
            </div>
          </div>
        </nav>
        <div className="untree_co-hero pb-0" id="home-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="dots" />
                <div className="row justify-content-center">
                  <div className="col-md-7 text-center mb-5">
                    <h1
                      className="heading"
                      data-aos="fade-up"
                      data-aos-delay={0}
                    >
                      Manage your sales transcripts with a click
                      <span className="d-block">
                        using <a href="/">Transcripto</a>
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="intro">
                      <div
                        className="excerpt"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <h2 className="font-weight-bold">
                          Revolutionize your
                          <br />
                          sales communication
                        </h2>
                        <p>
                          Welcome to Transcripto, your go-to tool for enhancing
                          sales call transcripts. Easily add, edit, and delete
                          comments on specific parts of transcripts, attach
                          files, and let our AI-powered summary feature provide
                          concise overviews of your conversations. Streamline
                          your sales communications with Transcripto—designed
                          for clarity and efficiency.
                        </p>
                      </div>
                      {/* /.excerpt */}
                      <p data-aos="fade-up" data-aos-delay={200}>
                        <a
                          href="/sign-up"
                          className="btn btn-primary smoothscroll mr-1"
                        >
                          Get Started
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* /.col-lg-5 */}
                  <div className="col-lg-8">
                    <div className="illustration">
                      <Image
                        src="images/graphs-statistics_outline.svg"
                        alt="Image"
                        className="img-fluid"
                        width={730}
                        height={351}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          {/* <div class="illustration">

    </div> */}
        </div>
        {/* /.untree_co-hero */}
        <div className="untree_co-section">
          <div className="container">
            <div className="row mb-5">
              <div
                className="col-12 text-center"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <span className="caption">Features</span>
                <h2 className="heading">Why Transcripto ?</h2>
                <p>Advantages of using our app</p>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icon color-1 mb-4">
                    <svg
                      className="bi bi-app-indicator"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                      />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </div>
                  {/* /.icon */}
                  <div className="service-contents">
                    <h3>Comment Management</h3>
                    <p>
                      Add, edit, and delete comments on specific transcript
                      sections to keep feedback organized and actionable.
                    </p>
                  </div>
                  {/* /.service-contents*/}
                </div>
                {/* /.service */}
              </div>
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icon color-2 mb-4">
                    <svg
                      className="bi bi-arrow-repeat"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                      />
                    </svg>
                  </div>
                  {/* /.icon */}
                  <div className="service-contents">
                    <h3>File Attachement</h3>
                    <p>
                      Attach relevant files directly to comments, ensuring all
                      necessary resources are easily accessible within the
                      transcript
                    </p>
                  </div>
                  {/* /.service-contents*/}
                </div>
                {/* /.service */}
              </div>
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icon color-3 mb-4">
                    <svg
                      className="bi bi-briefcase"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                      />
                    </svg>
                  </div>
                  {/* /.icon */}
                  <div className="service-contents">
                    <h3>AI-Powered summaries</h3>
                    <p>
                      Generate concise overviews of entire transcripts and their
                      comments with LLMs, saving time on manual review.
                    </p>
                  </div>
                  {/* /.service-contents*/}
                </div>
                {/* /.service */}
              </div>
              <div
                className="col-lg-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service horizontal d-flex">
                  <div className="service-icon color-4 mb-4">
                    <svg
                      className="bi bi-collection"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                      />
                    </svg>
                  </div>
                  {/* /.icon */}
                  <div className="service-contents">
                    <h3>User Friendly interface</h3>
                    <p>
                      Navigate and manage transcripts effortlessly with a clean,
                      intuitive design tailored for sales teams.
                    </p>
                  </div>
                  {/* /.service-contents*/}
                </div>
                {/* /.service */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.untree_co-section */}
        <div className="untree_co-section" id="features-section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <span className="caption" data-aos="fade-up" data-aos-delay={0}>
                  Digital Services
                </span>
                <h3
                  className="heading mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  A complete solution for sales team.
                </h3>
                <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <p>
                    Explore the realm of comfort reducing significantly the time
                    of collaboration on the sales transcripts
                  </p>
                  <ul className="list-unstyled ul-check primary">
                    <li>Hassle-free use</li>
                    <li>All-in-one solution</li>
                  </ul>
                </div>
                {/* /.mb-4 */}
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
                <a href="demo link" className="btn-video" data-fancybox="">
                  <span className="wrap-icon-play">
                    <svg
                      className="bi bi-play-fill"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </span>
                  <Image
                    src="/images/dashboard.jpg"
                    alt="Image"
                    className="img-fluid img-shadow"
                    width={630}
                    height={488}
                  />
                </a>
              </div>
              {/* /.col-md-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.untree_co-section */}
        <div className="site-footer">
          <div className="footer-dots" /> {/* /.footer-dots */}
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget">
                  <h3>Quick Contact</h3>
                  <ul className="list-unstyled links mb-4">
                    <li>
                      <a>+212 617799137</a>
                    </li>
                    <li>
                      <a href="mailto:Aya.HOUSSAINI@um6p.ma">
                        Aya.HOUSSAINI@um6p.ma
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.widget */}
              </div>
              {/* /.col-lg-3 */}
            </div>
            {/* /.row */}
            <div className="row mt-5">
              <div className="col-12 text-center">
                <p className="copyright">
                  Copyright ©2024. All Rights Reserved. — Designed with love by
                  Tech Titans
                  {/* License information: https://untree.co/license/ */}
                </p>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </body>
      <Script src="/js/jquery-3.4.1.min.js"></Script>
      <Script src="/js/jquery-migrate-3.0.1.min.js"></Script>
      <Script src="/js/popper.min.js"></Script>
      <Script src="/js/bootstrap.min.js"></Script>
      <Script src="/js/owl.carousel.min.js"></Script>
      <Script src="/js/jquery.easing.1.3.js"></Script>
      <Script src="/js/jquery.animateNumber.min.js"></Script>
      <Script src="/js/jquery.waypoints.min.js"></Script>
      <Script src="/js/jquery.fancybox.min.js"></Script>
      <Script src="/js/aos.js"></Script>
      <Script src="/js/custom.js"></Script>
    </>
  );
}
