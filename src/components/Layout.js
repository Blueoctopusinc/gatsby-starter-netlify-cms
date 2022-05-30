import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const highlightedSpanStyle = 'text-primarylight-100 font-bold'

const TemplateWrapper = ({ children, navbarData, currentRoute }) => {
  const { title, description } = useSiteMetadata();
  console.log(navbarData);
  return (
    <div className=" max-w-screen ">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div className="w-full bg-primarydark-100 flex py-2">
        <strong className="mx-auto text-gray-50 text-base md:text-lg font-medium text-center px-4 font-montserrat">NEED A <span className={highlightedSpanStyle}>RELIABLE PLUMBER</span> IN <span className={highlightedSpanStyle}>NOTTINGHAM</span>? CALL <span className={highlightedSpanStyle}>0115 978 3273</span> TO ARRANGE A <span className={highlightedSpanStyle}>NO FEE CALL-OUT</span></strong>
      </div>
      <Navbar currentRoute={currentRoute} openingTimes={navbarData.frontmatter.openingTimes} openingDates={navbarData.frontmatter.openingDates} address={navbarData.frontmatter.address}/>
      <div>{children}</div>
      <Footer />
    </div>
  );
};




export default TemplateWrapper;
