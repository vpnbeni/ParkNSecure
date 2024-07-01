import { useEffect } from 'react'
import GetPreApproved from './GetPreApproved'
import ResultCard from './ResultCard'
import SortMenu from './SortMenu'
import store from '../../redux/store';
import { fetchProperties } from '../../redux/propertiesSlice';
const SearchResults = () => {
  useEffect(() => {
    store.dispatch(fetchProperties());
  }, []);
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

export default SearchResults;