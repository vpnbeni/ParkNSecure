import  { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import SignupModel from "./SignupLogin/Signup";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <div>
      <button
        className="p-2 fixed top-2 left-4 z-50"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu  className='text-xl'/>
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>

          <div className="fixed inset-y-0 left-0 w-4/5 bg-white p-4 z-50 shadow-lg transform transition-transform duration-300">
            <button
              className="p-2 bg-red-500 text-white absolute top-4 right-4"
              onClick={toggleSidebar}
            >
        <GrClose />
              
            </button>
            <ul className="mt-10">
              <li className="p-2 hover:bg-gray-200"><Link>Buy</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>Sell</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>Rent</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>Mortgage</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>Find Realtors</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>My Home</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>News & Insights</Link></li>
              <li className="p-2 hover:bg-gray-200 mt-10"><Link>Manage rentaks</Link></li>
              <li className="p-2 hover:bg-gray-200"><Link>Advertise</Link></li>
              <li className="p-2 hover:bg-gray-200 text-center mt-5"><button onClick={openModal}>Login</button></li>
              <li className="p-2 hover:bg-gray-200 bg-black rounded-full text-center text-white hover:text-black"><button onClick={openModal}>Signup</button></li>
              
            </ul>
          </div>
        </div>
      )}
    </div>
    <SignupModel isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default SidebarMenu;
