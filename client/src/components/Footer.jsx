import logo from "../images/logo-brand.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer  flex flex-col justify-between  text-white font-semibold text-sm bg-zinc-900 w-full px-4 md:px-10  xl:px-20 2xl:px-72 py-10 min-h-[40vh]">
      <div className="logo  block md:flex items-center justify-between h-12 m-0 px-0 md:px-4">
        <div className="my-4 ">
          <img className="w-48    " src={logo} alt="" />
        </div>
        <div className="flex  w-full md:w-auto">
          {[
            <FaFacebook className=" text-black m-1 md:m-2 lg:m-3" />,
            <FaXTwitter className=" text-black m-1 md:m-2 lg:m-3" />,
            <FaLinkedinIn className=" text-black m-1 md:m-2 lg:m-3" />,
            <FaPinterest className=" text-black m-1 md:m-2 lg:m-3" />,
            <FaInstagram className=" text-black m-1 md:m-2 lg:m-3" />,
            <FaYoutube className=" text-black m-1 md:m-2 lg:m-3" />,
          ].map((item, index) => {
            return (
              <Link
                key={index}
                className="flex h-full text-xl  rounded-full items-center justify-center bg-white mx-2"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 2xl:grid-cols-9 my-10  ">
          {[
            "About us",
            "Careers",
            "Accessibality",
            "Feedback",
            "Media room",
            "Ad Choices",
            "Advertise with us",
            "Agent support",
            "Privacy",
            "Terms",
            "Home Made",
            "Tech Blog",
            "Agent Blog",
            "Sitemap",
            "Do Not Sell or Share My Personal Information",
          ].map((item, index) => {
            return (
              <div
                className={`text-sm my-2 cursor-pointer ${
                  index === 14 && "text-yellow-600 col-span-4"
                }`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-xs ">
        <div className="py-2">
          *Based on an Aug. 2023 proprietary survey among real estate
          professionals.
        </div>
        © 1995-2024{" "}
        <span className="underline">National Association of REALTORS</span>® and{" "}
        <span className="underline">Move,Inc.</span> All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
