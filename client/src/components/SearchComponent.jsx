// src/components/SearchBar.js
    import { useDispatch } from 'react-redux';
    import { fetchProperties } from './propertiesSlice';
    import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(fetchProperties());
    navigate('/propertyDetails'); // Redirect to properties page
  };

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
