import './App.css';
// import Navbar from "./Components/navbar/Example";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Components/About";
// import Login from "./Components/login/Login";
import SignIn from "./Components/login/SignIn";
import Account from "./Components/Account";
import Profile from "./Components/Profile";
import Ppage from "./Components/Ppage";

function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ppage" element={<Ppage />} />
        </Routes>

    </div>
  );
}

export default App;
