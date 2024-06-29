import GetPreApproved from './GetPreApproved'
import ResultCard from './ResultCard'
import SortMenu from './SortMenu'
const SearchResults = () => {
  return (
    <div>
      <SortMenu/>
      <ResultCard/>
      <div className="flex items-center justify-center">
      <GetPreApproved/>

      </div>
    </div>
  )
}

export default SearchResults







// import GetPreApproved from './GetPreApproved';
// import ResultCard from './ResultCard';
// import SortMenu from './SortMenu';
// import PropTypes from 'prop-types';

// const SearchResults = ({ searchResults }) => {
//   return (
//     <div>
//       <SortMenu />
//       {searchResults.map((result, index) => (
//         <ResultCard key={index} result={result} />
//       ))}
//       <div className="flex items-center justify-center">
//         <GetPreApproved />
//       </div>
//     </div>
//   );
// };

// SearchResults.propTypes = {
//   searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
// SearchResults.defaultProps = {
//   searchResults: [],
// };

// export default SearchResults;