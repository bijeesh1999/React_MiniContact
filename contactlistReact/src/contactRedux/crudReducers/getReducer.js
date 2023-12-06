import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: null,
  loading: false,
  error: null,
  currentPage: null,
  limit: null,
  search:null
};

export const fetchData = createAsyncThunk("get/fetchData", async ({page,search}) => {
  try {
    const res = await axios.get("http://localhost:2000", {
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
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
