import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRulerCombined, FaHammer } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const { properties } = useSelector((state) => state.properties);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop._id === id);
    setProperty(selectedProperty);
  }, [id, properties]);

  if (!property) {
    return <div>Property not found.</div>;
  }

  const details = [
    { name: "Property type", value: property.propertyType, src: <GoHome className="text-3xl mr-2" /> },
    { name: "Time on Realtor.com", value: property.daysOnRealtor+" days", src: <IoCalendarClearOutline className="text-3xl mr-2" /> },
    { name: "Price per sqft", value: property.pricePerSqft, src: <FaRulerCombined className="text-3xl mr-2" /> },
    { name: "Year built", value: property.yearBuilt, src: <FaHammer className="text-3xl mr-2" /> },
  ];

  return (
    <div className="xl:w-[652px] text-wrap mx-4">
      <div className="group relative">
        <div className="flex flex-col justify-start">
          <div>
            <h3 className="text-base text-gray-700 mb-4">
              <div className="flex items-center justify-start">
                <FaCircle className={`mr-2 text-green-600`} />
                {property.propertyType}
              </div>
            </h3>
            <h1 className="text-2xl font-semibold my-2">{property.price}</h1>
            <div className="flex text-base md:text-sm my-4">
              <p className="mt-1 text-gray-900 mr-2">
                <span className="font-semibold">{property.bedrooms}</span> bed
              </p>
              <p className="mt-1 text-gray-900 mx-2">
                <span className="font-semibold">{property.bathrooms}</span> bath
              </p>
              <p className="mt-1 text-gray-900 ml-2">
                <span className="font-semibold">{property.area}</span> sqft
              </p>
            </div>
            <p className="mt-1 text-xs md:text-sm text-gray-900 my-4">
              {property.address}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:flex w-full my-4">
            {details.map((item) => (
              <div key={item.name} className="flex items-center justify-center mx-4">
                <div className="">{item.src}</div>
                <div className="flex flex-col">
                  <div className="text-base font-semibold">{item.value}</div>
                  <div className="text-xs">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:text-base my-4 text-xs flex items-end justify-start font-medium w-full">
            <div className="px-4 py-2 border border-black rounded-full bg-black text-white hover:text-black hover:bg-white">
              Ask a Question
            </div>
            <div className="px-4 ml-2 py-2 border border-black rounded-full">
              Share this Home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
