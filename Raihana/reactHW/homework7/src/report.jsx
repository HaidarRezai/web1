import { Link, Outlet } from "react-router-dom";
const Report = () => {
    return (
        <div className="w-[38%] h-auto mt-[10%] rounded-[50px] shadow-[0_0_20px_gray]/40 text-[#0C2577] p-8 text-center bg-gradient-to-r from-[#FECEC0] to-[#A9E7E4]">
            <h1 className="text-2xl font-bold mb-6">Report-Seite</h1>
            <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem,
                id voluptatum sunt ipsum impedit totam voluptatem aspernatur provident recusandae.
            </p>
            <ul className="flex justify-around items-center mt-10">
                <li className="rounded-full bg-[#FECEC0]/20 hover:bg-[#E47A5C] hover:shadow-lg hover:shadow-[#E47A5C]/50 text-white font-bold px-10 py-2 transition-all duration-300">
                    <Link to="increase">Increase </Link>
                </li>
                <li className="rounded-full bg-[#A9E7E4]/20 hover:bg-[#3AA199] hover:shadow-lg hover:shadow-[#3AA199]/50 text-white font-bold px-10 py-2 transition-all duration-300">
                    <Link to="decrease">Decrease</Link>
                </li>
            </ul>
            <div className="p-4 mb-6 flex justify-center items-center"><Outlet /></div>
        </div>
    );
};

export default Report;