import "./App.css";
import CategoryDeck from "./components/Category";
import FormDeck from "./components/FormDeck";
import IdeasDeck from "./components/IdeasDeck";
import Navigationbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Navigationbar />
        <CategoryDeck />
        <IdeasDeck />
        <FormDeck />
      </div>
    </>
  );
}

export default App;
