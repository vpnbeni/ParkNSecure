// src/components/PropertiesList.js
import { useSelector } from 'react-redux';

const PropertiesList = () => {
  const { properties, status, error } = useSelector((state) => state.properties);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {properties.map((property) => (
        <div key={property._id}>
          <h3>{property.address}</h3>
          <p>Price: ${property.price}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Description: {property.description}</p>
          <img src={property.images[0]} alt={property.description} />
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;
