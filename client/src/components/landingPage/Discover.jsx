import { useState, useEffect } from "react";
import img1 from "../../images/spot-badge-cash-reward.png";
import img2 from '../../images/spot-calculator.png';
import img3 from '../../images/spot-money-stack.png';
import img4 from '../../images/spot-rent.png';
import img5 from '../../images/spot-sell.png';
import img6 from '../../images/spot-profile.png';
import img7 from '../../images/spot-pending.png';
import img8 from '../../images/spot-profile.png';
import img9 from '../../images/spot-property-making-an-offer.png';
const App = () => {
  const [activeTab, setActiveTab] = useState("Buying");
  const [content, setContent] = useState(null);

  useEffect(() => {
    const renderContent = () => {
      switch (activeTab) {
        case "Buying":
          return (
            <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl h-[250px]">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Find out how much you can afford
                    <img src={img1} alt="" />
                  </h2>
                  <p className="mb-4 text-sm ">
                    Well help you estimate your budget range. Save to your buyer
                    profile to help in your search.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Try our affordability calculator
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Understand your monthly costs
                    <img src={img2} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Get an in-depth look at what your monthly and closing costs
                    will look like based on your financial situation and goals.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Try our mortgage calculator
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Get help with your down payment
                    <img src={img3} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    You may be able to buy a home with just 3.5% down. Saving
                    for that can be challenging—down payment assistance programs
                    can help.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Find down payment help
                </a>
              </div>
            </div>
          );
        case "Renting":
          return (
            <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl h-[250px]">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Rent with the option to buy
                    <img src={img4} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Home Partners of America will buy a home that you love and
                    lease it to you with the option to buy, rent, or walk away
                    without penalty.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Check program availability
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Find out if its better to rent or buy
                    <img src={img5} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Try our rent or buy calculator to determine if buying or
                    renting a home makes more financial sense for your
                    situation.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Try our rent or buy calculator
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Save time with a renter profile
                    <img src={img6} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Simplify the home search process with an Avail renter
                    profile. Create yours for free to share with multiple
                    landlords. .
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Create a profile
                </a>
              </div>
            </div>
          );
        case "Selling":
          return (
            <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl h-[250px]">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Buy now, sell later
                    <img src={img7} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Skip the repairs and showings. Our partners can help you buy
                    your new home first, then sell your old one.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Search option from your partners
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Track your home value
                    <img src={img8} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    See your RealEstimate℠ valuation information over time
                    compared to homes in your are.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Get your RealEstimate
                </a>
              </div>
              <div className="flex flex-col justify-between border-2 p-4 rounded-xl ">
                <div>
                  <h2 className="text-base  font-semibold mb-6 flex justify-between">
                    Get offers for your home
                    <img src={img9} alt="" />

                  </h2>
                  <p className="mb-4 text-sm ">
                    Visit Seller’s Marketplace to find out how you can sell
                    without listing or stay in your home while you finance the
                    purchase of your next one.
                  </p>
                </div>
                <a href="#" className="text-blue-500 ">
                  Explore my offers
                </a>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    setContent(renderContent());
  }, [activeTab]);

  return (
    <div className="p-4 sectioin-2">
      <h1 className="text-2xl font-bold mb-4">Discover how we can help</h1>
      <div className="flex justify-start mb-4">
        <button
          className={`mx-2 py-2 px-4 rounded-full ${
            activeTab === "Buying" ? "bg-black text-white" : ""
          }`}
          onClick={() => setActiveTab("Buying")}
        >
          Buying
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-full ${
            activeTab === "Renting" ? "bg-black text-white" : ""
          }`}
          onClick={() => setActiveTab("Renting")}
        >
          Renting
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-full ${
            activeTab === "Selling" ? "bg-black text-white" : ""
          }`}
          onClick={() => setActiveTab("Selling")}
        >
          Selling
        </button>
      </div>
      {content}
    </div>
  );
};

export default App;
