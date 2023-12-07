import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import "./footer.css";

/**
 * Here is setting pagination from the backend 
 */

const Footer = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.get.allData?.currentPage);
  const totalPage = useSelector((state) => state.get.allData?.pageCount);

  const startingPage = () => {
    dispatch(fetchData({ page: 1 }));
  };
  useEffect(() => {
    startingPage();
  }, []);

  const handlePrevClick = () => {
    dispatch(fetchData({ page: currentPage - 1 }));
  };

  const handleNextClick = () => {
    dispatch(fetchData({ page: currentPage + 1 }));
  };

  return (
    <footer id="footer">
      <div></div>
      <div className="buttons">
        <button
          id="increment"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          style={{
             backgroundColor: currentPage === 1 ? "gray" : "aliceblue",
             boxShadow: currentPage === 1 ? "none" : "0px 7px 15px black",
            }}> prev </button>
        <div className="countButtons">
          {Array.from({ length: totalPage }, (_, index) => (
            <button key={index}
              onClick={() => dispatch(fetchData({ page: index + 1 }))}
              style={{
                backgroundColor: currentPage === index + 1 ? "#c2c6cf" : "aliceblue",
                boxShadow: currentPage === index + 1 ? "none" : "0px 7px 15px black",
              }}>{index + 1}
            </button>
          ))}
        </div>
        <button
          id="decrement"
          onClick={handleNextClick}
          disabled={currentPage === totalPage}
          style={{
            backgroundColor: currentPage === totalPage ? "gray" : "aliceblue",
            boxShadow: currentPage === totalPage ? "none" : "0px 7px 15px black",
          }}
        >
          next
        </button>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
