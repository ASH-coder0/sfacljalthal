"use client";
import Link from "next/link";
import { MdEmail, MdFacebook } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import CustomImage from "./CustomImage";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between px-2 md:px-8 lg:px-20 py-2">
        <div className="flex flex-wrap items-center">
          <div className="h-20 w-20">
            {/* <Image
              src='/assets/jalthal.png'
              width={200}
              height={200}
              alt='logo'
              layout='responsive'
            /> */}
            <CustomImage src="/assets/jalthal.png" className="w-full" />
            {/* <CustomImage src="/assets/jalthal.png" className="w-full" /> */}
          </div>
          <p className="md:flex  px-2 text-xl font-medium text-primary tracking-tight hidden">
            साना किसान कृषि सहकारी संस्था लि. जलथल
          </p>
          <span className="block md:hidden px-2 text-2xl font-medium text-primary tracking-tight">
            Jalthal
          </span>
          <button
            for="login"
            className="block md:hidden px-2 text-2xl font-medium text-primary tracking-tight"
          >
            Login
          </button>
        </div>
        {/* <div className='flex flex-row items-center'>
          {Date()}
        </div> */}
      </div>
      <div className="flex flex-row justify-between bg-background px-2 md:px-8 xl:px-20 py-2 text-white font-normal  lg:text-xl">
        <RxHamburgerMenu size={28} className="block md:hidden" />
        <div className="hidden md:block space-x-10">
          {navLinks?.map((nav) => {
            return (
              <Link
                key={nav.labelEng}
                href={nav.href}
                className="font-medium  "
              >
                {nav.labelEng}
              </Link>
            );
          })}
        </div>
        <div className="flex space-x-3">
          <Link href="mailto:bardaghatcci@gmail.com">
            <MdEmail size={28} />
          </Link>
          <Link href="https://www.facebook.com/barcci2074" target="_blank">
            <MdFacebook size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const navLinks = [
  {
    labelNp: "गृह पृष्ठ",
    labelEng: "Home",
    href: "/",
  },
  {
    labelNp: "हाम्रो बारेमा",
    labelEng: "About us",
    href: "/aboutus",
  },

  {
    labelNp: "सदस्यहरु",
    labelEng: "Our Members",
    href: "/members",
  },

  {
    labelNp: "ग्यालेरी",
    labelEng: "Gallery",
    href: "/gallery",
  },
  {
    labelNp: "सूचना पाटी",
    labelEng: "notice board",
    href: "/notice",
  },
  {
    labelNp: "वित्तीय",
    labelEng: "Financial",
    href: "/financial",
  },
  {
    labelNp: "सम्पर्क",
    labelEng: "Contact us",
    href: "/contact",
  },
];
