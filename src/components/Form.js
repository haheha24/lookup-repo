import { useState } from "react";


const Form = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [stateData, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData(stateData.concat({ firstName: fName, lastName: lName }));
    console.log(stateData);

    setFName("");
    setLName("");
  };

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
        <div className="display-container">
          <ul className="dataUlist">
            {stateData.length > 1 ? (
              stateData.map((storedData) => {
                return (
                  <li key={storedData.firstName} className="dataList">
                    {storedData.firstName} {storedData.lastName}
                  </li>
                );
              })
            ) : stateData.length === 1 ? (
              <li className="dataList">
                {stateData[0].firstName} {stateData[0].lastName}
              </li>
            ) : stateData.length === 0 ? (
              <li className="dataList">There is no Data</li>
            ) : null}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Form;
