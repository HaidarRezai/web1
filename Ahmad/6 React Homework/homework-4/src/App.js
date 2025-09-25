import { Suspense, lazy } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Card = lazy(() => import("./card"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex flex-col items-center gap-3">
            {/* Spinning Icon */}
            <AiOutlineLoading3Quarters className="text-5xl text-blue-600 animate-spin" />
            <span className="text-lg font-semibold text-gray-700">
              Loading Card...
            </span>
          </div>
        </div>
      }
    >
      <Card />
    </Suspense>
  );
}

export default App;
