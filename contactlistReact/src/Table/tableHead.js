import React from "react";


function TableHead() {
  return (
    <thead style={{backgroundColor:"#404f6c", color:"white"}}>
      <tr>
        <th>Si.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}
export default TableHead;
