import EmailAgentForm from "./EmailAgentForm";
import bgImg from "../../images/house1/6139728c4527ef2fd71f091801cb04b2l-m122395192rd-w1280_h960.webp";
const LearnMore = () => {
  return (
    <div className="LearnMore w-[944px]">
      <div className="text-xl text-center my-4">
        Learn more about 324 Golden Rock Co
      </div>
      <div
        className="  justify-start   rounded-xl"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <EmailAgentForm rounded="rounded-l-xl" border="border border-black" />
      </div>
      <div className="flex justify-between items-center text-gray-600 text-sm">
        <div className="my-4">
          <ul>
            <li className="my-1">Listed by:</li>
            <li className="my-1">David R. Hall</li>
            <li className="my-1">#2-45069-4B</li>
            <li className="my-1">Brokered by</li>
            <li className="my-1">Genesis Properties St. Croix</li>
          </ul>
        </div>
        <div className="w-2/3">
          <div className="flex">
            <span className="w-[200px]">Data Source:</span>
            <span>VirginIslands</span>
          </div>
          <hr />
          <div className="flex">
            <span className="w-[200px]">Sources Property ID:</span>
            <span>
            24-820</span>
          </div>
          <hr />
          <div className="flex">
            <span className="w-[200px]">Data Source Copyright:</span>
            <span>
            © 2024, St.Croix Board of REALTORS® and St. Thomas Board of REALTORS®- All rights reserved. </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
