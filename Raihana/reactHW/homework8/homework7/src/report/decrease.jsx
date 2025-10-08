import { AiOutlineFall } from "react-icons/ai";
const Decrease = () => {
    return (
        <div className="h-auto rounded-2xl shadow-[0_0_20px_gray]/25 text-[#0C2577] p-6 text-center">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <AiOutlineFall className="text-red-600 " /> Decrease
            </h1>
            <p className="mb-4 italic">Beispielinhalt: Werte nehmen ab, wenn bestimmte Bedingungen erfüllt sind.</p>

            <ul className="list-disc list-inside text-left mb-4">
                <li>📉 Nachfrage wird geringer</li>
                <li>📉 Marktwert sinkt</li>
            </ul>
        </div>
    );
};

export default Decrease;