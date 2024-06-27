import  { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
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

          <div className="fixed inset-y-0 left-0 w-2/5 bg-white p-4 z-50 shadow-lg transform transition-transform duration-300">
            <button
              className="p-2 bg-red-500 text-white absolute top-4 right-4"
              onClick={toggleSidebar}
            >
        <GrClose />
              
            </button>
            <ul className="mt-10">
              <li className="p-2 hover:bg-gray-200">Menu Item 1</li>
              <li className="p-2 hover:bg-gray-200">Menu Item 2</li>
              <li className="p-2 hover:bg-gray-200">Menu Item 3</li>
              <li className="p-2 hover:bg-gray-200">Menu Item 4</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
