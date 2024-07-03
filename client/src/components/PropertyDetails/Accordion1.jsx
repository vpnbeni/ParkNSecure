// Accordion.js
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import img from "../../images/house1/11391521469302548625.jfif";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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

  const items = [
    {
      title: "Property details",
      content: (
        <div className="mx-4 w-full xl:w-11/12">
          {property.description}
          <div className="font-semibold mt-4">Property features</div>
          <div className="font-semibold pt-4">Bedrooms</div>
          <hr />
          <li>Bedrooms: {property.bedrooms}</li>
          <div className="font-semibold mt-4">Bathrooms</div>
          <li>Bathrooms: {property.bedrooms}</li>
          
          <button className="underline mt-4 flex items-center justify-start">
            Show more <FaAngleDown />
          </button>
          <div className="flex justify-center items-center my-6 ">
            <div className="text-sm md:text-base">
              Find out more about this property.
            </div>
            <button className="bg-black text-[10px] w-1/2 md:w-auto md:text-base text-white md:px-4 py-2 rounded-full mx-3">
              Contact Agent
            </button>
          </div>
          <div className="flex items-center justify-center my-4">
            <img src={img} alt="" />
          </div>
          <div className="font-bold">Local Home Services</div>
          <hr />
          <div className="text-xs mx-4 mb-4">Advertisement</div>
        </div>
      ),
    },
  ];

  return (
    <div className="xl:w-[932px] w-full  mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{item.title}</span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </div>
          </button>
          {openIndex === index && (
            <div className="p-4 ">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
