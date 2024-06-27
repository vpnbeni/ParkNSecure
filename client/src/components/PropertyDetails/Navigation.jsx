import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { BiSolidHide } from "react-icons/bi";
import SearchBar from "./../SearchBar";
import { Link } from "react-router-dom";
const Navigation = () => {
  const myObj = [
    { id: 0, value: "Homes For Sale", link: "/" },
    { id: 1, value: "Virgin Islands", link: "/search" },
    { id: 2, value: "St. Croix County", link: "/search" },
    { id: 3, value: "Christiansted", link: "/search" },
    { id: 4, value: "324 Golden Rock Co", link: "#" },
  ];
  var size = Object.keys(myObj).length;
  return (
    <div className="flex items-center justify-between mx-64">
      <Link
        to={"/search"}
        className="flex underline items-center justify-center"
      >
        <IoIosArrowBack className="text-xl" />
        Back
      </Link>
      <div className="mx-4">
        <SearchBar />
      </div>
      <div className="flex text-sm ">
        {myObj.map((item) => {
          return (
            <div className="flex items-center justify-center" key={item.id}>
              <Link
                to={item.link}
                className={`mx-4 underline ${
                  item.id === size - 1 && " cursor-text no-underline"
                }`}
              >
                {item.value}
              </Link>{" "}
              <div
                className={`${item.id === size - 1 && "hidden cursor-none"}`}
              >
                <IoIosArrowForward />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex ">
      <Link
        to={"/"}
        className="flex mx-1 items-center justify-center rounded-full p-3 border-2 border-black"
      >
        <FaRegHeart className="text-xl font-bolder" />
      </Link>
      <Link
        to={"/"}
        className="flex mx-1 items-center justify-center rounded-full p-3 border-2 border-black"
      >
        <GoShare className="text-xl font-bolder" />
      </Link>
      <Link
        to={"/"}
        className="flex mx-1 items-center justify-center rounded-full p-3 border-2 border-black"
      >
        <BiSolidHide className="text-xl font-bolder" />
      </Link>
      </div>
    </div>
  );
};

export default Navigation;
