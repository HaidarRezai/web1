
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Arbeitesklima from './Arbeiteskima';
import Arbeitegaber from './Arbeitegaber';
import Arbeitsuche from './Arbeitsuche';
import Selbstantandig from './Selbstantandig';
function App() {
  return (
    <BrowserRouter>
    <div className="border w-[50%] m-auto mt-10 p-5">
   <ul className="flex  gap-10 text-3xl text-green-900 text-center p-3 underline underline-offset-7">
    <li><Link to="/Arbeitesklima">Arbeitesklima</Link></li>
    <li><Link to="/Arbeitegaber">Arbeitegaber</Link></li>
    <li><Link to="/Arbeitsuche">Arbeitsuche</Link></li>
    <li><Link to="/Selbstantandig">Selbstantandig</Link></li>
   </ul>
    </div>
     <Routes>
        <Route path="/Arbeitesklima" element={<Arbeitesklima />} />
        <Route path="/Arbeitegaber" element={<Arbeitegaber />} />
        <Route path="/Arbeitsuche" element={<Arbeitsuche />} />
        <Route path="/Selbstantandig" element={<Selbstantandig />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
