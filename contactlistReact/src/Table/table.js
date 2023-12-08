import { useState } from "react";
import TableHead from "./tableHead";
import TableData from "./tableData";
import Contact_Form from "../addContact/addContact";
import Footer from "../footer/footer";
import SearchBar from "../Header/searchBar";

/*
*This is the main Table component .
*The Table component getting all table relatec Child component
*/

function Table() {
  const [modal,setModal]=useState(false)
  const [overlay,setOverlay]=useState(false)

  return (
    <>
      <div id="container">
        <SearchBar />
        <table>
            <TableHead />
            <TableData  setOverlay={setOverlay}/>
        </table >
        <button className="addContact" onClick={()=>{setModal(true);setOverlay(true)}}>add contact</button>
      </div>
      <Footer />
      { modal && 
        <Contact_Form setModal={setModal} setOverlay={setOverlay} />
      }
      {overlay && <div id="overlay"></div>}
    </>
  );
}

export default Table;
