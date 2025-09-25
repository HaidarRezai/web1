import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Carts/about";
import Contact from "./Carts/contact";
import Gallery from "./Carts/gallery";
import Home from "./Carts/home";
import Prices from "./Carts/prices";
import Basic from "./Carts/basic";  
import Premium from "./Carts/premium";
import VIP from "./Carts/vip";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <BrowserRouter>
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gradient-to-r from-black via-zinc-900 to-black shadow-lg">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.pinimg.com/736x/67/55/64/675564086241bdf1a543f2f16ee1c2c0.jpg" 
              alt="Logo"
              className="h-14 w-14 rounded-full border-2 border-yellow-500"
            />
            <span className="text-2xl font-bold text-yellow-500 tracking-wider">
              TATE EMPIRE
            </span>
          </div>

          <ul className="flex gap-8 text-lg font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/prices">Prices</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Nested Routes for Prices */}
            <Route path="/prices" element={<Prices />}>
              <Route path="basic" element={<Basic />} />
              <Route path="premium" element={<Premium />} />
              <Route path="vip/:id" element={<VIP />} />
            </Route>
          </Routes>
        </main>

        <footer className="text-center py-6 mt-10 border-t border-gray-800 text-gray-400 text-sm">
          © 2025 Tate Empire. Built with Hustle. 💪
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
