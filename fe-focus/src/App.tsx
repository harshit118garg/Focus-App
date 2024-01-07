import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigationbar from "./components/Navbar";
import AddNew from "./pages/Add";
import Completed from "./pages/Completed";
import HomePage from "./pages/Home";
import UpdateIdea from "./pages/Update";

function App() {
  return (
    <>
      <div className="app">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/executed" element={<Completed />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/update" element={<UpdateIdea />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
