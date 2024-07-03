import { useState, useRef } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useDispatch } from "react-redux";
import { RiHome6Line } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import {
  fetchFilteredProperties,
  fetchProperties,
} from "../../redux/propertiesSlice";
import { FaAngleDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { BsBuildingAdd } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Filter = () => {
  const [minPrice, setMinPrice] = useState("Any price");
  const [maxPrice, setMaxPrice] = useState("Any price");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [minBedrooms, setMinBedrooms] = useState("No min");
  const [maxBedrooms, setMaxBedrooms] = useState("No max");
  const [minBathrooms, setMinBathrooms] = useState("No min");
  const [maxBathrooms, setMaxBathrooms] = useState("No max");
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [priceFilterText, setPriceFilterText] = useState("Price");
  const [typeFilterText, setTypeFilterText] = useState("Property Type");
  const [roomsFilterText, setRoomsFilterText] = useState("Rooms");

  const dispatch = useDispatch();

  const priceDropdownRef = useRef(null);
  const typeDropdownRef = useRef(null);
  const roomsDropdownRef = useRef(null);

  const minPriceOptions = [
    "Any price",
    "$120k",
    "$250k",
    "$350k",
    "$450k",
    "$600k",
    "$700k",
    "$800k",
  ];
  const maxPriceOptions = [
    "Any price",
    "$200k",
    "$400k",
    "$600k",
    "$800k",
    "$1M",
    "$2M",
    "$3M",
  ];
  const propertyTypes = [
    { type: "house", logo: <FaHome className="text-xl mx-auto" /> },
    { type: "condo", logo: <BiBuildings className="text-xl mx-auto" /> },
    { type: "townhome", logo: <CgHome className="text-xl mx-auto" /> },
    {
      type: "multifamily",
      logo: <GiFamilyHouse className="text-xl mx-auto" />,
    },
    { type: "mobile", logo: <RiHome6Line className="text-xl mx-auto" /> },
    { type: "farm", logo: <BsBuildingAdd className="text-xl mx-auto" /> },
    { type: "land", logo: <GiIsland className="text-xl mx-auto" /> },
  ];
  const minBedroomsOptions = ["No min", "studio", 1, 2, 3, 4, 5];
  const maxBedroomsOptions = ["No max", "studio", 1, 2, 3, 4, 5];
  const minBathroomsOptions = ["No min", 1, 2, 3, 4, 5];
  const maxBathroomsOptions = ["No max", 1, 2, 3, 4, 5];

  const convertPrice = (price) => {
    if (price.includes("k")) {
      return price.replace("k", "000").replace("$", "");
    } else if (price.includes("M")) {
      return price.replace("M", "000000").replace("$", "");
    } else if (price.includes(".")) {
      return price.replace(".", "").replace("M", "000000").replace("$", "");
    }
    return price.replace("$", "");
  };

  const handleMinPriceChange = (price) => {
    setMinPrice(price);
    if (price !== "Any price") {
      setPriceDropdownOpen(true);
    }
  };

  const handleMaxPriceChange = (price) => {
    setMaxPrice(price);
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleMinBedroomsChange = (bedrooms) => {
    setMinBedrooms(bedrooms);
    if (bedrooms !== "No min") {
      setRoomsDropdownOpen(true);
    }
  };

  const handleMaxBedroomsChange = (bedrooms) => {
    setMaxBedrooms(bedrooms);
  };

  const handleMinBathroomsChange = (bathrooms) => {
    setMinBathrooms(bathrooms);
    if (bathrooms !== "No min") {
      setRoomsDropdownOpen(true);
    }
  };

  const handleMaxBathroomsChange = (bathrooms) => {
    setMaxBathrooms(bathrooms);
  };

  const handleDonePriceClick = () => {
    setPriceFilterText(`${minPrice} - ${maxPrice}`);
    setPriceDropdownOpen(false);
    dispatchFetchFilteredProperties();
  };

  const handleDoneTypeClick = () => {
    setTypeFilterText(`Property Type (${selectedTypes.length})`);
    setTypeDropdownOpen(false);
    dispatchFetchFilteredProperties();
  };

  const handleDoneRoomsClick = () => {
    setRoomsFilterText(
      `Rooms (Bed: ${minBedrooms}-${maxBedrooms}, Bath: ${minBathrooms}-${maxBathrooms})`
    );
    setRoomsDropdownOpen(false);
    dispatchFetchFilteredProperties();
  };

  const dispatchFetchFilteredProperties = () => {
    const minPriceValue =
      minPrice === "Any price" ? "" : convertPrice(minPrice);
    const maxPriceValue =
      maxPrice === "Any price" ? "" : convertPrice(maxPrice);

    dispatch(
      fetchFilteredProperties({
        minPrice: minPriceValue,
        maxPrice: maxPriceValue,
        propertyTypes: selectedTypes,
        minBedrooms: minBedrooms === "No min" ? "" : minBedrooms,
        maxBedrooms: maxBedrooms === "No max" ? "" : maxBedrooms,
        minBathrooms: minBathrooms === "No min" ? "" : minBathrooms,
        maxBathrooms: maxBathrooms === "No max" ? "" : maxBathrooms,
      })
    );
  };

  const clearFilter = () => {
    setMinPrice("Any price");
    setMaxPrice("Any price");
    setSelectedTypes([]);
    setMinBedrooms("No min");
    setMaxBedrooms("No max");
    setMinBathrooms("No min");
    setMaxBathrooms("No max");
    setPriceDropdownOpen(false);
    setTypeDropdownOpen(false);
    setRoomsDropdownOpen(false);
    setPriceFilterText("Price");
    setTypeFilterText("Property Type");
    setRoomsFilterText("Rooms");
    dispatch(fetchProperties());
  };

  const togglePriceDropdown = () => {
    setPriceDropdownOpen(!priceDropdownOpen);
    setTypeDropdownOpen(false);
    setRoomsDropdownOpen(false);
  };

  const toggleTypeDropdown = () => {
    setTypeDropdownOpen(!typeDropdownOpen);
    setPriceDropdownOpen(false);
    setRoomsDropdownOpen(false);
  };

  const toggleRoomsDropdown = () => {
    setRoomsDropdownOpen(!roomsDropdownOpen);
    setPriceDropdownOpen(false);
    setTypeDropdownOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="hidden md:flex w-full px-2 py-2 gap-1 justify-start items-center">
        {/* Price Filter */}
        <div className="relative">
          <button
            onClick={togglePriceDropdown}
            className="pl-4 py-2 text-gray-700 rounded border border-black flex justify-center items-center"
          >
            {priceFilterText} <FaAngleDown className="mx-2 pr-2" />
          </button>
          {priceDropdownOpen && (
            <div
              className="flex absolute z-10 mt-2 bg-white border rounded shadow-lg w-[300px]"
              ref={priceDropdownRef}
            >
              <div className="px-4 py-3">
                <label className="block text-sm font-medium text-gray-700">
                  Min Price
                </label>
                <select
                  value={minPrice}
                  onChange={(e) => handleMinPriceChange(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {minPriceOptions.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-4 py-3">
                <label className="block text-sm font-medium text-gray-700">
                  Max Price
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => handleMaxPriceChange(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {maxPriceOptions.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleDonePriceClick}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Property Type Filter */}
        <div className="relative">
          <button
            onClick={toggleTypeDropdown}
            className="pl-4 py-2 text-gray-700 rounded border border-black flex justify-center items-center"
          >
            {typeFilterText} <FaAngleDown className="mx-2 pr-2" />
          </button>
          {typeDropdownOpen && (
            <div
              className="absolute z-10 mt-2 w-[400px] bg-white border rounded shadow-lg"
              ref={typeDropdownRef}
            >
              <div className="flex items-center justify-between px-4 font-sm">
                <div className=" font-medium ">Property Type</div>
                <button
                  onClick={handleDoneTypeClick}
                  className="mt-2 px-4 py-2 border-0 underline  "
                >
                  Done
                </button>
              </div>
              <div className="px-4 py-3 grid grid-cols-3 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type.type}
                    onClick={() => handleTypeChange(type.type)}
                    className={`text-sm px-2 py-3 rounded-xl border-black border  ${
                      selectedTypes.includes(type.type)
                        ? "bg-black text-white"
                        : " text:black"
                    }`}
                  >
                    {type.logo}
                    {type.type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rooms Filter */}
        <div className="relative">
          <button
            onClick={toggleRoomsDropdown}
            className="pl-4 py-2 text-gray-700 rounded border border-black flex justify-center items-center"
          >
            {roomsFilterText} <FaAngleDown className="mx-2 pr-2" />
          </button>
          {roomsDropdownOpen && (
            <div
              className="absolute z-10 mt-2 w-[300px] bg-white border rounded shadow-lg"
              ref={roomsDropdownRef}
            >
              <div className="flex">
              <div className="px-4 py-3">
                <label className="block text-sm font-medium text-gray-700">
                  Min Bedrooms
                </label>
                <select
                  value={minBedrooms}
                  onChange={(e) => handleMinBedroomsChange(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {minBedroomsOptions.map((bedrooms) => (
                    <option key={bedrooms} value={bedrooms}>
                      {bedrooms}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-4 py-3">
                <label className="block text-sm font-medium text-gray-700">
                  Max Bedrooms
                </label>
                <select
                  value={maxBedrooms}
                  onChange={(e) => handleMaxBedroomsChange(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {maxBedroomsOptions.map((bedrooms) => (
                    <option key={bedrooms} value={bedrooms}>
                      {bedrooms}
                    </option>
                  ))}
                </select>
              </div>
              </div>
              <div className="flex">
                <div className="px-4 py-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Min Bathrooms
                  </label>
                  <select
                    value={minBathrooms}
                    onChange={(e) => handleMinBathroomsChange(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {minBathroomsOptions.map((bathrooms) => (
                      <option key={bathrooms} value={bathrooms}>
                        {bathrooms}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="px-4 py-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Max Bathrooms
                  </label>
                  <select
                    value={maxBathrooms}
                    onChange={(e) => handleMaxBathroomsChange(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {maxBathroomsOptions.map((bathrooms) => (
                      <option key={bathrooms} value={bathrooms}>
                        {bathrooms}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleDoneRoomsClick}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Clear Filters Button */}
        <button
          onClick={clearFilter}
          className="md:block hidden mx-3 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Filters
        </button>
        <Menu
          as="div"
          className="relative inline-block sm:hidden text-left mx-2"
        >
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Filter
              {/* <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </MenuItem>
              <form method="POST" action="#">
                <MenuItem>
                  {({ focus }) => (
                    <button
                      type="submit"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>
        <button
          onClick={clearFilter}
          className="block md:hidden mx-3 px-2 py-2 bg-red-500 text-white rounded-full"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Filter;
