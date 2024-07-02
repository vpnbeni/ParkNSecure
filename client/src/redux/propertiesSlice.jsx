import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch(`http://192.168.1.77:4000/api/properties/all`);
    const data = await response.json();
    return data;
  }
);

export const fetchFilteredProperties = createAsyncThunk(
  'properties/fetchFilteredProperties',
  async ({ minPrice, maxPrice, propertyTypes }) => {
    let url = `http://192.168.1.77:4000/api/properties/filter?`;
    if (minPrice) {
      url += `minPrice=${minPrice}&`;
    }
    if (maxPrice) {
      url += `maxPrice=${maxPrice}&`;
    }
    if (propertyTypes && propertyTypes.length > 0) {
      
     propertyTypes.map((item)=>{
      console.log(item)
      return url += `propertyType=${item}&`;
     })
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchFilteredProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilteredProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchFilteredProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default propertiesSlice.reducer;
