import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    editFormData:{
        firstName:"",
        lastName:"",
        email:"",
        phno:"",
    }
}

export const updateDataAsync = createAsyncThunk(
    'put/updateDataAsync',
    async ({ id, updatedData }) => {
      const response = await axios.put(`http://localhost:2000/${id}`, updatedData);
      return response.data;
    }
  );

const editSlice=createSlice({
    name:"put",
    initialState,
    reducers:{
        updateData:(state,action)=>{
            const {id,value}=action.payload;
            state.editFormData[id]=value
        },
        resetData:(state)=>{
            state.editFormData=initialState.editFormData
        }
    }
})

export const{resetData}=editSlice.actions;

export default editSlice.reducer;