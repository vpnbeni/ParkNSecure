import bgImg from "../../images/hp-hero-desktop.jpg";
import img1 from "../../images/17007063448808443733.png";
import SearchBar from "../SearchBar";
const HeroSection = () => {
  return (
    <div
      className="hero-section h-[450px] bg-cover bg-no-repeat bg-center  w-full"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="heading text-3xl md:text-5xl  text-center font-bold text-white py-8 md:py-14">
        The #1 site real estate <br /> professionals trust*
      </div>
      <div className="links flex flex-wrap justify-center mx-4 my-4 text-white font-semibold">
        {[
          "Buy",
          "Rent",
          "Sell",
          "Pre-approval",
          "Agents",
          "Just Sold",
          "Home value",
        ].map((item, index) => {
          return (
            <div
              className={`text-base mx-0.5 my-0 h-full translate-y-0.5 p-2 cursor-pointer border-b-4 border-transparent hover:border-white ${
                index === 5 && "hidden lg:block"
              }  ${index === 4 && "hidden lg:block"}`}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex mt-4 pt-1 justify-center items-center ">
        <div className="w-10/12 md:w-1/2 xl:w-[30vw]">
          <SearchBar width={` `}/>
        </div>
      </div>
      <div className="mb-0 mt-10 md:mt-4 pt-[3px] flex justify-center items-center text-white ">
        <img className="w-1/6 md:w-44" src={img1} alt="" />
        <span className="px-4 font-bold text-base">
          Get a digital portrait <br /> when you claim your home
        </span>
        <button className=" w-[100px] border-0 bg-red-600 text-white hover:bg-white hover:text-red-600 md:px-4 py-1 mr-4 md:py-2 rounded-full text-xs md:text-base">
          Claim now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
