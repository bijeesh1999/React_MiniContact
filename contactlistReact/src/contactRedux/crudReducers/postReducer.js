import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios";


const initialState={
    postingData:false,
    postedData:[],
    postError:false,
}

export const postData = createAsyncThunk("post/postData", async (postedData) => {
    const res=await axios.post("http://localhost:2000", postedData)
    console.log("postData:", res.data); // Assuming the response data is what you want to store
    return res.data;

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

export const {postSingleData} = postSlice.actions;

export default postSlice.reducer


