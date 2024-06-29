import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import img1 from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m122395192rd-w1280_h960.webp";
import img2 from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m655227135rd-w1280_h960.webp";
import img3 from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m799624703rd-w960_h720.webp";
import img4 from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m821490395rd-w1280_h960.webp";
import img5 from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m1667740924rd-w960_h720.webp";
import { Link } from "react-router-dom";

const images = [
  { id: 1, src: img1, label: "Main Image 1" },
  { id: 2, src: img2, label: "Main Image 2" },
  { id: 3, src: img3, label: "Kitchen" },
  { id: 4, src: img4, label: "Bedroom" },
  { id: 5, src: img5, label: "Bathroom" },
];

const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const currentIndex = images.findIndex((img) => img.src === mainImage) + 1; // Adding 1 to make it 1-based index

  return (
    <>
      <div className=" flex flex-col items-start justify-center md:mr-3">
        <div className=" text-xs mx-1 md:mx-4">
        Listed by: <br className="hidden md:block"/> David R. Hall with Genesis Properties St. Croix
        </div>
        <div className="container flex w-auto  xl:w-[642px] 2xl:w-[932px]">
          <div className="relative aspect-w-300 aspect-h-375 2xl:w-[725px] max-w-4xl mx-auto ">
            <img
              src={mainImage}
              alt="Main"
              className=" md:rounded-l-xl w-auto h-[300px] "
            />
            <button
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-xl"
              onClick={() =>
                handleImageClick(
                  images[
                    (images.findIndex((img) => img.src === mainImage) -
                      1 +
                      images.length) %
                      images.length
                  ].src
                )
              }
            >
              &lt;
            </button>
            <button
              className="absolute right-1    top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-xl"
              onClick={() =>
                handleImageClick(
                  images[
                    (images.findIndex((img) => img.src === mainImage) + 1) %
                      images.length
                  ].src
                )
              }
            >
              &gt;
            </button>

            <Link
              to={"/gallery"}
              className="absolute bottom-1 left-1 bg-gray-700 text-white p-2 rounded-xl flex items-center justify-center"
            >
              <IoCameraOutline className="text-xl text-white mr-3" />
              {currentIndex}/{images.length}
            </Link>
          </div>
          <div className="hidden md:grid grid-rows-3 gap-[2px] ml-1">
            {images.slice(2).map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.label}
                className={`w-[207px] h-full cursor-pointer ${
                  index === 0
                    ? "rounded-tr-xl"
                    : index === images.slice(2).length - 1
                    ? "rounded-br-xl"
                    : ""
                }`}
                onClick={() => handleImageClick(image.src)}
              />
            ))}
          </div>
        </div>
        <div className="underline text-xs mx-2 my-4">How much home can you afford?</div>
      </div>
    </>
  );
};

export default ImageGallery;
