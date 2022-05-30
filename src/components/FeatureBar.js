import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeatureBar = ({ data }) => {
  const processedData = data.map((v) => {
    var tempData = v;
    var image = getImage(v.image) || v.image;
    tempData.image = image;
    return tempData;
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 relative flex-grow max-w-7xl">
      {processedData.map((val, indx) => {
        return (
          <section className="relative">
            <div className="absolute w-[256px] text-white h-[256px] bg-primarydark-100 bg-opacity-60 grid justify-center z-40 top-0 left-0 bottom-0 right-0 mx-auto">
            <h3 className=" font-montserrat text-white my-auto text-2xl font-bold">{val.title}</h3>

            </div>
            <GatsbyImage
              image={val.image}
              objectFit={"cover"}
              // objectPosition={imgPosition}
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                maxHeight: 256,
                maxWidth: 256,
              }}
              // You can optionally force an aspect ratio for the generated image
              aspectratio={1 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
              className='mx-auto min-h-[256px] min-w-[256px]'
            />
            <span className="grid w-11/12 mx-auto font-montserrat p-4 text-lg">
            {val.description}

                </span>
          </section>
        );
      })}
      <div></div>
      {/* <GatsbyImage
    image={heroImage}
    objectFit={"cover"}
    // objectPosition={imgPosition}
    style={{
      gridArea: "1/1",
      // You can set a maximum height for the image, if you wish.
      maxHeight:256,
      maxWidth:256
    }}
    // You can optionally force an aspect ratio for the generated image
    aspectratio={1 / 1}
    // This is a presentational image, so the alt should be an empty string
    alt=""
    formats={["auto", "webp", "avif"]}
  /> */}
    </div>
  );
};

export default FeatureBar;
