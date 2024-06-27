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