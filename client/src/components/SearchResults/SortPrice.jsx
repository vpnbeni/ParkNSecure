import  { useState } from 'react';
import axios from 'axios'

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState('Any price');
  const [maxPrice, setMaxPrice] = useState('Any price');
  const [isOpen, setIsOpen] = useState(false);

  const minPriceOptions = ['Any price', '$120k', '$250k', '$350k', '$450k', '$600k', '$700k', '$800k'];
  const maxPriceOptions = ['Any price', '$200k', '$400k', '$600k', '$800k', '$1M', '$1.2M', '$1.4M'];

  const handleMinPriceChange = (price) => {
    setMinPrice(price);
    if (price !== 'Any price') {
      setIsOpen(true);
    }
  };

  const handleMaxPriceChange = (price) => {
    setMaxPrice(price);
    setIsOpen(false);
    fetchFilteredData(price, minPrice);
  };

  const fetchFilteredData = async (max, min) => {
    const minPriceValue = min === 'Any price' ? '' : min.replace(/[^0-9]/g, '');
    const maxPriceValue = max === 'Any price' ? '' : max.replace(/[^0-9]/g, '');

    try {
      const response = await axios.get(`http://192.168.1.77:4000/api/properties/filter?maxPrice=${maxPriceValue}&minPrice=${minPriceValue}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clearFilter = () => {
    setMinPrice('Any price');
    setMaxPrice('Any price');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="border px-4 py-2 rounded font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {minPrice !== 'Any price' || maxPrice !== 'Any price'
          ? `${minPrice} to ${maxPrice} `
          : 'Price'}
        {(minPrice !== 'Any price' || maxPrice !== 'Any price') && (
          <span
            className="ml-2 text-red-500 cursor-pointer"
            onClick={clearFilter}
          >
            &times;
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute bg-white border mt-2 rounded shadow-lg flex ">
          <div className="p-2">
            <div className="block text-gray-700 w-[100px]">Min Price</div>
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
            <span className="block text-gray-700 w-[100px]">Max Price</span>
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
