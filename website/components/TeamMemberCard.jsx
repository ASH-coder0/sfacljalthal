'use client';

import Image from 'next/image';
import React from 'react';
import CustomImage from './CustomImage';

export const teamMemberType = {
  EXECUTIVE: "executive",
  PAST_PRESIDENT: "pastPresidents",
  STAFF: "staff"
};

const RenderField = ({ cardType, props }) => {
  switch (cardType) {
    case (teamMemberType.EXECUTIVE):
      return (
        <div className='flex flex-col font-medium text-sm md:text-lg'>
          <p>{props.designation}</p>
          <p className='text-sm'>{props.contact}</p>
          <p className='text-sm'>{props.email}</p>
        </div>
      );
    case (teamMemberType.PAST_PRESIDENT):
      return (
        <div className='flex flex-col font-medium text-sm md:text-lg'>
          <p>{props.workingPeriod}</p>
        </div>
      );
    case (teamMemberType.STAFF):
      return (
        <div className='flex flex-col font-medium text-sm md:text-lg'>
          <p>{props.designation}</p>
          {/* <p>{props.phone}</p> */}
          {/* <p>{props.email}</p> */}
        </div>
      );
    default:
      return null;
  }
};

const TeamMemberCard = ({ cardType, props }) => {

  const { feature_image, name } = props;


  return (
    <div className='flex flex-col border p-4 text-center items-center justify-center gap-y-10'>
      <div className='w-[150px] h-[150px] pb-4'>
        {/* <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className=' rounded-full delay-200 hover:scale-105'
          // layout='responsive'
          loading='lazy'
        /> */}
        <CustomImage
          src={`${feature_image}`}
          className=" h-40 w-40 object-fill rounded-md bg-white"
        />
      </div>
      <div>
        <p className=' text-lg md:text-xl font-semibold'>{name}</p>
        <RenderField cardType={cardType} props={props} />
      </div>
    </div>
  );
};

export default TeamMemberCard;
