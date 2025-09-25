import { AiOutlineLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
export default function Card() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className=" w-[350px] rounded-xl shadow-[1px_2px_10px_gray] p-5 bg-white flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2">
                    {/* Profile Image */}
                    <img
                        src="https://ichef.bbci.co.uk/news/480/cpsprodpb/38da/live/53324d20-d28a-11ef-94cb-5f844ceb9e30.jpg.webp"
                        alt="Andrew Tate"
                        className="w-[80px] h-[80px] rounded-full object-cover border-2 border-gray-300"
                    />

                    {/* User Info */}
                    <div>
                        <h1 className="font-black text-lg">Andrew Tate</h1>
                        <div className="flex items-center gap-3 mt-1">
                            <h3 className="text-gray-500">@tate_01</h3>
                            <button className="px-4 py-1 bg-blue-500 cursor-pointer text-white rounded-full text-sm font-medium hover:bg-blue-600 transition">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                {/* Post Image */}
                <div className="h-1/2 mt-4">
                    <img
                        src="https://s7d2.scene7.com/is/image/TWCNews/Romania_Tate_91187"
                        className="rounded-xl w-full h-full object-cover"
                    />
                </div>
                <div className="flex justify-around mt-3 text-gray-600 text-sm font-medium">
                    {/* Like */}
                    <div className="flex gap-1 items-center cursor-pointer hover:text-blue-500 transition">
                        <AiOutlineLike className="text-lg" />
                        <span>Like</span>
                    </div>

                    {/* Dislike */}
                    <div className="flex gap-1 items-center cursor-pointer hover:text-red-500 transition">
                        <AiFillDislike className="text-lg" />
                        <span>Dislike</span>
                    </div>

                    {/* Save */}
                    <div className="flex gap-1 items-center cursor-pointer hover:text-green-600 transition">
                        <CiBookmark className="text-lg" />
                        <span>Save</span>
                    </div>
                </div>

                {/* Comment Section */}
                <div className="mt-4 flex flex-col flex-grow">
                    {/* Input box */}
                    <div className="mt-3 flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="flex-grow px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
