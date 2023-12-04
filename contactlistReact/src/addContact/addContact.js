import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../contactRedux/crudReducers/postReducer";
import "./addContact.css";
import { fetchData } from "../contactRedux/crudReducers/getReducer";

function Contact_Form({ setModal ,setOverlay }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the postData action with the data
      await dispatch(postData(data));
      // Dispatch the fetchData action to get the updated data
      await dispatch(fetchData());
      // Close the modal
      setModal(false)
      setOverlay(false)
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };


  return (
    <div id="form">
      <div id="formHeader">
        <h3>Add Contact</h3>
        <button id="close" onClick={() => {setModal(false);setOverlay(false)}}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="firstName"
          placeholder="Enter firstname.."
          value={data.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="firstName"
          placeholder="Enter lastname.."
          value={data.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="Enter email id.."
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phno"
          id="phno"
          className="phno"
          placeholder="Enter phone.."
          value={data.phno}
          onChange={handleChange}
        />
        <button id="create" type="submit">
          create
        </button>
      </form>
    </div>
  );
}

export default Contact_Form;
