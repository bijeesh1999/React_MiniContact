import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import "./searchBar.css";

function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const searchData = (e) => {
        setSearch(e.target.value);

        // Dispatch the fetchData action with page set to 1 and search set to the input value
        dispatch(fetchData({ page: 1,limit:"", search: e.target.value }));
    };

    return (
        <>
            <input id="search" type="search" placeholder="search..." onChange={searchData} value={search} />
        </>
    );
}

export default SearchBar;
