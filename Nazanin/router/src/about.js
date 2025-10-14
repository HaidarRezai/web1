// import { Link, Outlet } from "react-router-dom";
// import Export from "./about/export";
// import Import from "./about/import";
// // import Export from "./about/export";
// // import Import from "./about/import.js";

// function About() {
//     return (
//         <div className="w-[50%] h-60 p-3 border m-auto bg-[#e9ecef]  ">
//             <ul className="flex gap-7">
//                 <Link to="/about/export" className="bg-gray-300 p-2 "> <li >Export</li></Link>
//                 <Link to="/about/import" className="bg-gray-300 p-2 "> <li >import</li></Link>




//             </ul>
//             <div className="w-50 h-40 ">
//                 <Export />
//                 <Import />

//                 {/* <Outlet /> */}
//             </div>
//             <p>this bests book </p>

//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum fuga tempore deserunt vitae magnam cum, consequuntur laboriosam voluptatibus ut quisquam earum praesentium! Omnis sint officiis nihil, blanditiis ducimus vitae?</p>
//         </div>
//     )
// }
// export default About;

import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div className="w-[50%] h-80 p-3 border m-auto bg-[#e9ecef]">
            <ul className="flex gap-7">
                <li>
                    <Link to="export" className="bg-gray-300 p-2">Export</Link>
                </li>
                <li>
                    <Link to="import" className="bg-gray-300 p-2">Import</Link>
                </li>
            </ul>

            <div className="w-50 h-40  mt-3">
                <Outlet />
            </div>

            <p>this bests book</p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum fuga tempore
                deserunt vitae magnam cum, consequuntur laboriosam voluptatibus ut quisquam earum
                praesentium! Omnis sint officiis nihil, blanditiis ducimus vitae?
            </p>
        </div>
    );
}

export default About;
