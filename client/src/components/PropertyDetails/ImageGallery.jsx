import { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageGallery = () => {
  const { id } = useParams();
  const { properties } = useSelector((state) => state.properties);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop._id === id);
    if (selectedProperty && selectedProperty.images) {
      const imgData = selectedProperty.images.map((img) => {
        return `http://192.168.1.77:4000/Images/${img.split("public\\Images\\").join("")}`;
      });
      setImages(imgData);
      setMainImage(imgData[0]);
    }
  }, [id, properties]);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const currentIndex = images.findIndex((img) => img === mainImage) + 1; // Adding 1 to make it 1-based index

  if (!images.length) {
    return <div>Property not found.</div>;
  }

  return (
    <>
      <div className="flex flex-col items-start justify-center md:mr-3">
        <div className="text-xs mx-1 md:mx-4">
          Listed by: <br className="hidden md:block" /> David R. Hall with
          Genesis Properties St. Croix
        </div>
        <div className="container flex w-full lg:w-[642px] xl:w-[932px]">
          <div className="relative aspect-w-300 aspect-h-375 w-full 2xl:w-[725px] max-w-4xl mx-auto">
            <img
              src={mainImage}
              alt="Main"
              className="w-full md:rounded-l-xl h-[300px] lg:h-[420px]"
            />
            <button
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-xl"
              onClick={() =>
                handleImageClick(
                  images[
                    (images.findIndex((img) => img === mainImage) -
                      1 +
                      images.length) %
                      images.length
                  ]
                )
              }
            >
              &lt;
            </button>
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-xl"
              onClick={() =>
                handleImageClick(
                  images[
                    (images.findIndex((img) => img === mainImage) + 1) %
                      images.length
                  ]
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
            {images.length > 5
              ? images.slice(2).map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    className={`w-[207px] h-full cursor-pointer ${
                      index === 0
                        ? "rounded-tr-xl"
                        : index === images.slice(2).length - 1
                        ? "rounded-br-xl"
                        : ""
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))
              : images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    className={`w-[207px] h-full cursor-pointer ${
                      index === 0
                        ? "rounded-tr-xl"
                        : index === images.length - 1
                        ? "rounded-br-xl"
                        : ""
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
          </div>
        </div>
        <div className="underline text-xs mx-2 my-4">
          How much home can you afford?
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
