import "./App.css";
import AddUser from "./Components/AddUser";
import Navbar from "./Components/Navbar";
import AllUser from "./Components/AllUser";
import MernCrud from "./Components/MernCrud";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import EditUser from "./Components/EditUser";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<MernCrud />} />
        <Route path="/all" element = {<AllUser />} />
        <Route path="/add" element = {<AddUser />} />
        <Route path="/edit/:id" element = {<EditUser />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
