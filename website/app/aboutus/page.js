'use client';
import CustomImage from '@/components/CustomImage';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-10 space-y-10'>
      <h1 className='text-2xl font-semibold '>
        Introduction
      </h1>
      <div className='grid lg:grid-cols-2 gap-6 items-center '>
        <div className='flex flex-col space-y-2 text-justify'>
          <p className='text-lg'>{`The Bardhaghat Chamber of Commerce & Industry (BCCI) is an autonomous, non-profit organization established in 2072 B.S to protect and promote the business community. Bardhaghat, a city rich in tourism infrastructure and commercial opportunities, benefits from the chamber's dedicated efforts.

            BCCI serves as a non-political, profit-excludable, and professional organization representing private commercial and industrial entities. It is affiliated with the Federation of Nepalese Chamber of Commerce and Industry (FNCCI), reflecting its commitment to the broader economic interests of the region. The chamber is actively engaged in initiatives to advance economic, social, health, and educational sectors within the district.`}</p>
        </div>
        <div>
          <CustomImage
            src={`cci_about.jpeg`}
            className="w-full"
          />
          {/* <Image src="/cci-image.jpeg" width={1000} height={1000} alt="" className='rounded-2xl' /> */}
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-semibold mb-4'>
          Objectives
        </h1>
        <p className='mb-6'>
          Since its inception, the Bardhaghat Chamber of Commerce & Industry (BCCI) has been dedicated to achieving the following objectives:
        </p>
        <ul className='space-y-4 list-disc list-inside bg-white p-6 rounded-2xl shadow-md'>
          <li>
            Safeguard and enhance the interests, rights, and privileges of businesses and industries.
          </li>
          <li>
            Strengthen the national economy by promoting local, national, and international trade.
          </li>
          <li>
            Advocate for the protection and advancement of the private sector within the district.
          </li>
          <li>
            Mediate in trade and industry-related issues and disputes.
          </li>
          <li>
            Submit, comment on, and recommend policy matters to relevant authorities and the central government.
          </li>
          <li>
            Organize meetings, training seminars, and workshops to enhance and expand professional knowledge in trade and industry.
          </li>
          <li>
            Host and participate in national and international trade fairs and exhibitions to promote business.
          </li>
          <li>
            Provide professional and technical information to business professionals and information seekers.
          </li>
          <li>
            Collaborate with national and international organizations to support the development of the private sector in the district.
          </li>
        </ul>

      </div>

      <div>
        <h1 className='text-2xl font-semibold mb-4'>
          Membership
        </h1>
        <p className='mb-6'>
          Individuals, firms, and companies involved in trade and industry activities in the district are eligible for membership. Membership is categorized into three groups: General, Associate, and Commodity associations, with further classifications into Trade and Industry. The members include local industries, business owners, retailers, wholesalers, dealers, agencies, hoteliers, and commodity associations from Bardhaghatnagar and the surrounding areas.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Required Documents for Membership</h1>
          <ul className="space-y-4 list-disc list-inside">
            <li>Completed application form</li>
            <li>Three passport-size photographs</li>
            <li>Copy of citizenship card</li>
            <li>Copy of PAN number registration certificate</li>
            <li>
              Copy of registration certificates:
              <ul className="list-inside list-circle ml-6 mt-2">
                <li>Commerce office</li>
                <li>Industry department</li>
                <li>Company registration</li>
              </ul>
            </li>
            <li>DAO registration certificate (for commodity associations)</li>
            <li>Rights and privileges of the membership</li>
          </ul>
        </div>


      </div>

      <div>
        <div>
          <h1 className="text-3xl font-bold mb-6">Organization Structure</h1>
          <p>The general assembly is the supreme body of the chamber, responsible for formulating policy and strategy. It elects the president and executive members for a two-year term.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">

          <p>The executive board consists of 33 officials, including the immediate past president and three nominated members. Key positions on the board include:</p>

          <div className="mb-6">
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>President</li>
              <li>Immediate Past President</li>
              <li>Senior Vice President</li>
              <li>Three Vice Presidents (Industry and Commerce Sectors)</li>
              <li>General Secretary</li>
              <li>Treasurer</li>
              <li>Secretary</li>
              <li>Co-Treasurer</li>
              <li>Twenty Executive Members (Commerce, Industry, and Associate Sectors)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=''>
        <h2 className="text-2xl font-semibold mb-4">Sub-Committees</h2>
        <p className="mb-4">The following sub-committees are constituted to aid and advise the chamber and the board:</p>
        <div className='p-8 rounded-lg shadow-md'>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Industry and Activity Monitoring Sub-Committee</li>
            <li>American Corner Library Committee</li>
            <li>Major Industry and Export Promotion and International Coordination Sub-Committee</li>
            <li>Cottage, Small and Medium Industries Promotion Sub-Committee</li>
            <li>Tax and Revenue Coordination Sub-Committee</li>
            <li>Secretariat, Communications, Training, Seminars, and Customs Facilitation Sub-Committee (PPPP)</li>
            <li>Economic Growth and Fund Mobilization Sub-Committee</li>
            <li>Publicity and Local Level Coordination Sub-Committee</li>
            <li>Ready-made Cloth, Furnishing, and Cloth Market Management Sub-Committee</li>
            <li>Subject-wise Organizations Coordination Sub-Committee</li>
            <li>Electricity and Energy Coordination Sub-Committee</li>
            <li>Employers and Labor Management Sub-Committee</li>
            <li>Agricultural Promotion Sub-Committee</li>
            <li>Women Entrepreneurship and Skill Development Sub-Committee</li>
            <li>Market and Business Expansion Studies Sub-Committee</li>
            <li>Exhibition and Trade Fair Promotions Sub-Committee</li>
            <li>Publications, IT, and Technology Development Sub-Committee</li>
            <li>Banks, Financial Institutions, and Insurance Sub-Committee</li>
            <li>Education and Sports Management Sub-Committee</li>
            <li>Rural Member Enhancement and Rural Business Promotion Sub-Committee</li>
            <li>Livestock Business Development Coordination Sub-Committee</li>
            <li>Food Entrepreneurs and Market Management Sub-Committee</li>
            <li>Health, Environment, and Sanitation Management Sub-Committee</li>
            <li>Construction Material Market Management Sub-Committee</li>
            <li>Public Relations Sub-Committee</li>
            <li>Electric, Electronic, and Mobile Market Management Sub-Committee</li>
            <li>Membership Growth Coordination Sub-Committee</li>
            <li>Automobile Business Management Sub-Committee</li>
            <li>Galla Food, Grocery, and Market Management Sub-Committee</li>
            <li>Market Monitoring and Facilitation Sub-Committee</li>
            <li>Tourism Business Promotion Sub-Committee</li>
            <li>Transportation and Traffic Management Sub-Committee</li>
          </ul>
        </div>
      </div>




    </div>
  );
};

export default page;