import { useState } from "react"
import Display from './Display.js'


const Form = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [stateData, setData] = useState([]);
  const [idData, setId] = useState(0)


  //Submits the data 
  const handleSubmit = (e) => {
    e.preventDefault();

    setData(stateData.concat({ id: idData, firstName: fName, lastName: lName }));
    console.log(stateData);

    setId(idData + 1);
    setFName("");
    setLName("");
  };

  //Deletes the data with a button click
  const deleteData = (id) => {
    setData(stateData.filter((data) => data.id !== id ))
  }

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
            value={fName}
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
            value={lName}
            required
          />
        </div>
        <button type="submit" id="my-look-up-btn">
          <span style={{ fontSize: 20 }}>Create</span>
        </button>
        <Display stateData={stateData} deleteData={deleteData} id={idData} />
      </form>
    </div>
  );
};

export default Form;
