import './App.css';
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Hero from "./pages/Hero";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Home from './pages/Home';
import RequireAuth from './components/RequireAuth';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />
=======
import Hero from "./Components/Hero";
import About from "./Components/About";
// import Login from "./Components/login/Login";
import SignIn from "./Components/login/SignIn";
import EligibleMembers from "./Components/EligibleMembers";


function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/eligiblemembers" element={<EligibleMembers/>} />
        </Routes>
>>>>>>> bdb3d42 (Modified the homepage content and the logos)

                <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            </Routes>
        </div>
    );
}

export default App;
