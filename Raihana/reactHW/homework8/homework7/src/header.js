import { Link } from "react-router-dom";
import { SiPrime } from "react-icons/si";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#FECEC0] to-[#A9E7E4] fixed h-[88px] w-full px-8 flex justify-between items-center shadow-md">
            <div className="text-[60px] text-[#0C2577]"><SiPrime /></div>
            <ul className="flex gap-8 text-lg font-bold text-[#0C2577]">
                <li className="hover:text-[#008194] duration-300"><Link to="/report">Report</Link></li>
                <li className="hover:text-[#008194] duration-300"><Link to="/accounting">Accounting</Link></li>
                <li className="hover:text-[#008194] duration-300"><Link to="/gallery">Gallery</Link></li>
                <li className="hover:text-[#008194] duration-300"><Link to="/profil">Profil</Link></li>
                <li className="hover:text-[#008194] duration-300"><Link to="/amount">Amount</Link></li>
                <li className="hover:text-[#008194] duration-300"><Link to="/qusetion">Qusetion</Link></li>
            </ul>
            <div>
                <button className="bg-[#008194] px-14 py-2 text-white font-bold rounded-full hover:bg-[#006f7c] duration-300 cursor-pointer">Login</button>
            </div>
        </div>
    );
};

export default Header;
