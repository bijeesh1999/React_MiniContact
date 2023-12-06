import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../contactRedux/crudReducers/postReducer";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addContact.css";

function Contact_Form({ setModal, setOverlay }) {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
  });

  const validationHandler = () => {
    const errors = {};
    if (data.firstName === "") {
      errors.firstName = "First name is required";
    }
    if (data.lastName === "") {
      errors.lastName = "Last name is required";
    }
    const phnoValidation = /^\d{10}$/;
    if (data.phno === "") {
      errors.phno = "Phone number is required";
    } else if (!phnoValidation.test(data.phno)) {
      errors.phno = "phone number is not valid";
    }
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email === "") {
      errors.email = "email is required";
    } else if (!emailValidation.test(data.email)) {
      errors.email = "email is not valid";
    }
    setError(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const { currentPage, search } = useSelector((state) => state.get);

  function handleChange(e) {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validationHandler();
    try {
      if (isValid) {
        await dispatch(postData(data));
        await dispatch(fetchData({ page: currentPage, search }));
        toast.success("contact Created Sucessfully !", {
          autoClose: 1000,
          style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid green",
          },
        });
        setModal(false);
        setOverlay(false);
      } else {
        setModal(true);
        setOverlay(true);
      }
    } catch (error) {
      console.error("Error creating or fetching data:", error);
    }
  };

  return (
    <div id="form">
      <div id="formHeader">
        <h3>Add Contact</h3>
        <button
          id="close"
          onClick={() => {
            setModal(false);
            setOverlay(false);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inptField">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="firstName"
            placeholder="Enter firstname.."
            value={data.firstName}
            onChange={handleChange}
          />
          {error && error.firstName && <span>{error.firstName}</span>}
        </div>
        <div className="inptField">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="firstName"
            placeholder="Enter lastname.."
            value={data.lastName}
            onChange={handleChange}
          />
          {error && error.lastName && <span>{error.lastName}</span>}
        </div>
        <div className="inptField">
          <input
            type="text"
            name="email"
            id="email"
            className="email"
            placeholder="Enter email id.."
            value={data.email}
            onChange={handleChange}
          />
          {error && error.email && <span>*{error.email}</span>}
        </div>
        <div className="inptField">
          <input
            type="phone"
            name="phno"
            id="phno"
            className="phno"
            placeholder="Enter phone.."
            value={data.phno}
            onChange={handleChange}
          />
          {error && error.phno && <span>*{error.phno}</span>}
        </div>
        <button id="create" type="submit">
          create
        </button>
      </form>
    </div>
  );
}

export default Contact_Form;
