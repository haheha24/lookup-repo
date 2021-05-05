import Header from "./components/Header";
import Data from "./components/Data";

const App = () => {
  const idGen = Math.floor(Math.random() * 10000 + 1);
  const storedData = [
    {
      id: `${idGen}`,
      firstName: "Adrian",
      lastName: "Penino",
    },
    {
      id: `${idGen}`,
      firstName: "Danielle",
      lastName: "The Goof",
    },
    {
      id: `${idGen}`,
      firstName: "Abby",
      lastName: "McStabby",
    }
  ];

  return (
    <div>
      <Header />
      <Data />
    </div>
  );
};

export default App;
