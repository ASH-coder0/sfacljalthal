"use client";

import { base_url } from "@/constant";
import Image from "next/image";
import React from "react";

const CustomImage = ({ src, alt, className }) => {
  const imageSrc = src.startsWith("/") ? src : `${base_url}/api/${src}`;

  return (
    <Image
      src={imageSrc}
      width={1920}
      height={600}
      alt={alt || "."}
      priority
      quality={100}
      className={className}
    />
  );
};

export default CustomImage;
