'use client';

import { getAllNotice } from "@/redux/slices/noticeSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";



const NoticeBoard = () => {

  const { notices, loading } = useSelector(state => state.notice)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotice());
  }, [])

  const renderNotices = notices.length > 0 ? notices.map((notice) => {
    return (
      <Link href={`/notice/${notice.id}`} key={notice.id} className='flex flex-col bg-primary bg-opacity-5 w-full  py-2 mt-4 px-3 rounded-lg space-y-2'>
        <p>{notice.title}</p>
        <div className="flex flex-row items-center space-x-2">
          <CiCalendarDate size={20} className="text-background" />
          <p className="text-sm">
            {new Date(notice.publishDate).toISOString().split('T')[0]}
          </p>
        </div>
      </Link>
    );
  }) : <p className="text-lg py-4 px-2">No notice and Announcement available.</p>;

  return (
    <div className="flex flex-col">
      <h1 className="bg-primary w-fit px-3 py-1.5 text-lg font-semibold tracking-wide text-white">Notice & Announcement</h1>
      <div className="h-[2px] w-11/12 bg-primary"></div>
      {loading ? <div className="loader ">Loading...</div>
        : renderNotices}
    </div>
  );
};

export default NoticeBoard;
