import {useState} from "react";
import {useDispatch } from "react-redux";
import {updateDataAsync } from "../contactRedux/crudReducers/putReducer";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import "./editContact.css";

function EditForm({ setEditModal, id, data ,setOverlay}) {
  const dispatch = useDispatch();
  const editingData = data.find((data) => data._id === id);

  const [formData, setFormData] = useState({
    firstName: editingData ? editingData.firstName : "",
    lastName: editingData ? editingData.lastName : "",
    email: editingData ? editingData.email : "",
    phno: editingData ? editingData.phno : "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    await dispatch(updateDataAsync({ id, updatedData: formData }))
    await dispatch(fetchData());
    setEditModal(false)
    setOverlay(false)
    console.log("exit")
  };
  

  return (
    <div id="form">
      <div id="formHeader">
        <h3>Edit Contact</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="name"
          name="firstName"
          className="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="name"
          name="lastName"
          className="firstName"
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
          type="phone"
          name="phno"
          className="phno"
          value={formData.phno}
          onChange={handleInputChange}
        />
        <div id="footer">
          <button id="update" type="submit">
            Update
          </button>
          <button >Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;

