import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
