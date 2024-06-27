import img from "../../images/widget-how-to-buy.jpg";
const GetPreApproved = () => {
  return (
    <div className="getPreApproved flex flex-col md:grid grid-cols-2 gap-4 p-3 my-10">
      <div className=" p-2 xl:p-4 border-black border rounded-xl">
        <h1 className="font-semibold text-base my-4">Get Prepared to Buy</h1>
        <div
          className="h-[150px] lg:h-[250px] w-full lg:w-[527px] bg-cover bg-no-repeat bg-center  "
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        <h1 className="font-semibold text-base mt-4">Get pre-approved</h1>
        <p className="mb-4 text-sm">
          A pre-approval letter from a lender makes your offer stronger.
        </p>
        <button className="border border-black px-6 py-2 rounded-full">
          Get Pre-Approved
        </button>
      </div>
      <div className="movingCostCalxulator h-full  my-3 md:my-0">
        <div className="p-2 rounded-xl border py-4 border-black h-full ">
          <div className="text-basse mx-1 xl:mx-3 text-black font-semibold">
            Moving cost calculator
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="w-full m-1 xl:m-3">
              <label
                htmlFor="movingFrom"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Move From
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="movingFrom"
                  id="movingFrom"
                  autoComplete="given-name"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full m-1 xl:m-3">
              <label
                htmlFor="movingTo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Move To
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="movingTo"
                  id="movingTo"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="w-full m-1 xl:m-3">
              <label
                htmlFor="size"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Size of move
              </label>
              <div className="mt-2 ">
                <select
                  id="size"
                  name="size"
                  autoComplete="size-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>Studio</option>
                  <option>1 bed</option>
                  <option>2 bed</option>
                  <option>2-3 bed</option>
                  <option>3 bed</option>
                  <option>4 bed</option>
                  <option>5 bed</option>
                </select>
              </div>
            </div>
            <div className="w-full m-1 xl:m-3">
              <label
                htmlFor="parking"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Parking
              </label>
              <div className="mt-2">
                <select
                  id="parking"
                  name="parking"
                  autoComplete="parking-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>Partial</option>
                  <option>Full</option>
                </select>
              </div>
            </div>
          </div>
          <button className="border-0 bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border  m-2">Get Estimates</button>
        </div>
      </div>
    </div>
  );
};

export default GetPreApproved;
