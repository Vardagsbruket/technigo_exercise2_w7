import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routes/Routing";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routing />
        {/* {routes} */}
      </BrowserRouter>
    </>
  );
}

export default App;
