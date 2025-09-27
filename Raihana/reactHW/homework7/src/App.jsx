import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./header";
import Report from "./report";
import Increase from "./report/increase";
import Decrease from "./report/decrease";
import Accounting from "./acconting";
import Gallery from "./gallery";
import Profil from "./profil";
import Information from "./information";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar Header */}
        <Header />
        {/* Inhalt mit Abstand zur Navbar */}
        <div className="pt-[88px] flex justify-center items-cetner">
          <Routes>
            <Route Route path="/report" element={<Report />}>
              <Route path="increase" element={<Increase />} />
              <Route path="decrease" element={<Decrease />} />
            </Route>
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profil" element={<Profil />} >
              <Route path="information/:id" element={<Information />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;