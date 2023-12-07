import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

/**
 * This is reduxReducer for posting single data from the addContact , Contact_Form 
 * component and post it mongo db 
 */

const initialState={
    postingData:false,
    postedData:[],
    postError:false,
}

export const postData = createAsyncThunk("post/postData", async (postedData) => {
    try {
        const res = await axios.post(process.env.REACT_APP_API, postedData);
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


