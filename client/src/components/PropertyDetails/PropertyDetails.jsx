import ImageGallery from "./ImageGallery";
import Navigation from "./Navigation";
import EmailAgentForm from "./EmailAgentForm";
import Details from "./Details";
import Accordion1 from "./Accordion1";
import LearnMore from "./LearnMore";
import SimilarHomes from "./SimilarHomes";
import { FaChevronDown } from "react-icons/fa";

const PropertyDetails = () => {
  return (
    <>
      <div className="flex items-center flex-col my-6 ">
        <Navigation />
        <div className=" xl:flex  mt-4">
          <div className="py-4 md:flex  w-full flex-col">
            <ImageGallery />
            <Details />
            <Accordion1 />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-normal mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z"
                />
              </svg>
              <span className="ml-2 text-gray-700">15 saves this week</span>
            </div>
            <div className="w-[302px] m-auto">
              <EmailAgentForm
                rounded="rounded-xl"
                border="border border-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 pb-8 flex   flex-col items-center justify-center    mx-auto bg-[#f7f7f7]">
        <LearnMore />
      </div>

      <div className=" flex flex-col items-center justify-center my-10">
        <SimilarHomes />
      </div>
      <div className="flex felx-col items-center justify-start xl:px-96 py-10  bg-[#f2f0ef]">
        <div>
        <div className="text-gray-800 text-sm my-4">
          Additional Information About 324 Golden Rock Co, Christiansted, VI
          00820
          <div className="text-xs">
            324 Golden Rock Co, Christiansted, VI 00820 is a condo for sale
            listed on the market for 56 Days.
          </div>
        </div>
        <div className="flex">
          <ul className="text-gray-500 text-sm w-1/2">
            <li className="font-semibold text-black">Nearby Cities</li>
            <li className="my-2">Saintcroix Homes for Sale</li>
            <li className="my-2">Saint Thomas Homes for sale</li>
            <li className="my-2">Charlotte Ama Homes for Sale</li>
            <li className="underline flex justify-start items-center text-black">See more <FaChevronDown /></li>
          </ul>
          <ul className="text-gray-500 text-sm w-1/2">
            <li className="font-semibold text-black">Nearby Cities</li>
            <li className="my-2">Saintcroix Homes for Sale</li>
            <li className="my-2">Saint Thomas Homes for sale</li>
            <li className="my-2">Charlotte Ama Homes for Sale</li>
            <li className="underline flex justify-start items-center text-black">See more <FaChevronDown /></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
