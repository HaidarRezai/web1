import React, { useRef, useState } from "react";

const Question = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const a = useRef();
    const b = useRef();
    const c = useRef();
    const d = useRef();

    const questions = [
        {
            text: "1. What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Machine Language",
                "Hyper Tool Modern Language",
                "Home Tool Markup Logic",
            ],
            correct: "a",
        },
        {
            text: "2. Which language runs in a web browser?",
            options: ["C++", "Python", "JavaScript", "Java"],
            correct: "c",
        },
        {
            text: "3. What does CSS control in a website?",
            options: ["Database", "Structure", "Style and layout", "Server connection"],
            correct: "c",
        },
    ];

    const baseStyle =
        "w-full py-2 px-4 border border-gray-300 text-indigo-700 bg-white rounded-lg hover:bg-gray-100 transition";

    function check(ref, letter) {
        if (answered) return; // جلوگیری از کلیک دوباره

        [a, b, c, d].forEach((r) => (r.current.className = baseStyle));

        const isCorrect = letter === questions[index].correct;

        ref.current.className =
            baseStyle +
            (isCorrect ? " bg-green-400 text-white" : " bg-red-400 text-white");

        if (isCorrect) setScore(score + 1);
        setAnswered(true);
    }

    function nextQuestion() {
        [a, b, c, d].forEach((r) => (r.current.className = baseStyle));
        setAnswered(false);
        if (index < questions.length - 1) {
            setIndex(index + 1);
        } else {
            alert(`🎉 Quiz finished! Your score: ${score}/${questions.length}`);
            setIndex(0);
            setScore(0);
        }
    }

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg w-[400px] text-center mt-[10%] m-auto">
            <h2 className="text-xl font-semibold mb-4">
                {questions[index].text}
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <button ref={a} onClick={() => check(a, "a")} className={baseStyle}>
                    {questions[index].options[0]}
                </button>
                <button ref={b} onClick={() => check(b, "b")} className={baseStyle}>
                    {questions[index].options[1]}
                </button>
                <button ref={c} onClick={() => check(c, "c")} className={baseStyle}>
                    {questions[index].options[2]}
                </button>
                <button ref={d} onClick={() => check(d, "d")} className={baseStyle}>
                    {questions[index].options[3]}
                </button>
            </div>

            <button
                onClick={nextQuestion}
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                {index === questions.length - 1 ? "Finish" : "Next"}
            </button>

            <p className="mt-3 text-sm text-gray-200">
                Score: {score} / {questions.length}
            </p>
        </div>
    );
};

export default Question;