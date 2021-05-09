const Display = ({storedData}) => {
  const mapData = storedData.map((data) => (
    <li /*add a key */ className="dataList">
      {data.firstName} {data.lastName}
    </li>
  ));

  return (
    <div className="display-container">
      <ul className="dataUlist">{mapData}</ul>
    </div>
  );
};

export default Display;
