import SearchBar from "../SearchBar";
import Filter from "./Filters";
import FilterForMobile from "./FilterForMobile";



export default function SortMenu() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-1 lg:m-3 w-9/12 md:w-auto ">
          <SearchBar width={` `} />
        </div>
        
        <Filter />
        <FilterForMobile />
      </div>
    </>
  );
}
