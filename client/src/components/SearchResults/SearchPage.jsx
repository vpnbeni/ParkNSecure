// SearchPage.js
import  { useState, useEffect } from 'eact';
import { fetchSearchResults } from '../api';
import SearchResults from '../SearchResults';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const results = await fetchSearchResults();
      setSearchResults(results);
      setLoading(false);
    };
    fetchResults();
  }, []);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchPage;