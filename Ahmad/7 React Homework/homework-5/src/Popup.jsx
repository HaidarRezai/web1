// Popup.jsx
import { createPortal } from "react-dom";

export default function Popup({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      {/* Box */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 animate-slideUp">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">✨ Hello Popup 👋</h2>
        <p className="text-gray-600 mb-6">
          This is a stylish popup with smooth animations.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-md hover:from-blue-700 hover:to-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
