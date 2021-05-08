import Header from "./components/Header";
import Display from "./components/Display";

/* var express = require("express");
var app = express();
 
app.get("/", (req, res) => {
 res.send("Hello World");
}); */

const App = () => {
  const storedData = [
    {
      firstName: "Adrian",
      lastName: "Penino"
    },
    {
      firstName: "Danielle",
      lastName: "The Goof"
    },
    {
      firstName: "Abby",
      lastName: "McStabby"
    }
  ]


  return (
    <div>
      <Header />
      
      <Display storedData={storedData} /*add a key */ />
    </div>
  );
};

export default App;
