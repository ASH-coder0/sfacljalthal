'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import { CiCalendarDate } from 'react-icons/ci';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPressRelease } from '@/redux/slices/pressReleaseSlice';
import CustomImage from './CustomImage';


const PressRelease = () => {

  const dispatch = useDispatch();

  const { pressReleases, loading } = useSelector(state => state.pressRelease);

  useEffect(() => {

    dispatch(getAllPressRelease());
  }, []);


  const renderNews = pressReleases.length > 0 ? pressReleases.map((data) => (
    <Link href={`/pressrelease/${data.id}`} key={data.id} className="flex flex-col mt-4 gap-2 bg-white cursor-pointer">
      <div className="relative group overflow-hidden h-72">
        <div className="flex border border-slate-200 h-full">
          <CustomImage
            src={data.featuredImage}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary opacity-[5%] z-20 group-hover:opacity-0 transition-all ease-in duration-500"></div>
      </div>
      <div className="flex justify-center lg:justify-normal flex-col gap-2 p-2">
        <h2 className="text-lg font-semibold text-gray-700 line-clamp-1">{data.title}</h2>
        <div className="flex flex-wrap items-center space-x-2">
          <AiOutlineUser size={16} className="text-primary" />
          <p className="text-xs">{data.author}</p>
          <div className="flex flex-wrap items-center space-x-2">
            <CiCalendarDate size={16} className="text-background" />
            <p className="text-xs">{data.publishDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )) : !loading && <p className='text-lg p-6'>Data not available for press release.</p>;


  return (
    <div className="flex flex-col">
      <h1 className="bg-primary w-fit px-3 py-1.5 text-lg font-semibold tracking-wide text-white">Press Release</h1>
      <div className="h-[2px] w-11/12 bg-primary"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {loading ? <div className="loader ">Loading...</div> : renderNews}
      </div>
    </div>
  );
};

export default PressRelease;
