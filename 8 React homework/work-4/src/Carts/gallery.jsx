import { useState } from "react";

function Gallery() {
  const images = [
    "https://epe.brightspotcdn.com/e3/5b/c4131eb64424bc2cad1276c9500b/011323-andrew-tate-ap-bs.jpg", // Bugatti
    "https://live-production.wcms.abc-cdn.net.au/0ecea6455fe260a981f567be17a259d8?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485", // Private Jet
    "https://ichef.bbci.co.uk/news/480/cpsprodpb/38da/live/53324d20-d28a-11ef-94cb-5f844ceb9e30.jpg.webp", // Watches
    "https://images.theconversation.com/files/671029/original/file-20250529-56-cwkx5a.jpg?ixlib=rb-4.1.0&rect=0%2C196%2C3753%2C2111&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip", // Mansion
    "https://theintercept.com/wp-content/uploads/2025/02/AP25058649041497_6c0f8f.jpg?fit=6000%2C4000", // Lifestyle
    "https://c.files.bbci.co.uk/DFC9/production/_128298275_annotation2023-01-14143816.jpg"  // Motivation
  ];

  const [columns, setColumns] = useState(1);

  const increaseColumns = () => {
    if (columns < 4) setColumns(columns + 1);
  };

  const decreaseColumns = () => {
    if (columns > 1) setColumns(columns - 1);
  };

  return (
    <div className="min-h-[80vh] px-6 py-10 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
        EMPIRE GALLERY
      </h1>

      {/* Plus/Minus Controls */}
      <div className="flex justify-center gap-6 mb-10 items-center">
        <button
          onClick={decreaseColumns}
          className="px-4 py-2 rounded-full bg-gray-800 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-2xl"
        >
          −
        </button>
        <span className="text-xl font-bold text-yellow-500">
          {columns} Column{columns > 1 ? "s" : ""}
        </span>
        <button
          onClick={increaseColumns}
          className="px-4 py-2 rounded-full bg-gray-800 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-2xl"
        >
          +
        </button>
      </div>

      {/* Gallery Grid */}
      <div className={`grid grid-cols-${columns} gap-6`}>
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border-2 border-yellow-500 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Motivational Line */}
      <p className="mt-10 text-gray-300 text-lg">
        “Surround yourself with luxury, power, and ambition — the empire never sleeps.”
      </p>
    </div>
  );
}

export default Gallery;





