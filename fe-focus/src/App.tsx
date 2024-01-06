import "./App.css";
import CategoryDeck from "./components/Category";
import IdeasDeck from "./components/IdeasDeck";
import Navigationbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Navigationbar />
        <CategoryDeck />
        <IdeasDeck />
      </div>
    </>
  );
}

export default App;
