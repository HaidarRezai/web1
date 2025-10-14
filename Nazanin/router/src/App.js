import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Gatagory from "./gatagory";
import Export from "./about/export";
import Import from "./about/import.js";
import Profil from "./profil.js"; // korrigiert
import Home from "./home.jsx";
import User from "./user.js";

function App() {
    return (
        <BrowserRouter>
            <div className="border border-gray-400 w-[50%] h-14 m-auto mt-10 bg-[#9db4c0] p-4">
                <ul className="flex gap-10">
                    <li> <Link to="/" className="border hover:bg-[#6096ba] rounded-xl bg-gray-300 border-gray-400 p-2 hover:text-white"> Home</Link> </li>
                    <li><Link to="/about" className="border hover:bg-[#6096ba] rounded-xl bg-gray-300 border-gray-400 p-2 hover:text-white">     About </Link> </li>
                    <li><Link to="/gatagory" className="border hover:bg-[#6096ba] rounded-xl bg-gray-300 border-gray-400 p-2 hover:text-white">Gatagory</Link></li>
                    <li> <Link to="/profile/1" className="border hover:bg-[#6096ba] rounded-xl bg-gray-300 border-gray-400 p-2 hover:text-white">Profile </Link></li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="/about/export" element={<Export />} />
                    <Route path="/about/import" element={<Import />} />
                </Route>
                <Route path="/gatagory" element={<Gatagory />} />
                <Route path="/profil" element={<Profil />} >
                    <Route path="user/:id" element={<User />} />

                </Route>

                <Route />

            </Routes>
        </BrowserRouter>
    );
}

export default App;



