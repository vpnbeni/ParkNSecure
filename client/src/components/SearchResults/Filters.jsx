import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  fetchFilteredProperties,
  fetchProperties,
} from "../../redux/propertiesSlice";

const Filter = () => {
  const [minPrice, setMinPrice] = useState("Any price");
  const [maxPrice, setMaxPrice] = useState("Any price");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [priceFilterText, setPriceFilterText] = useState("Price");
  const [typeFilterText, setTypeFilterText] = useState("Property Type");
  const dispatch = useDispatch();
  
  const priceDropdownRef = useRef(null);
  const typeDropdownRef = useRef(null);

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
    'house', 'condo', 'townhome', 'multifamily', 'mobile', 'farm', 'land'
  ];

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

  useEffect(() => {
    const minPriceValue =
      minPrice === "Any price" ? "" : convertPrice(minPrice);
    const maxPriceValue =
      maxPrice === "Any price" ? "" : convertPrice(maxPrice);
console.log(selectedTypes)
    dispatch(
      fetchFilteredProperties({
        minPrice: minPriceValue,
        maxPrice: maxPriceValue,
        propertyTypes: selectedTypes,
      })
    );
  }, [minPrice, maxPrice, selectedTypes, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target)
      ) {
        setPriceDropdownOpen(false);
      }
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target)
      ) {
        setTypeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMinPriceChange = (price) => {
    setMinPrice(price);
    if (price !== "Any price") {
      setPriceDropdownOpen(true);
    }
  };

  const handleMaxPriceChange = (price) => {
    setMaxPrice(price);
    setPriceDropdownOpen(false);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedTypes(prevTypes =>
      prevTypes.includes(value) ? prevTypes.filter(type => type !== value) : [...prevTypes, value]
    );
  };

  const handleDoneClick = () => {
    setTypeFilterText(`Property Type (${selectedTypes.length})`);
    setTypeDropdownOpen(false);
  };

  const clearFilter = () => {
    setMinPrice("Any price");
    setMaxPrice("Any price");
    setSelectedTypes([]);
    setPriceDropdownOpen(false);
    setTypeDropdownOpen(false);
    setPriceFilterText("Price");
    setTypeFilterText("Property Type");
    dispatch(fetchProperties());
  };

  return (
    <div className="relative space-y-2">
      {/* Price Filter Button */}
      <button
        className="border px-4 py-2 rounded"
        onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
      >
        {minPrice !== "Any price" || maxPrice !== "Any price"
          ? `${minPrice} to ${maxPrice}`
          : priceFilterText}
        {(minPrice !== "Any price" || maxPrice !== "Any price") && (
          <span
            className="ml-2 text-red-500 cursor-pointer"
            onClick={clearFilter}
          >
            &times;
          </span>
        )}
      </button>

      {/* Property Type Filter Button */}
      <button
        className="border px-4 py-2 rounded"
        onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
      >
        {selectedTypes.length > 0 ? typeFilterText : "Property Type"}
      </button>

      {/* Price Dropdown */}
      {priceDropdownOpen && (
        <div ref={priceDropdownRef} className="absolute bg-white border mt-2 rounded shadow-lg">
          <div className="p-2">
            <span className="block text-gray-700">Min Price</span>
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
          <div className="p-2">
            <span className="block text-gray-700">Max Price</span>
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
          </div>
        </div>
      )}

      {/* Property Type Dropdown */}
      {typeDropdownOpen && (
        <div ref={typeDropdownRef} className="absolute bg-white border mt-2 rounded shadow-lg">
          <div className="p-2">
            <span className="block text-gray-700">Property Type</span>
            <select
              multiple
              value={selectedTypes}
              onChange={handleTypeChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              onClick={handleDoneClick}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
