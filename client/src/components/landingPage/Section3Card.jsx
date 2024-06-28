import img4 from "../../images/4e45c399483d66b674b7dc7eb89be4e0w-c2291696198rd-w300_h200_r4_q80.jpg";
import img2 from "../../images/ce5b10dc5be50d1c55e3a948472b9b43w-c2580457567rd-w300_h200_r4_q80.jpg";
import img3 from "../../images/c23575e115d7a19e4798f9ac97ec557aw-c3272067086rd-w300_h200_r4_q80.jpg";
import img1 from "../../images/aae5a712f9d67c7576557fff87aa736fw-c1025467218rd-w300_h200_r4_q80.jpg";

const Section3Card = () => {
  const data = [
    {
      name: "How Subtle 'White Foressing' Segregation Could Widen the...",
      image: img1,
      marker: "Trends",
    },
    {
      name: "Finally! 11 Citites Where Home Prices Are Falling -- and the...",
      image: img2,
      marker: "Trends",
    },
    {
      name: "Chip and Joanna Gaines Reveal Who Bought the 'Fixer Upper'...",
      image: img3,
      marker: "Reality Tv",
    },
    {
      name: "Living in the Suburbs or Country Is Cheaper Than the City, Right?...",
      image: img4,
      marker: "Buy",
    },
  ];
  return (
    <div className="section-1 xl:px-64 py-20">
      
      <div className="flex flex-row overflow-x-auto lg:space-x-0 space-x-4 xl:grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-[270px] md:w-auto  p-4 flex-shrink-0 shadow-lg rounded-lg">
              <div
                className="card flex justify-between items-start h-[200px]  rounded-t-lg bg-cover  p-4"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-blue-500  text-white rounded-full text-xs px-2 py-1">
                  {item.marker}
                </div>
              </div>
              <div className=" text-base p-3">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section3Card;
