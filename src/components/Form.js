import { useState } from "react"
import Display from './Display.js'


const Form = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [stateData, setData] = useState([]);


  //Submits the data 
  const handleSubmit = (e) => {
    e.preventDefault();

<<<<<<< HEAD
=======
    //WHy don't the inputs clear the previous values?? even though the states are clearing.
    if (fName && lName === null) {
      return alert("Please fill in the fields")
    }

>>>>>>> d51a5d3629996397883310d759220e3dfb063ee2
    setData(stateData.concat({ firstName: fName, lastName: lName }));
    console.log(stateData);

    setFName("");
    setLName("");
  };

<<<<<<< HEAD
=======
  //Deletes the data with a button click
  /* const deleteData = (e) => {
    n
  } */

>>>>>>> d51a5d3629996397883310d759220e3dfb063ee2
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="my-look-up-container">
          <label class="my-look-up-label">First Name</label>
          <input
            type="text"
            className="my-look-up"
            id="firstName"
            name="firstName"
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className="my-look-up-container">
          <label class="my-look-up-label">Last Name</label>
          <input
            type="text"
            className="my-look-up"
            id="lastName"
            name="lastName"
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </div>
        <button type="submit" id="my-look-up-btn">
          <span style={{ fontSize: 20 }}>Create</span>
        </button>
        <Display stateData={stateData} />
      </form>
    </div>
  );
};

export default Form;
