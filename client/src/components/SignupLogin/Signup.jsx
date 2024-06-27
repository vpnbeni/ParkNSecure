import PropTypes from 'prop-types';

const SignupModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3" onClick={onClose}>
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Log in or create an account</h2>
        <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <button className="w-full bg-blue-500 text-white p-2 rounded mb-4">Continue</button>
        <button className="w-full bg-red-500 text-white p-2 rounded mb-4">Continue with Google</button>
        <button className="w-full bg-blue-700 text-white p-2 rounded mb-4">Continue with Facebook</button>
        <button className="w-full bg-gray-900 text-white p-2 rounded mb-4">Continue with Apple</button>
        <button className="w-full bg-gray-500 text-white p-2 rounded mb-4">Email Me a Link</button>
        <p className="text-sm text-center mt-4">Are you a real estate agent? <a href="#" className="text-blue-500">Log in or create an account here</a></p>
      </div>
    </div>
  );
};

SignupModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupModel;
