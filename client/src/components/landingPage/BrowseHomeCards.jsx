import Discover from "./Discover.jsx";
import img1 from "../../images/3152914425a3d76d8d9a60b8fd7dd8ffl-m3057984230od-w480_h360.jpg";
import img2 from "../../images/808dd2549e205b60214eb593e5d5f993l-m558421797od-w480_h360.jpg";
import img3 from "../../images/7491ee00d02b80e77dd963ba2823fc0el-m900943348od-w480_h360.jpg";
import img4 from "../../images/856f982e8c39f43add366d2c6ff40d1dl-m1299674549od-w480_h360.jpg";
import img5 from "../../images/38dae72661173d419e1cb4309dbece6cl-m2355595825od-w480_h360.jpg";
import img6 from "../../images/c4ac83fdb0306472af41a40ff0fa8bdcc-f977837625od-w480_h360.jpg";
import img7 from "../../images/eeb85ed9754cf9bb9c45a2aa496c6986l-m3417782331od-w480_h360.jpg";
import img8 from "../../images/dd772350dc1498fa7623d60122f2202cl-m4145075976od-w480_h360.jpg";

const BrowseHomeCards = () => {
  const data = [
    { name: "New Listings", image: img1, amount: "1,720" },
    { name: "Price Reduced", image: img2, amount: "1,511" },
    { name: "NOpen Houses", image: img3, amount: "650" },
    { name: "Recently Sold", image: img4, amount: "8,953" },
    { name: "New Construction", image: img5, amount: "423" },
    { name: "New Home Communities", image: img6, amount: "4" },
    { name: "Land", image: img7, amount: "751" },
    { name: "Foreclosures", image: img8, amount: "34" },
  ];
  return (
    <div className="section-1  px-64 py-20">
      <div className="text-2xl font-semibold">
        Browse homes in Los Angeles, CA
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card flex justify-between items-start h-[200px]  rounded-lg bg-cover  p-4"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="text-white text-lg font-bold">{item.name}</div>
              <div className="bg-white  text-black rounded-full text-xs px-2 py-1">
                {item.amount}
              </div>
            </div>
          );
        })}
      </div>
      <Discover />
    </div>
  );
};

export default BrowseHomeCards;
