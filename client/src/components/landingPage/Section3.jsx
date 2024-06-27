import bgImg from "../../images/5fbf1f3a7fbcdf7cd150047ede12074cw-c424191661srd_q80.jpg";
import Section3Card from "./Section3Card";
const Section3 = () => {
  return (
    <div className="section-3">
      <div className="relative h-[500px] p-10 text-start md:text-center bg-black bg-opacity-50 text-white  shadow-lg rounded-lg">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center px-2 xl:px-64"
          style={{
            backgroundImage: `url(${bgImg})`,
            filter: "blur(.5)", // Add your desired filter here
            zIndex: -1,
            width: "100vw",
            height: "500px",
          }}
        ></div>
        <div className="flex flex-col md:items-center  justify-between h-[400px] py-14 md:py-20">
          <h1 className="pl-2 text-2xl  mb-4 ">Unique Homes</h1>
          <p className="text-2xl font-semibold px-2 md:px[10vw] lg:px[20vw] xl:px-[30vw]">
            Say Hello to Summer: Bask in the Season in These 5 Luxe Beach
            Houses, All Priced Below $1M
          </p>
          <button className="border bg-black text-white text-base rounded-full px-6 py-2">
            Read Article
          </button>
        </div>
      </div>
    <Section3Card/>
    </div>
  );
};

export default Section3;
