import { FaTimes } from "react-icons/fa";

const Display = ({ stateData, deleteData }) => {
  if (stateData.length > 1) {
    return stateData.map((storedData, index) => {
      return (
        <li key={storedData.id} className="dataList">
          First Name: <u>{storedData.firstName}</u><br /> 
          Last Name: <u>{storedData.lastName}</u><br /> 
          Email: <u>{storedData.email}</u>{" "}
          <FaTimes
            style={{
              color: "red",
              cursor: "pointer",
              verticalAlign: "middle",
            }}
            onClick={() => deleteData(stateData[index].id)}
          />
        </li>
      );
    });
  } else if (stateData.length === 1) {
    return (
      <li className="dataList">
        First name: <u>{stateData[0].firstName}</u><br /> 
        Last name: <u>{stateData[0].lastName}</u><br /> 
        Email: <u>{stateData[0].email}</u>{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            verticalAlign: "middle",
          }}
          onClick={() => deleteData(stateData[0].id)}
        />
      </li>
    );
  } else {
    return <li className="dataList">There is no Data :(</li>;
  }
};

export default Display;
