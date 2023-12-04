import { useState } from "react";
import TableHead from "./tableHead";
import TableData from "./tableData";
import Header from "../Header/header";
import Contact_Form from "../addContact/addContact";
import Footer from "../footer/footer";


function Table() {

  const [modal,setModal]=useState(false)
  const [overlay,setOverlay]=useState(false)
  

/*  */
  return (
    <>
      <Header title="Contact List" />
      <div id="container">
        <table>
            <TableHead />
            <TableData  setOverlay={setOverlay}/>
        </table>
        <button className="addContact" onClick={()=>{setModal(true);setOverlay(true)}}>add contact</button>
      </div>
      <Footer />
      {modal && <Contact_Form setModal={setModal} setOverlay={setOverlay} />}
      {overlay && <div id="overlay"></div>}
    </>
  );
}

export default Table;
