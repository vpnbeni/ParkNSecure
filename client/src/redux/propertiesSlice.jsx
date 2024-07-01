// src/redux/propertiesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch('http://192.168.1.77:4000/api/properties/all');
    const data = await response.json();
    console.log(data)
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
      });
  }
});

export default propertiesSlice.reducer;
