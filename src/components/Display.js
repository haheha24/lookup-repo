const Display = ({stateData}) => {


    return (
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
    )
}

export default Display
