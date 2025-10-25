
"   use client";
import { RiTailwindCssFill } from "react-icons/ri";

function Nav() {
    return (
        <div className="flex gap-4  items-center justify-center ">

            <div className="   inline text-cyan-800 text-5xl items-center" >     <RiTailwindCssFill /> </div>
            <h1 className=" text-[30x] ">Tailwind CSS</h1>


            <div className=" ml-[1000px] gap-6 w-100    ">
                <ul className="flex gap-5">
                    <li>Blog</li>
                    <li>Docss</li>
                    <li>Learn</li>
                    <li>Exam</li>
                    <li>Exam</li>
                    <li>Exam</li>
                </ul>
            </div>

        </div>




    )
}
export default Nav;





