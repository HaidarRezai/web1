import Image from "next/image";

export default function Link_page() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            {/* Hintergrundbild */}
            <Image
                src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80"
                alt="Beautiful landscape"
                fill
                className="object-cover opacity-80"
            />

            {/* Text über dem Bild */}
            <h1 className="absolute text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4">
                Die Schönheit der Natur 🌿
            </h1>
        </div>
    );
}
