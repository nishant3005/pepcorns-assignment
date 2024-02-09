import React from 'react';
import { tagItems } from '../constants/tagItems';
import TagItem from '../components/ui/TagItem/TagItem';
import Carousel from '../components/carousel/Carousel';

const LandingPageScreen = () => {
  return (
    <div className="">
      {/* Hero section */}
      <section className="mx-32 px-8 pt-20 pb-12">
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <div>logo</div>
              <div className="text-[50px] font-bold">Supersapiens</div>
            </div>
            <div className="text-[#777] text-xl">
              Glucose: The Cornerstone of Metabolic Health
            </div>
            <div className="flex">
              {tagItems.map((item) => (
                <TagItem key="" item={item} />
              ))}
            </div>
          </div>
          <div>2</div>
        </div>
        <div className="flex justify-between">
          <div>
            <Carousel />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="mb-5">
              <div className="text-[35px] font-black mb-2 mt-6">$304,857</div>
              <div className="text-[#777] font-normal text-lg">
                30% raised of $1M funding goal
              </div>
              <div className="h-[8px] rounded-[4px] bg-[#eee] mt-2 relative">
                <div className="h-[8px] bg-[#0D941C] w-1/3 absolute top-0 left-0"></div>
                <div className="h-[8px] bg-[#19c157] w-1/4 absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#f7f7f7] rounded-[4px] p-3 text-[#777] mb-6 text-[18px]">
              <div>logo</div>
              <div className="text-[12px] text-black font-normal">
                The funds will be used for R&D, sales and marketing and
                application development to launch the Dia... View more
              </div>
            </div>
            <div className="mb-6">
              <div className="pb-6 border-[1px] border-[#eee] border-solid border-x-0 border-t-0">
                <div className="mb-2 text-4xl font-black">218</div>
                <div className="font-normal text-[#777] text-lg">Investors</div>
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-black">24 days</div>
              <div className="font-normal text-[#777] text-lg">
                Left to invest
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-center items-center bg-[#0049ff] text-[#fff] rounded-[6px] text-lg font-semibold border-none cursor-pointer">
                <a href="/supersapiens/invest" className="px-7 py-3">
                  Invest in Supersapiens
                </a>
              </div>
              <div className="mt-2 text-[#777] font-normal text-center text-sm">
                $250 minimum investment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* navigation */}
      <div className="mx-32 px-8 flex text-lg font-semibold text-[#b3b3b3] leading-[64px]">
        <div className="mr-7">Pitch</div>
        <div className="mx-7">Discussion</div>
        <div className="mx-7">Updates</div>
        <div className="ml-7">Reviews</div>
      </div>
      <div className="border border-[#E6E6E6]"></div>

      {/* pitch */}
      <div className="mx-32 px-8 pt-12 mb-8 flex">
        <div>
          <div className="text-[#666] font-extrabold text-2xl">Highlights</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
          <div className="text-lg font-normal text-[#222]">
            <ul className="list-disc pl-8">
              <li className="mb-3 leading-relaxed">
                Q1 2024: Supersapiens enters US market with a focus on diabetes
              </li>
              <li className="mb-3 leading-relaxed">
                Glucose monitoring platform for optimizing health & performance
              </li>
              <li className="mb-3 leading-relaxed">
                Insights for metabolic health via glucose, first launched in
                Europe
              </li>
              <li className="mb-3 leading-relaxed">
                Partnered with a market leader to enhance US diabetes management
              </li>
              <li className="mb-3 leading-relaxed">
                World largest glucose dataset (non-diabetic): 1B+ data points
              </li>
              <li className="mb-3 leading-relaxed">
                Trusted by Olympians, F1, UEFA, NBA, PGA, NFL, NHL, MLB, TDF,
                Ironman
              </li>
              <li className="mb-3 leading-relaxed">
                Seamlessly integrates with Apple Health, Oura, Garmin, Wahoo,
                and others
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-[#666] font-extrabold text-2xl">Deal terms</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageScreen;
