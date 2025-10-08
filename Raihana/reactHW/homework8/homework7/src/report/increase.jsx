import { AiOutlineRise } from "react-icons/ai";
const Increase = () => {
    return (
        <div className="h-auto rounded-2xl shadow-[0_0_20px_gray]/25 text-[#0C2577] p-6 text-center">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <AiOutlineRise className="text-green-600" /> Increase
            </h1>
            <p className="mb-4 italic">Ein „Increase“ beschreibt ein Wachstum oder eine Zunahme von Werten.</p>
            <ul className="list-disc list-inside text-left mb-4">
                <li>📈 Umsatz steigt → mehr Gewinn</li>
                <li>📈 Nachfrage nimmt zu → mehr Kunden</li>
            </ul>
        </div>
    );
};

export default Increase;