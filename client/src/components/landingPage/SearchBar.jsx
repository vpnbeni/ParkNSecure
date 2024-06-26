
const SearchBar = () => {
  return (
    <div className="flex items-center bg-white w-10/12 md:w-1/2 xl:w-[30vw] border-2 border-gray-300 rounded-full px-4 py-2 shadow-md">
      <input
        type="text"
        placeholder="Commonwealth of the Northern Mariana Islands"
        className="bg-transparent flex-grow outline-none"
      />
      <button className="text-black mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button className="bg-black text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
