import { FaCalculator } from "react-icons/fa";

const Accounting = () => {
    return (
        <div className="w-[40%] h-auto mt-[6%] rounded-[50px] shadow-[0_0_20px_gray]/40 text-[#0C2577] p-8 text-center bg-gradient-to-r from-[#FECEC0] to-[#A9E7E4]">
            <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
                <FaCalculator className="text-[#0C2577]" /> Accounting</h1>
            <p className="text-lg">
                Accounting (Buchhaltung) umfasst die Verwaltung von Einnahmen,
                Ausgaben und Rechnungen. Ziel ist es, einen klaren Überblick
                Accounting (Buchhaltung) umfasst die Verwaltung von Einnahmen,
                Ausgaben und Rechnungen. Ziel ist es, einen klaren Überblick
                über die finanzielle Situation des Unternehmens zu behalten.
                über die finanzielle Situation des Unternehmens zu behalten.
            </p>
            <img src="accounting.jpg" alt="" className="rounded-xl mt-8 h-80 w-full object-cover" />
        </div>
    );
};

export default Accounting;