import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const initialState={
    postingData:false,
    postedData:[],
    postError:false,
}

export const postData = createAsyncThunk("post/postData", async (postedData) => {
    try {
        const res = await axios.post("http://localhost:2000", postedData);
        return res.data;
    } catch (error) {
        return error;
    }
});

const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        postSingleData:(state,action)=>{
            state.postedData=action.payload;
        },
    },
});


export default postSlice.reducer


