import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import "./footer.css";

const Footer = () => {
  const dispatch = useDispatch();



  const currentPage = useSelector((state) => state.get.allData?.currentPage);
  const totalPage=useSelector((state) => state.get.allData?.pageCount)

  console.log(totalPage,currentPage);


  const startingPage = () => {
    dispatch(fetchData({ page: 1 }));
  };
  useEffect(() => {
    startingPage()
  }, []);

  const handlePrevClick = () => {
    dispatch(fetchData({ page: currentPage - 1 }));
  };

  const handleNextClick = () => {
    dispatch(fetchData({ page: currentPage + 1 }))
  };


  return (
    <footer id="footer">
      <div></div>
      <div className="buttons">
        <button id="increment" onClick={handlePrevClick} disabled={currentPage === 1}
        style={{ backgroundColor: currentPage === 1 ? 'gray' : '#404f6c' }}>
          prev
        </button>
        <div className="countButtons">
          {Array.from({ length: totalPage }, (_, index) => (
            <button key={index} onClick={() => dispatch(fetchData({ page: index + 1 }))}>
              {index + 1}
            </button>
          ))}
        </div>
        <button id="decrement" onClick={handleNextClick} disabled={currentPage === totalPage}
        style={{ backgroundColor: currentPage === totalPage ? 'gray' : '#404f6c' }}>
          next
        </button>
      </div>
      <div></div>
    </footer>
  );
  
};

export default Footer;
