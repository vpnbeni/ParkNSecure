import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RiHome6Line } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { fetchFilteredProperties, fetchProperties } from "../../redux/propertiesSlice";
import { FaAngleDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { BsBuildingAdd } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const SidebarForFilters = () => {
  const [minPrice, setMinPrice] = useState("Any price");
  const [maxPrice, setMaxPrice] = useState("Any price");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [minBedrooms, setMinBedrooms] = useState("No min");
  const [maxBedrooms, setMaxBedrooms] = useState("No max");
  const [minBathrooms, setMinBathrooms] = useState("No min");
  const [maxBathrooms, setMaxBathrooms] = useState("No max");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceFilterText, setPriceFilterText] = useState("Price");
  const [typeFilterText, setTypeFilterText] = useState("Property Type");
  const [roomsFilterText, setRoomsFilterText] = useState("Rooms");

  const dispatch = useDispatch();

  const sidebarRef = useRef(null);

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
      type: "Multi Fam.",
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
      setSidebarOpen(true);
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
      setSidebarOpen(true);
    }
  };

  const handleMaxBedroomsChange = (bedrooms) => {
    setMaxBedrooms(bedrooms);
  };

  const handleMinBathroomsChange = (bathrooms) => {
    setMinBathrooms(bathrooms);
    if (bathrooms !== "No min") {
      setSidebarOpen(true);
    }
  };

  const handleMaxBathroomsChange = (bathrooms) => {
    setMaxBathrooms(bathrooms);
  };

  const handleDonePriceClick = () => {
    setPriceFilterText(`${minPrice} - ${maxPrice}`);
    setSidebarOpen(false);
    dispatchFetchFilteredProperties();
  };

  const handleDoneTypeClick = () => {
    setTypeFilterText(`Property Type (${selectedTypes.length})`);
    setSidebarOpen(false);
    dispatchFetchFilteredProperties();
  };

  const handleDoneRoomsClick = () => {
    setRoomsFilterText(
      `Rooms (Bed: ${minBedrooms}-${maxBedrooms}, Bath: ${minBathrooms}-${maxBathrooms})`
    );
    setSidebarOpen(false);
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
    setSidebarOpen(false);
    setPriceFilterText("Price");
    setTypeFilterText("Property Type");
    setRoomsFilterText("Rooms");
    dispatch(fetchProperties());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Sidebar Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="block md:hidden mr-3 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Filters
      </button>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed top-0 left-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 w-full">
          <div
            ref={sidebarRef}
            className="h-full w-4/5 bg-white overflow-y-auto shadow-lg"
          >
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

              {/* Price Filter */}
              <div className="mb-4">
                <h3 className="text-md font-medium text-gray-700 mb-2">Price</h3>
                <div className="flex items-center">
                  <button
                    onClick={handleDonePriceClick}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
                <div className="flex mt-2 space-x-2">
                  {/* Min Price */}
                  <select
                    value={minPrice}
                    onChange={(e) => handleMinPriceChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {minPriceOptions.map((price) => (
                      <option key={price} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                  {/* Max Price */}
                  <select
                    value={maxPrice}
                    onChange={(e) => handleMaxPriceChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {maxPriceOptions.map((price) => (
                      <option key={price} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="mb-4">
                <h3 className="text-md font-medium text-gray-700 mb-2">Property Type</h3>
                
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.type}
                      onClick={() => handleTypeChange(type.type)}
                      className={`text-xs px-2 py-1 rounded-md border border-black  ${
                        selectedTypes.includes(type.type)
                          ? "bg-black text-white"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      {type.logo} {type.type}
                    </button>
                  ))}
                </div>
                <div className="flex items-center pt-3">
                  <button
                    onClick={handleDoneTypeClick}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Rooms Filter */}
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-2">Rooms</h3>
                <div className="flex items-center">
                  <button
                    onClick={handleDoneRoomsClick}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
                <div className="mt-2 space-y-2">
                  {/* Min Bedrooms */}
                  <select
                    value={minBedrooms}
                    onChange={(e) => handleMinBedroomsChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {minBedroomsOptions.map((bedrooms) => (
                      <option key={bedrooms} value={bedrooms}>
                        {bedrooms}
                      </option>
                    ))}
                  </select>
                  {/* Max Bedrooms */}
                  <select
                    value={maxBedrooms}
                    onChange={(e) => handleMaxBedroomsChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {maxBedroomsOptions.map((bedrooms) => (
                      <option key={bedrooms} value={bedrooms}>
                        {bedrooms}
                      </option>
                    ))}
                  </select>
                  {/* Min Bathrooms */}
                  <select
                    value={minBathrooms}
                    onChange={(e) => handleMinBathroomsChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {minBathroomsOptions.map((bathrooms) => (
                      <option key={bathrooms} value={bathrooms}>
                        {bathrooms}
                      </option>
                    ))}
                  </select>
                  {/* Max Bathrooms */}
                  <select
                    value={maxBathrooms}
                    onChange={(e) => handleMaxBathroomsChange(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {maxBathroomsOptions.map((bathrooms) => (
                      <option key={bathrooms} value={bathrooms}>
                        {bathrooms}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={clearFilter}
                className="block w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarForFilters;

