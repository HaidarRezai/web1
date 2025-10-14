import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link, } from "react-router-dom";

function Profil() {
    const { id } = useParams();
    let obj = [
        {
            id: 0,
            Name: "Ahmad",
            ln: "sulaiman khail",
            img: "/Profil.png"
        },
        {
            id: 1,
            Name: "Tamim",
            ln: "sulaiman khail",
            img: "/Profil.png"

        },
        {
            id: 2,
            Name: "Raihane",
            ln: "sulaiman khail",
            img: "/Profil.png"

        },
    ]
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(obj[id]);
    }, [id]);

    return (
        <div className="w-[50%] h-100 border m-auto p-2 bg-[#e9ecef]" >
            <ul>
                {
                    obj.map((i) => (
                        <li><Link to={`obj/${i.Name}`}>{i.Name}</Link></li>

                    ))
                }
            </ul>
            <Outlet />

            {/* <h1>ID:{user.id}</h1>
            <h1>Name:{user.Name}</h1>
            <h1>ln:{user.ln}</h1>
            <img src={user.img} className="w-20 h-20" /> */}

        </div>
    );
}
export default Profil;