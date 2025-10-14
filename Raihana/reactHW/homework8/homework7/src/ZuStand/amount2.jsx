import amount1Zustand from "./amount1";

const Amount = () => {
    const num = amount1Zustand((state) => state.count);
    const inc = amount1Zustand((state) => state.inc);
    const dec = amount1Zustand((state) => state.dec);
    const reset = amount1Zustand((state) => state.reset);

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg w-[400px] text-center mt-[10%] m-auto">
            <h2 className="text-2xl font-bold mb-2">Total Amount</h2>
            <p className="text-3xl font-extrabold mb-4">{num} $</p>
            <div className="flex justify-center flex-col gap-4 text-indigo-700">
                <button onClick={inc} className="bg-white py-2 rounded-xl font-bold hover:bg-gray-100/50 transition">+1$</button>
                <button onClick={dec} className="bg-white py-2 rounded-xl font-bold hover:bg-gray-100/50 transition">-1$</button>
                <button onClick={reset} className="bg-white text-red-500 py-2 rounded-xl font-bold hover:bg-red-100/50 transition">Reset</button>
            </div>
        </div>
    );
};

export default Amount;
