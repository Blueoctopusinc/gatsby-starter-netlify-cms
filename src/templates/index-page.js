import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import FeatureBar from "../components/FeatureBar";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  feature,
  center,
  centerImage,
}) => {
  const heroImage = getImage(image) || image;
  const imageCenter = getImage(centerImage) || centerImage;
  const featureData = [
    feature.image1,
    feature.image2,
    feature.image3,
    feature.image4,
  ];
  return (
    <div>
      <FullWidthImage
        height={700}
        img={heroImage}
        variant="right"
        cta_button="PRESS ME"
        title={title}
        subheading={subheading}
      />
      <section className="m-6">
        <div className=" flex justify-center lg:max-w-8xl">
          <FeatureBar data={featureData} />
        </div>
      </section>
      <div className="w-full border-b-primarylight-100 border-l-0 border-r-0 border-t-primarylight-100 border-[20px]">
        <GatsbyImage
          image={imageCenter}
          objectFit={"cover"}
          objectPosition={"middle middle"}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data, location }) => {
  const currentRoute = location.pathname ? location.pathname : "";
  const index_page_data = data.index_page_data;
  const navbar_data = data.navbar_data;
  console.log(data);
  console.log(index_page_data);
  return (
    <Layout navbarData={navbar_data} currentRoute={currentRoute}>
      <IndexPageTemplate
        image={index_page_data.frontmatter.image}
        title={index_page_data.frontmatter.title}
        heading={index_page_data.frontmatter.heading}
        subheading={index_page_data.frontmatter.subheading}
        mainpitch={index_page_data.frontmatter.mainpitch}
        description={index_page_data.frontmatter.description}
        intro={index_page_data.frontmatter.intro}
        feature={index_page_data.frontmatter.feature}
        center={index_page_data.frontmatter.center}
        centerimage={index_page_data.frontmatter.center.backgroundimage}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index_page_data: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        feature {
          image1 {
            title
            description
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: FIXED)
              }
            }
          }
          image2 {
            title
            description
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: FIXED)
              }
            }
          }
          image3 {
            title
            description
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: FIXED)
              }
            }
          }
          image4 {
            title
            description
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 60, layout: FIXED)
              }
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        center {
          description
          blurbs {
            text
          }
          heading
        }
      }
    }
    navbar_data: markdownRemark(
      frontmatter: { templateKey: { eq: "navbar" } }
    ) {
      frontmatter {
        openingTimes
        openingDates
        address {
          address_line_1
          address_line_2
          address_line_3
        }
      }
    }
  }
`;
