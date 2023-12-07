import { configureStore } from "@reduxjs/toolkit";

/**
 * It is the redux Store .
 * Here getting all reducers and creating a store .
 */

import getReducer from "../crudReducers/getReducer";
import postReducer from "../crudReducers/postReducer";
import putReducer from "../crudReducers/putReducer";


const store = configureStore({
  reducer: {
    get: getReducer,
    post: postReducer,
    put:putReducer,
  },
});

export default store;
