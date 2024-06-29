import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../images/7491ee00d02b80e77dd963ba2823fc0el-m900943348od-w480_h360.jpg";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRulerCombined } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
const Details = () => {
  let products = [
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img1,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
  ];
  let details = [
    { name: "Property type", value: "Condo", src: <GoHome  className="text-3xl mr-2"/> },
    {
      name: "Time on Realtor.com",
      value: "56 days",
      src: <IoCalendarClearOutline  className="text-3xl mr-2"/>,
    },
    { name: "Price per sqft", value: "$168", src: <FaRulerCombined  className="text-3xl mr-2"/> },
    { name: "Year built", value: "1969", src: <FaHammer  className="text-3xl mr-2"/> },
  ];

  return (
    <>
      <div className="xl:w-[652px] text-wrap mx-4">
        {products.map((product) => (
          <Link to={"/propertyDetails"} key={product.id}>
            <div className="group relative ">
              <div className=" flex flex-col justify-start  ">
                <div>
                  <h3 className="text-base text-gray-700 mb-4">
                    <a
                      className="flex items-center justify-start"
                      href={product.href}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      <FaCircle
                        className={`mr-2 text-${product.statusColor}-600`}
                      />
                      {product.status}
                    </a>
                  </h3>
                  <h1 className="text-2xl font-semibold my-2">
                    {product.price}
                  </h1>
                  <div className="flex text-base md:text-sm my-4">
                    <p className="mt-1  text-gray-900 mr-2 ">
                      <span className="font-semibold">{product.bed}</span> bed
                    </p>
                    <p className="mt-1  text-gray-900 mx-2 ">
                      <span className="font-semibold">{product.bath}</span> bed
                    </p>
                    <p className="mt-1  text-gray-900 ml-2 ">
                      <span className="font-semibold">{product.area}</span> bed
                    </p>
                  </div>
                  <p className="mt-1  text-xs md:text-sm text-gray-900 my-4 ">
                    {product.address}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:flex w-full my-4">
                {details.map((item) => {
                  return (
                    <div
                      key={item}
                      className="flex items-center justify-center mx-4"
                    >
                      <div className="">{item.src}</div>
                      <div className="flex flex-col ">
                        <div className="text-base font-semibold">{item.value}</div>
                        <div className="text-xs">{item.name}  </div>
                      </div>
                    </div>
                  );
                })}
                </div>

                <div className="md:text-base my-4 text-xs  flex items-end justify-start font-medium w-full">
                  <div className="px-4 py-2 border border-black rounded-full bg-black text-white hover:text-black hover:bg-white">
                    Ask a Question
                  </div>
                  <div className="px-4 ml-2 py-2 border border-black rounded-full">
                    Share this Home
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Details;
