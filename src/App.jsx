import { Routes, Route, Link} from "react-router-dom";
import './App.css'
import NavBar from "./NavBar";
import MainSection from "./MainSection";

function App() {

  return (
    <>
      <div id="container">
        <NavBar/>
        <MainSection/>
      </div>
    </>
  )
}

export default App
