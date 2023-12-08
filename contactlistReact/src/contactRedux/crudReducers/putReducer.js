import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * It is edit reducer from the redux and used to edit form data frome the editContact,EditForm.
 * Here getting id and edited data and update 
 */


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
      const response = await axios.put(process.env.REACT_APP_API+`/${id}`, updatedData);
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
    }
})

export default editSlice.reducer;