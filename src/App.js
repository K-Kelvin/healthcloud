import './App.css';
import { Routes, Route } from "react-router-dom";
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

                <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            </Routes>
        </div>
    );
}

export default App;
