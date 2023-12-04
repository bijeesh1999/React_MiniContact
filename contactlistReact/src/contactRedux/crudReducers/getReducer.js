import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allData: null,
  loading: false,
  error: null,
  currentPage: null,
  limit: null,
};

export const fetchData = createAsyncThunk("get/fetchData", async ({page,search}) => {
  try {
    const res = await axios.get("http://localhost:2000", {
      params: {
        page,
        limit:3,
        search
      },
    });

    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const contactSlice = createSlice({
  name: "get",
  initialState,
  reducers: {
    getAlldata: (state, action) => {
      state.allData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { getAlldata } = contactSlice.actions;
export default contactSlice.reducer;
