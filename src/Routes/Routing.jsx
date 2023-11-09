import { Home } from "../components/Home";
import { About } from "../components/About";
import { Details } from "../components/Details";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </>
  );
};

{
  /* <Route
  path="/example"
  render={(props) => <YourComponent {...props} additionalProp="someValue" />}
/> */
}
