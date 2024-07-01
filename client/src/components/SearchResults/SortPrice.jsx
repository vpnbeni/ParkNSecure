import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchFilteredProperties,
  fetchProperties,
} from "../../redux/propertiesSlice";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState("Any price");
  const [maxPrice, setMaxPrice] = useState("Any price");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

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

  const convertPrice = (price) => {
    if (price.includes("k")) {
      return price.replace("k", "000").replace("$", "");
    } else if (price.includes("M")) {
      return price.replace("M", "000000").replace("$", "");
    } else if (price.includes(".")) {
      console.log(
        price.replace(".", "").replace("M", "000000").replace("$", "")
      );
      return price.replace(".", "").replace("M", "000000").replace("$", "");
    }
    return price.replace("$", "");
  };

  useEffect(() => {
    const minPriceValue =
      minPrice === "Any price" ? "" : convertPrice(minPrice);
    const maxPriceValue =
      maxPrice === "Any price" ? "" : convertPrice(maxPrice);

    if (minPriceValue === "" && maxPriceValue === "") {
      dispatch(fetchProperties());
    } else {
      dispatch(
        fetchFilteredProperties({
          minPrice: minPriceValue,
          maxPrice: maxPriceValue,
        })
      );
    }
  }, [minPrice, maxPrice, dispatch]);

  const handleMinPriceChange = (price) => {
    setMinPrice(price);
    if (price !== "Any price") {
      setIsOpen(true);
    }
  };

  const handleMaxPriceChange = (price) => {
    setMaxPrice(price);
    setIsOpen(false);
  };

  const clearFilter = () => {
    setMinPrice("Any price");
    setMaxPrice("Any price");
    setIsOpen(false);
    dispatch(fetchProperties());
  };

  return (
    <div className="relative">
      <button
        className="border px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {minPrice !== "Any price" || maxPrice !== "Any price"
          ? `${minPrice} to ${maxPrice} `
          : "Price"}
        {(minPrice !== "Any price" || maxPrice !== "Any price") && (
          <span
            className="ml-2 text-red-500 cursor-pointer"
            onClick={clearFilter}
          >
            &times;
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute bg-white border mt-2 rounded shadow-lg">
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
    </div>
  );
};

export default PriceFilter;
