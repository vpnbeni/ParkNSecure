import { FaCircle, FaHome } from "react-icons/fa";

import img1 from "../../images/7491ee00d02b80e77dd963ba2823fc0el-m900943348od-w480_h360.jpg";
import img2 from "../../images/6139728c4527ef2fd71f091801cb04b2l-m799624703rd-w960_h720.jpg";
import img3 from "../../images/678ce73ed7fafdc65d32f5163a529ce1l-m3328558255rd-w960_h720.jpg";
import img4 from "../../images/4303ba0292e644c65c5638b860c896a4l-m2045889581rd-w960_h720.jpg";
import img6 from "../../images/856f982e8c39f43add366d2c6ff40d1dl-m1299674549od-w480_h360.jpg";
import img5 from "../../images/431be6ec19c70dd0ddd1b8f9af1822d2l-m2899277920rd-w960_h720.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const SimilarHomes = () => {
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
      imageSrc: img1,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 2,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img2,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 3,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img3,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 4,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img4,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 5,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img5,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 6,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 7,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 8,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 9,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 10,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 11,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 12,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 13,
      name: "Basic Tee",
      price: "$235,000",
      bed: "3",
      bath: "2",
      area: "1254ft",
      address: "321 Golden Rock Co Christiansted,VI 00820",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's Basic Tee in black.",
      agent: "Email Agent",
      color: "Black",
      status: "Pending",
      statusColor: "yellow",
    },

    // More products...
  ];
  return (
    <>
      <div className="SimilarHomes   w-full 2xl:w-[1250px]">
        <div className="flex justify-start items-center ml-4 font-bold text-xl">
          <FaHome className="text-xl font-semibold mx-2 "/>
          Similar Homes
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={true}
          dotListClass="custom-dot-list-style"
        >
          {products.map((product) => (
            <div className="mx-2 my-0" key={product.id}>
              <div className="slider w-[200px]">
                <div className="group relative rounded-lg shadow-lg">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[173px]">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between  p-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a
                          className="flex items-center justify-start"
                          href={product.href}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          <FaCircle
                            className={`mr-2 text-${product.statusColor}-600`}
                          />
                          {product.status}
                        </a>
                      </h3>
                      <h1 className="text-2xl font-semibold my-2">
                        {product.price}
                      </h1>
                      <div className="flex text-xs md:text-sm">
                        <p className="mt-1  text-gray-900 mr-2 ">
                          <span className="font-semibold">{product.bed}</span>{" "}
                          bed
                        </p>
                        <p className="mt-1  text-gray-900 mx-2 ">
                          <span className="font-semibold">{product.bath}</span>{" "}
                          bed
                        </p>
                        <p className="mt-1  text-gray-900 ml-2 ">
                          <span className="font-semibold">{product.area}</span>{" "}
                          bed
                        </p>
                      </div>
                      <p className="mt-1  text-[10px]  text-gray-900 2xl:w-2/3 ">
                        {product.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="SimilarHomes w-full 2xl:w-[1250px]">
        <div className="flex justify-start items-center ml-4 font-bold text-xl">
          <FaHome className="text-xl font-semibold mx-2 "/>
          Nearby Homes
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={true}
          dotListClass="custom-dot-list-style"
        >
          {products.map((product) => (
            <div className="mx-2 my-0" key={product.id}>
              <div className="slider w-[200px]">
                <div className="group relative rounded-lg shadow-lg">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[173px]">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between  p-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a
                          className="flex items-center justify-start"
                          href={product.href}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          <FaCircle
                            className={`mr-2 text-${product.statusColor}-600`}
                          />
                          {product.status}
                        </a>
                      </h3>
                      <h1 className="text-2xl font-semibold my-2">
                        {product.price}
                      </h1>
                      <div className="flex text-xs md:text-sm">
                        <p className="mt-1  text-gray-900 mr-2 ">
                          <span className="font-semibold">{product.bed}</span>{" "}
                          bed
                        </p>
                        <p className="mt-1  text-gray-900 mx-2 ">
                          <span className="font-semibold">{product.bath}</span>{" "}
                          bed
                        </p>
                        <p className="mt-1  text-gray-900 ml-2 ">
                          <span className="font-semibold">{product.area}</span>{" "}
                          bed
                        </p>
                      </div>
                      <p className="mt-1  text-[10px]  text-gray-900 2xl:w-2/3 ">
                        {product.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SimilarHomes;
