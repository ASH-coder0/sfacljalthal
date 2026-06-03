"use client";

import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdFacebook } from "react-icons/md";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import CustomImage from "./CustomImage";

const Footer = () => {
  return (
    <div className=" text-secondary">
      <div className=" bg-background  py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="py-2 pl-2 md:pl-8 lg:pl-20 flex items-center h-fit">
          <div className="flex items-center h-32 w-32">
            {/* <Image
              src='/assets/bardhaghatcci.png'
              width={50}
              height={50}
              alt='logo'
              layout='responsive'
              className="bg-white rounded-full"
            /> */}
            <CustomImage src="/assets/jalthal.png" className="w-full" />
          </div>
          <p className="flex px-2 text-xl font-medium text-white tracking-tight  ">
            साना किसान कृषि सहकारी <br />
            संस्था लि. जलथल
          </p>
          {/* <span className='block md:hidden px-2 text-2xl font-medium text-primary tracking-tight'>BICCI</span> */}
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl text-white font-medium mb-2">Contact Us</h1>
          <div className="flex flex-row gap-2 items-center">
            <IoLocationOutline size={18} color="white" />
            <span className="text-white text-sm">हल्दीबारी–२, झापा, नेपाल</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoPhonePortraitOutline size={18} color="white" />
            <span className="text-white text-sm">
              +9779857082129 / 078 590129
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <MdEmail size={18} color="white" />
            <span className="text-white text-sm">bardaghatcci@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl text-white font-medium mb-2 ">Follow Us</h1>
          <div className="flex flex-row space-x-4">
            <Link href="https://www.facebook.com/barcci2074" target="_blank">
              <MdFacebook size={24} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center bg-background py-4">
        <p className="text-white text-lg">
          © 2023.sfacljalthal. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
