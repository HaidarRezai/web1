import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Information() {
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
        <div className="w-full h-auto mt-[4%] rounded-[50px] shadow-[0_0_20px_gray]/40 text-[#0C2577] p-8 text-center">
            <img src={info.img} className="w-24 h-24 rounded-full m-auto mb-4" />
            <p className="text-[20px]">Username: {info.username}</p>
            <h1 className="text-xl font-bold">{info.first} {info.last}</h1>
        </div>
    );
}

export default Information;