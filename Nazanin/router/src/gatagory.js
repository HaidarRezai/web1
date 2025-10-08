
import useBear from "./store";

const Gatagory = () => {
    const number = useBear((state) => state.count);
    const inc = useBear((state) => state.inc);
    const dec = useBear((state) => state.dec);

    return (
        <div className="bg-[#e9ecef] w-[50%] m-auto p-4 text-center rounded">
            <h1 className="text-2xl font-bold mb-4">Count: {number}</h1>
            <button onClick={inc} className="bg-green-500 text-white px-4 py-2 rounded mr-2">+</button>
            <button onClick={dec} className="bg-red-500 text-white px-4 py-2 rounded " >-</button>

        </div>
    );
};

export default Gatagory;