'use client';
import { getAllEvents } from "@/redux/slices/eventSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";



const Events = () => {

  const { loading, events } = useSelector(state => state.event);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [])

  const renderEvents = events?.map((event) => {
    return (
      <Link href={`/event/${event.id}`} key={event.id} className='flex flex-col bg-primary bg-opacity-5 w-full  py-2 mt-4 px-3 rounded-lg space-y-2'>
        <p>{event.title}</p>
        <div className="flex flex-row items-center space-x-2">
          <CiCalendarDate size={20} className="text-background" />
          <p className="text-sm">
            {new Date(event.event_date).toISOString().split('T')[0]}
          </p>
        </div>
      </Link>
    );
  })

  return (
    <div className="flex flex-col">
      <h1 className="bg-primary w-fit px-3 py-1.5 text-lg font-semibold tracking-wide text-white">Events</h1>
      <div className="h-[2px] w-11/12 bg-primary"></div>
      {loading && <div className="loader ">Loading...</div>}
      {!loading && events.length == 0 &&
        <p className="text-lg py-4 px-2">Events not available.</p>}
      {renderEvents}
    </div>
  );
};

export default Events;
