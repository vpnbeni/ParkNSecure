// src/components/Card.js
import PropTypes from 'prop-types';

const Card = ({ price, beds, baths, sqft, address, imgSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imgSrc} alt={address} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-lg font-bold">${price.toLocaleString()}</div>
        <div className="text-gray-700">{beds} bed {baths} bath {sqft} sqft</div>
        <div className="text-gray-500">{address}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  price: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  sqft: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Card;
