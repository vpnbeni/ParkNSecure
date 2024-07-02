// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchProperties } from "../redux/propertiesSlice";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ width }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(fetchProperties());
    navigate("/search"); // Redirect to properties page
  };
  return (
    <div
      className={`flex relative  text-sm lg:text-base  items-center bg-white  border-2 border-gray-300 rounded-full px-4 py-2 lg:py-2 shadow-md ${width}`}
    >
      <input
        type="text"
        placeholder="Commonwealth of the Northern Mariana Islands"
        className="pr-8 bg-transparent flex-grow outline-none overflow-hidden whitespace-nowrap text-ellipsis"
      />

      <button
        className="bg-black searchBtn absolute  right-2 text-white p-2 rounded-full "
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};
SearchBar.propTypes = {
  width: PropTypes.string.isRequired,
};
export default SearchBar;
