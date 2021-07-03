import { useState, useReducer, useEffect } from "react";
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

  useEffect(() => {
    const getData = async () => {
      const DataFromServer = await callData();
      setData(DataFromServer.userObj);
    };
    getData();
  }, []);

  const callData = async () => {
    const res = await fetch("http://localhost:4000/routes/index/users/read", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin":
          "http://localhost:4000/routes/index/users/read",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  //Fetch and add data to server
  const addData = async (form) => {
    const res = await fetch("http://localhost:4000/routes/index/users/add", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":
          "http://localhost:4000/routes/index/users/add",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    /* setData((prevState) => {
      [...prevState, data]
    }) */
    //the comment above does not work, however the one below works. Maybe data.userObj made the difference.
    setData((prevState) => [...prevState, data.userObj])
    console.log(stateData)
  };

  //Submits the data when the create button is clicked.
  const handleSubmit = (e) => {
    e.preventDefault();

    addData(input);
  };

  //Deletes the data with a button click
  const deleteData = (id) => {
    console.log(stateData)
    setData(stateData.filter((data) => data.id !== id));
    console.log(stateData)
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
        action="/routes/index/users"
        method="POST"
      >
        <div className="my-look-up-container">
          <label className="my-look-up-label" htmlFor="firstName">
            First Name
          </label>
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
          <label className="my-look-up-label" htmlFor="lastName">
            Last Name
          </label>
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
          <label className="my-look-up-label" htmlFor="email">
            Email
          </label>
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
