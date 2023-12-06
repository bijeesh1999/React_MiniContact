import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletingDataAsync=createAsyncThunk(
    "delete/deletingDataAsync",
    async ({id})=>{
        console.log(id);
        const res=await axios.delete(`http://localhost:2000/${id}`)
        return res;
    }
);