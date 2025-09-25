import { useState } from "react";
import Popup from "./Popup";

function App() {
  const [open, setOpen] = useState(false);

  return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-green-600 text-white rounded-md cursor-pointer"
      >
        Show Popup
      </button>

      <Popup open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
export default App;
