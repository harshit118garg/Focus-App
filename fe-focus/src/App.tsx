import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigationbar from "./components/Navbar";
import AddNew from "./pages/Add";
import HomePage from "./pages/Home";
import UpdateIdea from "./pages/Update";

function App() {
  return (
    <>
      <div className="app">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/update/:id" element={<UpdateIdea />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
