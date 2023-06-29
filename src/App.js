import './App.css';
// import Navbar from "./Components/navbar/Example";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Login from "./Components/login/Login";
import SignIn from "./Components/login/SignIn";

function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>

    </div>
  );
}

export default App;
