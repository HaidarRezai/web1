import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Profil = () => {
    const { id } = useParams();
    let about = [
        {
            img: "https://tse1.mm.bing.net/th/id/OIP.GgOr_erN5hASmZj00A1ZfgHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
            username: 0,
            first: "Ahmad",
            last: "Sulaiman Khail",
        },
        {
            img: "https://cdn-icons-png.freepik.com/512/10796/10796945.png",
            username: 1,
            first: "Tamim",
            last: "Sulaiman Khail",
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/9218/9218712.png",
            username: 2,
            first: "Samim",
            last: "Sulaiman Khail",
        },
    ];
    const [info, setInfo] = useState({});
    useEffect(() => {
        setInfo(about[id]);
    }, [id]);
    return (
        <div className="w-[34%] h-auto mt-[10%] rounded-[50px] shadow-[0_0_20px_gray]/40 text-[#0C2577] p-8 text-center bg-gradient-to-r from-[#FECEC0] to-[#A9E7E4]">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            <ul>
                {about.map((i) => (
                    <li  className="text-[20px] font-bold">
                        <Link to={`information/${i.username}`}>{i.first}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Profil;