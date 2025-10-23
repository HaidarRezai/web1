"use client";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6 overflow-hidden animate-fadeIn">
            {/* 404 Zahl */}
            <h1 className="text-[8rem] font-extrabold text-[#E47A5C] drop-shadow-[0_10px_10px_#E47A5C] animate-slideUp delay-100">
                404
            </h1>
            {/* Titel */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4 animate-slideUp delay-300">
                Page not found 😢
            </h2>
        </div>
    );
}
