import { FaCircle } from "react-icons/fa";
const ResultCard = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 1,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },

    // More products...
  ];
  return (
    <div className="bg-white">
      <div className=" px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Virgin Islands of the United States Real Estate & Homes for Sale
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
          <div className="text-xs">
            Brokered by Genesis Properties St. Croix
          </div>
              <div className="group relative rounded-lg shadow-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between p-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
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
                    <div className="flex">
                      <p className="mt-1 text-sm text-gray-900 mr-2 ">
                        <span className="font-semibold">{product.bed}</span> bed
                      </p>
                      <p className="mt-1 text-sm text-gray-900 mx-2 ">
                        <span className="font-semibold">{product.bath}</span>{" "}
                        bed
                      </p>
                      <p className="mt-1 text-sm text-gray-900 ml-2 ">
                        <span className="font-semibold">{product.area}</span>{" "}
                        bed
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-900 w-2/3 ">
                      {product.address}{" "}
                    </p>
                  </div>
                  <div className="text-sm  flex items-end font-medium text-gray-900 ">
                    <div className="px-2 py-2 border border-black rounded-full">
                      {product.agent}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
