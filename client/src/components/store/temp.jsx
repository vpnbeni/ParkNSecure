// export const fetchSearchResults = (query) => {
//     return async (dispatch) => {
//       const response = await fetch(`https://api.example.com/search?q=${query}`);
//       const searchResults = await response.json();
//       dispatch({
//         type: FETCH_SEARCH_RESULTS_SUCCESS,
//         searchResults,
//       });
//     };
//   };