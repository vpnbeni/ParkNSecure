import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader"
const ResultCard = () => {
  const { properties, status, error } = useSelector(
    (state) => state.properties

  );
  

  // console.log(properties ,'from card')
  if (status === "loading") {
    return <div>
      <Loader/>
    </div>;
  }

  if (status === "failed") {
    return <div className="w-full h-screen">Error: {error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Virgin Islands of the United States Real Estate & Homes for Sale
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
          {properties.map((product) => (
            <Link 
              to={`/propertyDetails/${product._id}`} 
              key={product._id}
            >
              <div className="text-xs">
                Brokered by Genesis Properties St. Croix
              </div>
              <div className="group relative rounded-lg shadow-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`http://192.168.1.77:4000/Images/${product.images[0]
                      .split("public\\Images\\")
                      .join("")}`}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between p-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div className="flex items-center justify-start">
                        <span aria-hidden="true" className="absolute inset-0" />
                        <FaCircle className={`mr-2 text-green-600`} />
                        {product.propertyType}
                      </div>
                    </h3>
                    <h1 className="text-2xl font-semibold my-2">
                      $ {product.price}
                    </h1>
                    <div className="flex text-xs md:text-sm">
                      <p className="mt-1 text-gray-900 mr-2">
                        <span className="font-semibold">{product.bedrooms}</span> bed
                      </p>
                      <p className="mt-1 text-gray-900 mx-2">
                        <span className="font-semibold">{product.bathrooms}</span> bath
                      </p>
                      <p className="mt-1 text-gray-900 ml-2">
                        <span className="font-semibold">{product.area}</span> sqft
                      </p>
                    </div>
                    <p className="mt-1 text-xs md:text-sm text-gray-900 2xl:w-2/3">
                      {product.address}
                    </p>
                  </div>
                  <div className="md:text-sm text-xs flex items-end justify-end font-medium text-gray-900 w-1/2">
                    <div className="px-2 py-2 border border-black rounded-full">
                      Email Agent
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
