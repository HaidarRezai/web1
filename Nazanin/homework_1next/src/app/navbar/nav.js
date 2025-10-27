import { CiSearch } from "react-icons/ci";

"   use client";
import { RiTailwindCssFill } from "react-icons/ri";

function Nav() {
    return (
        <div className="flex gap-4  items-center justify-center ">

            <div className="   inline text-cyan-800 text-5xl items-center" >     <RiTailwindCssFill /> </div>
            <h1 className=" text-[30px] mr-60">Tailwind CSS</h1>


            <div className=" ml-[1000px] gap-40 text-xl w-70 border rounded-2xl p-3 flex items-center border-gray-700     ">

                <p className="inline text-gray-400 ">search </p>
                <CiSearch className="text-2xl" />
            </div>

        </div>




    )
}
export default Nav;





