// api.js
import axios from 'axios';

const apiUrl = 'https://your-backend-api.com/search'; // Replace with your API URL

export const fetchSearchResults = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};