import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * It is the Redux getReducer for getting all data from the mongo db.
 * Here is getting the data with the help of query
 * Here is using extraReducer for managing asynchronous data fetchig.
 */


const initialState = {
  allData: null,
  loading: false,
  error: null,
  currentPage: null,
  contactLengh:null
};


export const fetchData = createAsyncThunk("get/fetchData", async ({page,search}) => {
  try {
    const res = await axios.get(process.env.REACT_APP_API, {
      params: {
        page,
        limit:5,
        search,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
});


const contactSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
        state.currentPage = action.payload.currentPage;
        state.limit = action.payload.limit;
        state.contactLengh=action.payload.contactLengh;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
