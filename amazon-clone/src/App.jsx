import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div className="app">
        <Routes>
          <Route path="/checkout" element ={<Checkout/>}/>
          <Route path="/" element ={<Home/>}/>
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
