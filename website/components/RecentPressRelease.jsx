'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import { CiCalendarDate } from 'react-icons/ci';
import Link from 'next/link';

const pressReleaseData = [
  {
    id: 1,
    title: "एसईईको नतिजा आज प्रकाशन",
    author: "Tribikram Sen",
    publishedDate: "2023-01-01",
  },
  {
    id: 2,
    title: "एसईईको नतिजा आज प्रकाशन",
    author: "Tribikram Sen",
    publishedDate: "2023-01-01",
  },
  {
    id: 3,
    title: "एसईईको नतिजा आज प्रकाशन",
    author: "Tribikram Sen",
    publishedDate: "2023-01-01",
  },
];

const RecentPressRelease = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // Simulating a delay for loading
    return () => clearTimeout(timer);
  }, []);

  const renderNews = pressReleaseData.length > 0 ? pressReleaseData.map((data) => (
    <Link href={`/pressrelease/${data.id} ${data.title}`} key={data.id} className="mt-4 gap-2 bg-white cursor-pointer">
      <div className="relative group overflow-hidden h-44">
        <div className="flex border border-slate-200 h-full">
          <Image
            src="/assets/bardhaghatcci.png"
            alt={data.title}
            width={1000}
            height={1000}
            className="object-contain p-px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary opacity-[5%] z-20 group-hover:opacity-0 transition-all ease-in duration-500"></div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-normal flex-col gap-2 p-2">
        <h2 className="text-lg font-semibold text-gray-700 line-clamp-1">{data.title}</h2>
        <div className="flex flex-wrap items-center space-x-2">
          <AiOutlineUser size={16} className="text-primary" />
          <p className="text-xs">{data.author}</p>
          <div className="flex flex-wrap items-center space-x-2">
            <CiCalendarDate size={16} className="text-background" />
            <p className="text-xs">{data.publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )) : <p className='text-lg p-6'>Data not available for press release.</p>;


  return (
    <div className="flex flex-col">
      <h1 className="bg-primary w-fit px-3 py-1.5 text-lg font-semibold tracking-wide text-white">Recent Press Release</h1>
      <div className="h-[2px] w-11/12 bg-primary"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 xl:flex xl:flex-col">
        {loading ? <div className="loader ">Loading...</div> : renderNews}
      </div>
    </div>
  );
};

export default RecentPressRelease;
