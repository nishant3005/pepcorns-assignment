import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faDiscord,
  faSquareFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { tagItems } from '../constants/tagItems';
import TagItem from '../components/ui/TagItem/TagItem';
import Carousel from '../components/carousel/Carousel';
import { founders } from '../constants/leadership';
import Card from '../components/ui/card/Card';
import { discussion } from '../constants/discussion';
import DiscussionCard from '../components/ui/discusssion-card/DiscussionCard';
import FAQ from '../components/ui/faq/FAQ';

const LandingPageScreen = () => {
  return (
    <div className="text-justify">
      {/* Hero section */}
      <section className="mx-32 px-8 pt-20 pb-12">
        <div className="">
          <div>
            <div className="flex">
              <div className="flex justify-center items-center">LOGO</div>
              <div className="text-[50px] font-bold pl-2">Supersapiens</div>
            </div>
            <div className="text-[#777] text-xl pb-4">
              Glucose: The Cornerstone of Metabolic Health
            </div>
            <div className="flex flex-wrap">
              {tagItems.map((item) => (
                <TagItem key="" item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="lg:pr-10 w-full lg:w-2/3  p-0">
            <Carousel />
          </div>
          <div className="flex flex-col justify-center w-full lg:w-1/3">
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
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Highlights</div>
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
      </section>

      {/* problem */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Opportunity</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-1/2 md:w-full">
            <div className="text-2xl font-extrabold mb-2">
              Glucose: The Cornerstone of Health
            </div>
            <div className="text-[#666] font-bold text-lg">The Problem</div>
            <div className="text-lg">
              Diabetes, a condition inherently linked to glucose management, is
              not just a medical term; it has become a significant challenge in
              the tapestry of modern healthcare, especially in the US.
              <br />
              <br />
              In an era where we can track and analyze countless health metrics,
              we have often underestimated the profound importance of glucose
              regulation.
              <br />
              <br />
              The result?
              <br />
              <br />
              Countless individuals, from the newly diagnosed to those managing
              long-term diabetes, grapple with understanding and managing their
              glucose levels. The absence of actionable insights has left many
              asking: &ldquo;Why did my levels spike today?&ldquo; &ldquo;I felt
              great this morning; why did I crash in the afternoon?&ldquo;
              <br />
              <br />
              For too long, achieving optimal glucose stability has been{' '}
              <span className="text-blue-500 cursor-pointer">read more...</span>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-full flex justify-center items-center">
            <img src="/assets/problem.png" alt="image" />
          </div>
        </div>
      </section>

      {/* product */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Product</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-extrabold mb-2">
              Supersapiens: next-gen insights empowering diabetes management
            </div>
            <div className="text-[#666] font-bold text-lg">Our System</div>
            <div className="flex justify-betwen flex-wrap py-16">
              <div className="lg:w-3/5 md:w-full flex justify-center items-center pr-6">
                <img
                  src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/084/149/84149-1677282201-2d36e32b31860fdea2c46af84eca3209c854ca9d.jpg"
                  alt="image"
                  className="W-100 h-100"
                />
              </div>
              <div className="lg:w-2/5 md:w-full flex justify-center items-center">
                <img
                  src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/102/394/102394-1697740633-9496edeaf7d890ff3e575cc623c67ce7b4a0bf60.png"
                  alt="image"
                  className="W-100 h-100"
                />
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold mb-2">
                Innovative Features for Enhanced Health
              </div>
              <div>
                <ul className="list-disc pl-4">
                  <li className="">
                    <span className="text-[#555] font-semibold text-xl leading-9">
                      Continuous Glucose Visibility
                    </span>
                    <div className="mb-2 text-lg">
                      Experience a glucose trace, built upon data provided by a
                      market leader in CGMs, allowing you to instantly interpret
                      the impacts of food, mood, and movement on your metabolic
                      health.
                    </div>
                  </li>
                  <li className=" ">
                    <span className="text-[#555] font-semibold text-xl leading-9">
                      Daily Insights
                    </span>
                    <div className="mb-2 text-lg">
                      Stay informed with daily progress summaries and key event
                      overviews directly within our user-friendly app.
                    </div>
                  </li>
                  <li className=" ">
                    <span className="text-[#555] font-semibold text-xl leading-9">
                      Glucose Score
                    </span>
                    <div className="mb-2 text-lg">
                      Analyze each event (food, mood, or movement) and its
                      glucose efficiency with our hero metric.
                    </div>
                  </li>
                  <li className=" ">
                    <span className="text-[#555] font-semibold text-xl leading-9">
                      Desktop Portal
                    </span>
                    <div className="mb-2 text-lg">
                      Zoom out and gain a macro perspective over weeks and
                      months. Analyze long-term trends, export your data, share
                      insights, and collaborate—all from the convenience of your
                      desktop.
                    </div>
                  </li>
                  <li className=" ">
                    <span className="text-[#555] font-semibold text-xl leading-9">
                      Complete
                    </span>
                    <div className="mb-2 text-lg">
                      Experience a glucose trace,{' '}
                      <span className="text-blue-500 cursor-pointer">
                        read more...
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Traction */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Traction</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="mt-16">
          <div className="text-center text-5xl font-extrabold">
            <span className="text-[#555] font-semibold">$2M</span> 2022 EU
            revenue <span className="text-[#555] font-semibold">15k+</span>{' '}
            users
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-center items-center w-4/5 my-10">
              <img
                src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/108/838/108838-1701290596-66c7d5aed74cf13c03652feaef8519e6e7bd6515.png"
                alt="image"
              />
            </div>
            <div className="flex justify-center items-center w-3/4 my-10">
              <img
                src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/105/480/105480-1699385791-81898449bdddc89f8b62563d56ff67fd081c8b92.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">
            Key Statistics
          </div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div>
            <ul className="list-disc pl-4">
              <li className="leading-6 text-lg mb-3 text-[#222]">
                2022 Revenue: $2M
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Sensor users: 15,800 to date, 1,800 in US clinical trial
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Sensors per customer per year: 5.71
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Third-party data integration: over 200M potential collective
                users
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-4">
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Headquarters: Atlanta, GA
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Founded: 2019
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Commercial launch: September 2020
              </li>
              <li className="leading-6 text-lg mb-3 text-[#222]">
                Total FTEs: 16 (including EU) (as of 11/01/23)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* business model */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">
            Businesss Model
          </div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="">
          <div>
            <div className="text-2xl font-extrabold mb-2">
              SaaS Subscription model, strong sales & a proven B2B strategy
            </div>

            <div className="text-lg">
              At Supersapiens, our US business model revolves around a SaaS
              subscription framework, leveraging advanced CGM technologies
              developed in conjunction with a market leader in sensors and
              devices, synergizing with both B2B and D2C approaches, propelling
              us toward our expansive vision in the US market.
              <br />
              <br />
              <div>
                <div className="text-[#555] font-semibold leading-5">
                  SaaS Subscription Model
                </div>
                Aligned with the evolving preferences of the modern U.S.
                consumer, we have transitioned to a SaaS subscription model.
                This approach not only ensures continuous engagement with our
                user base offering them sustained value but also guarantees a
                reliable revenue stream for our enterprise.
              </div>
              <br />
              <br />
              <div>
                <div className="text-[#555] font-semibold leading-5">
                  B2B Collaborations
                </div>
                Our B2B approach transcends traditional sales,{' '}
                <span className="text-blue-500 cursor-pointer">
                  read more...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vision and strategy */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">
            Vision and strategy
          </div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-extrabold mb-2">
              Championing that glucose matters for all
            </div>
            <div className="text-[#666] font-bold text-xl">Vision</div>
            <div className="text-lg">
              At our core, we have always believed in the value of exercise.
              Described as the billion-dollar drug that often goes unnoticed, we
              see it as the cornerstone of health.
              <br />
              <br />
              Understanding the body&apos;s glucose responses is crucial for
              people with diabetes. With precise and personalized data,
              Supersapiens enables informed decisions that drive genuine
              lifestyle transformations for individuals with diabetes.
              <br />
              <br />
              This transformation is powered by our collaboration with a leader
              in glucose sensing technology, ensuring that our insights are
              grounded in accuracy and relevance. Through this, we aim to
              empower the diabetes community with tools for proactive health
              management, aligning with our mission to make the{' '}
              <span className="text-blue-500 cursor-pointer">read more...</span>
            </div>
          </div>
        </div>
      </section>

      {/* leadership */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Leadership</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>

        <div>
          <div className="text-2xl font-extrabold mb-2">
            Led by industry veterans and founders in healthcare, sports, and
            finance
          </div>
          <div className="text-[#666] font-bold text-xl pb-5">Founders</div>
          <div className="flex lg:flex-nowrap md:flex-wrap justify-center items-center">
            {founders.map((member, index) => (
              <div key={index} className="m-4">
                <Card {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about supersapiens  */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">
            About Supersapiens
          </div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>

        <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap sm:w-full justify-between">
          <div className="flex flex-col">
            <div>
              <div className="text-[#777] font-normal text-base">
                Legal Name
              </div>
              <div className="text-lg mb-4">TT1 Products, Inc.</div>
            </div>
            <div>
              <div className="text-[#777] font-normal text-base">Founded</div>
              <div className="text-lg mb-4">Feb 2019</div>
            </div>
            <div>
              <div className="text-[#777] font-normal text-base">Form</div>
              <div className="text-lg mb-4">Delaware Corporation</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-[#777] font-normal text-base">Employees</div>
              <div className="text-lg mb-4">12</div>
            </div>
            <div>
              <div className="text-[#777] font-normal text-base">Website</div>
              <div className="mb-4">
                <a
                  href="https://www.supersapiens.com/"
                  className="text-lg  text-[#0049ff]"
                >
                  supersapiens.com
                </a>
              </div>
            </div>
            <div>
              <div className="text-[#777] font-normal text-base">
                Social Media
              </div>
              <div className="text-lg mb-4">
                <div className="flex">
                  <div className="mr-2 text-blue-500 cursor-pointer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="mx-2 text-pink-500 cursor-pointer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="mx-2 text-blue-600 cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div className="mx-2 text-blue-500 cursor-pointer">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </div>
                  <div className="mx-2 text-red-500 cursor-pointer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="mx-2 text-[#5C6AF3] cursor-pointer">
                    <FontAwesomeIcon icon={faDiscord} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#777] font-normal text-base">
              Headquarters
            </div>
            <div>
              <img
                src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
                alt=""
                className="w-50 h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-32 px-8 pt-12 mb-8">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">FAQ</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>

        <div className="">
          <FAQ />
        </div>
      </section>

      {/* discussion */}
      <section className="mx-32 px-8 pt-12 mb-24">
        <div>
          <div className="text-[#666] font-extrabold text-3xl">Discussion</div>
          <div className="border border-[#E6E6E6] w-14 my-6"></div>
        </div>

        <div>
          Ask questions and share feedback with the Supersapiens team below. If
          you have support related questions for Republic, please contact
          investors@republic.co.
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-3/5">
            {discussion.map((item) => (
              <DiscussionCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="bg-[#161D2D]">
        <div className="px-40 pt-12 pb-8 flex justify-between flex-wrap">
          <div className="text-[#fff] flex flex-col">
            <div>Republic Logo</div>
            <div className="my-6 font-normal text-base leading-snug text-[#B9BCC0]">
              Giving everyone access to early-stage startup investing
            </div>
            <div className="flex opacity-30 text-xl text-white">
              <div className="mr-2 cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="mx-2  cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="mx-2 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="mx-2  cursor-pointer">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </div>
              <div className="mx-2  cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="mx-2  cursor-pointer">
                <FontAwesomeIcon icon={faDiscord} />
              </div>
            </div>
          </div>
          <div className="text-[#fff] font-medium text-lg">
            <div className="mb-3 pb-3 border-b opacity-30">For investors</div>
            <ul className="text-[#B9BCC0]">
              <li className="leading-7">Why invest</li>
              <li className="leading-7">How it works</li>
              <li className="leading-7">FAQ</li>
              <li className="leading-7">Risks</li>
              <li className="leading-7">Privacy policy</li>
              <li className="leading-7">Accessibility</li>
              <li className="leading-7">Cookie Preferences</li>
              <li className="leading-7">Form CRS</li>
            </ul>
          </div>
          <div className="text-[#fff] font-medium text-lg">
            <div className="mb-3 pb-3 border-b opacity-30">For startups</div>
            <ul className="text-[#B9BCC0]">
              <li className="leading-7">Why raise</li>
              <li className="leading-7">Learn</li>
              <li className="leading-7">FAQ</li>
              <li className="leading-7">Crowd SAFE</li>
              <li className="leading-7">Instruments</li>
              <li className="leading-7">Tokenized assets</li>
            </ul>
          </div>
          <div className="text-[#fff] font-medium text-lg">
            <div className="mb-3 pb-3 border-b opacity-30">Crypto</div>
            <ul className="text-[#B9BCC0]">
              <li className="leading-7">For investors</li>
              <li className="leading-7">For companies</li>
              <li className="leading-7">How it works</li>
              <li className="leading-7">Token DPA</li>
              <li className="leading-7">Tokenization</li>
            </ul>
          </div>
          <div className="text-[#fff] font-medium text-lg">
            <div className="mb-3 pb-3 border-b opacity-30">Company</div>
            <ul className="text-[#B9BCC0]">
              <li className="leading-7">About</li>
              <li className="leading-7">Journal</li>
              <li className="leading-7">Events</li>
              <li className="leading-7">Contact</li>
              <li className="leading-7">We&apos;re hiring!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageScreen;
