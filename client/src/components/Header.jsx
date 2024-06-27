import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo-brand.png";
import SidebarMenu from "./SideBar";
import SignupModel from "./SignupLogin/Signup";
import { BsPersonCircle } from "react-icons/bs";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="headerLg hidden lg:flex  items-center justify-center border-b-2">
        <Link to={'/'} className="logo flex items-center justify-center h-12 m-0 p-0 cursor-pointer ">
          <img className="w-36    " src={logo} alt="" />
        </Link>
        <div className="links flex mx-4">
          {[
            "Buy",
            "Sell",
            "Rent",
            "Mortgage",
            "Find Realtors®",
            "My Home",
            "News & Insights",
          ].map((item, index) => {
            return (
              <div
                className="text-sm mx-0.5 my-0 h-full translate-y-0.5 p-2 cursor-pointer border-b-2 border-transparent hover:border-black "
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="links2 mx-14 hidden xl:block">
          <Link className="cursor-pointer underline mr-4" to={"/"}>
            Manage rentals{" "}
          </Link>
          <Link className="underline" to={"/"}>
            Advertise{" "}
          </Link>
        </div>
        <div className="loginSignup flex items-center justify-center xl:mx-6">
          <div className="login mx-2">
            <button className="border-0" onClick={openModal}>Log in</button>
          </div>
          <div className="signup">
            <button className="border-0 bg-black text-white rounded-full px-4 py-1 font-semibold text-base" onClick={openModal}>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="headerSm block lg:hidden">
        <div className="">
          <SidebarMenu />
        </div>
        <div className="logo flex items-center justify-center h-12 m-0 p-0">
          <img className="w-36 " src={logo} alt="" />
        </div>
        <button className="p-2 fixed top-1 right-4 z-50 " onClick={openModal}>
        <BsPersonCircle className="text-2xl"  />
        </button>
      </div>
      <SignupModel isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
