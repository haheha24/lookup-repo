import { FaTimes } from "react-icons/fa";

const Display = ({ stateData, deleteData }) => {
  if (stateData.length > 1) {
    return stateData.map((storedData, index) => {
      return (
        <li key={storedData._id} className="dataList">
          First Name: <u>{storedData.firstName}</u><br /> 
          Last Name: <u>{storedData.lastName}</u><br /> 
          Email: <u>{storedData.email}</u>{" "}
          <FaTimes
            className="deleteData"
            style={{
              color: "red",
              cursor: "pointer",
              verticalAlign: "middle",
            }}
            onClick={() => deleteData(stateData[index]._id)}
          />
        </li>
      );
    });
  } else if (stateData.length === 1) {
    return (
      <li key={stateData[0]._id} className="dataList">
        First Name: <u>{stateData[0].firstName}</u><br /> 
        Last Name: <u>{stateData[0].lastName}</u><br /> 
        Email: <u>{stateData[0].email}</u>{" "}
        <FaTimes
          className="deleteData"
          style={{
            color: "red",
            cursor: "pointer",
            verticalAlign: "middle",
          }}
          onClick={() => deleteData(stateData[0]._id)}
        />
      </li>
    );
  } else {
    return <li className="dataList">There is no Data :(</li>;
  }
};

export default Display;
