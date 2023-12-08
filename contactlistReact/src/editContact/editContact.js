import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateDataAsync } from "../contactRedux/crudReducers/putReducer";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./editContact.css";

/*
*It is the form component for editing contact .
*Here is getting a purticular contact using id and update 
*/

function EditForm({ setEditModal, id, allData, setOverlay }) {

  const {currentPage,search,}=useSelector((state)=>state.get)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
  });

  const dispatch = useDispatch();

  const editingData = allData?.find(data => {
    return data._id === id;
  });

  useEffect(() => {
    if (editingData) {
      setFormData({
        firstName: editingData.firstName ,
        lastName: editingData.lastName,
        email: editingData.email ,
        phno: editingData.phno ,
      });
    }
  }, [editingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateDataAsync({ id, updatedData: formData }))
    await dispatch(fetchData({page:currentPage,search}));
    toast.success("contact Updated Sucessfully !",{
      autoClose: 1000,
      style: {
        backgroundColor: "black",
        color: "white",
        border: "1px solid green",
    }})
    setEditModal(false);
    setOverlay(false);
    console.log("exit");
  };


  return (
    <div id="form">
      <div id="formHeader">
        <h3>Edit Contact</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          className="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          className="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phno"
          className="phno"
          value={formData.phno}
          onChange={handleInputChange}
        />
        <div id="footer">
          <button id="update" type="submit">
            Update
          </button>
          <button type="button" onClick={() => {setEditModal(false) ; setOverlay(false)}}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
