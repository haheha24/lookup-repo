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

  // Load and display database into view
  useEffect(() => {
    getData();
  }, [setData]);// eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    try {
      const DataFromServer = await callData();
      setData(DataFromServer.userObj);
    } catch (error) {
      console.log(error);
    }
  };

  const callData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.PORT}/routes/index/users/read`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin":
              `${process.env.REACT_APP_URL}:${process.env.PORT}/routes/index/users/read`,
            "Content-Type": "application/json",
          },  
        }
      );
/*       console.log(res.json()) */
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error); 
    }
  };

  //Fetch and add data to server
  const addData = async (form) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.PORT}/routes/index/users/add`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin":
              `${process.env.REACT_APP_URL}:${process.env.PORT}/routes/index/users/add`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      /* setData((prevState) => {
      [...prevState, data]
    }) */
      //the comment above does not work, however the one below works. Maybe data.userObj made the difference.
      setData((prevState) => [...prevState, data.userObj]);
    } catch (error) {
      console.log(error);
    }
  };

  //Submits the data when the create button is clicked.
  const handleSubmit = (e) => {
    e.preventDefault();

    addData(input);
  };

  //Deletes the data with a button click
  const deleteData = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.PORT}/routes/index/users/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const deleteID = await res.json();
      console.log(stateData.filter((data) => data._id !== deleteID.objectId))
      setData(stateData.filter((data) => data._id !== deleteID.objectId));
    } catch (error) {
      console.log(error);
    }
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
