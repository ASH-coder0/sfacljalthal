"use client";
import CustomImage from "./CustomImage";

const Banner = () => {
  return (
    <div className="w-full h-auto">
      {/* <Image
        src='/banner.jpeg'
        width={500}
        height={500}
        alt='bardhaghat-cci'
        className="w-full"
        quality={100}
        layout="responsive"

      /> */}
      <CustomImage src={`banner.jpeg`} className="w-full" />
    </div>
  );
};

export default Banner;
