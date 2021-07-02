import { useState, useReducer } from "react";
import Display from "./Display.js";

const Form = () => {
  //Initalise Inputs from the Form as states.
  const [input, setInput] = useReducer(
    (initialInput, newInput) => ({ ...initialInput, ...newInput }),
    {
      firstName: "",
      lastName: "",
      email: "",
    }
  );

  //Initialise stateData
  const [stateData, setData] = useState([]);

  //Submits the data
  const handleSubmit = (e) => {
    e.preventDefault();

    setData(
      stateData.concat({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
      })
    );
  };

  //Deletes the data with a button click
  const deleteData = (id) => {
    setData(stateData.filter((data) => data.id !== id));
  };

  //Sets the handler
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({ [name]: value });
  };

  return (
    <div>
      <form
        className="form-container"
        onSubmit={handleSubmit}
        action="/server.js"
        method="POST"
      >
        <div className="my-look-up-container">
          <label className="my-look-up-label">First Name</label>
          <input
            type="text"
            className="my-look-up"
            id="firstName"
            name="firstName"
            onChange={(e) => handleInputs(e)}
            value={input.firstName}
            required
          />
        </div>
        <div className="my-look-up-container">
          <label className="my-look-up-label">Last Name</label>
          <input
            type="text"
            className="my-look-up"
            id="lastName"
            name="lastName"
            onChange={(e) => handleInputs(e)}
            value={input.lastName}
            required
          />
        </div>
        <div className="my-look-up-container">
          <label className="my-look-up-label">Email</label>
          <input
            type="email"
            className="my-look-up"
            id="email"
            name="email"
            onChange={(e) => handleInputs(e)}
            value={input.email}
            required
          />
        </div>
        <button type="submit" id="my-look-up-btn">
          <span style={{ fontSize: 20 }}>Create</span>
        </button>
        <Display stateData={stateData} deleteData={deleteData} />
      </form>
    </div>
  );
};

export default Form;
