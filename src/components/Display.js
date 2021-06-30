import { FaTimes } from "react-icons/fa";

const Display = ({ stateData, deleteData }) => {
  if (stateData.length > 1) {
    return stateData.map((storedData, index) => {
      return (
        <li key={storedData.id} className="dataList">
          {storedData.firstName} {storedData.lastName}{" "}
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
        {stateData[0].firstName} {stateData[0].lastName}{" "}
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
