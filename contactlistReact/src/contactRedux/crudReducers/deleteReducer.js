import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * It is the redux reducer for deleting single contact from the contact.
 */

export const deletingDataAsync=createAsyncThunk(
    "delete/deletingDataAsync",
    async ({id})=>{
        console.log(id);
        const res=await axios.delete(process.env.REACT_APP_API+`/${id}`)
        return res;
    }
);