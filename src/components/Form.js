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
      setData(DataFromServer);
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
    console.log(data);
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
    setData([...stateData, data]); /*...stateData is not an iterable typeerror INVESTIGATE*/
  };

  //Submits the data
  const handleSubmit = (e) => {
    e.preventDefault();

    addData(input);
  };

  //Deletes the data with a button click
  const deleteData = (id) => {
    console.log(id);
    console.log(stateData);
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
