import PropTypes from 'prop-types';
const ContactForm = ({ rounded, border }) => {
  return (
    <div className={`p-2 md:p-4 max-w-md  bg-white shadow-md ${rounded} ${border}`} >
      <h2 className="text-2xl font-semibold mb-4 text-[20px]">More about this property</h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            className="mt-1 p-2  block w-full rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder=" Email*"
            className="mt-1 p-2 block w-full rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            className="mt-1  p-2 block w-full rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder="how can an agent help?"
            rows="4"
            className="mt-1 p-2 block w-full rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            How can an agent help?
          </textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Email agent
          </button>
        </div>
      </form>
      <p className="mt-4 text-[10px] text-gray-500">
        By proceeding, you consent to receive calls and texts at the number you
        provided, including marketing by autodialer and prerecorded and
        artificial voice, and email, from realtor.com and others about your
        inquiry and other home-related matters, but not as a condition of any
        purchase.
        <a href="#" className="text-indigo-500">
          {" "}
          More...
        </a>
      </p>
    </div>
  );
};
ContactForm.propTypes = {
    rounded: PropTypes.string,
    border: PropTypes.string,
  };
  
 
  
export default ContactForm;
