import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useCalculatorStore from "./Components/Calculator";
import DropZone from "./Components/DropBtn";
import DraggableButton from "./Components/DragBtn";

function App() {
  const { clearInput, removeLastInput } = useCalculatorStore();
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

  return (
    <DndProvider backend={HTML5Backend}>
        <div className=" text-black p-4 sm:p-6 md:p-8 rounded-lg  sm:min-w-32 md:min-w-48 ">
            <h1 className="text-2xl sm:text-xl md:text-4xl font-semibold text-center mt-4 text-blue-500">How to Use the Calculator</h1>
            <ul className="py-4 sm:py-3 space-y-2 sm:space-y-5 text-lg">
                <li>1️⃣ Pick any number and drag it into the input box.</li>
                <li>2️⃣ Continue dragging and dropping more numbers or mathematical operators (+, -, *, /).</li>
                <li>3️⃣ Finally, drag and drop the ‘=’ button to calculate the result.</li>
                <li>4️⃣ Use the Remove button to delete the last input or the Clear button to reset everything.</li>
            </ul>
        </div>

        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-[370px] p-4  bg-gray-300 rounded-lg shadow-lg ">
                <DropZone />
                <div className="grid grid-cols-4 gap-2">
                    {buttons.map((btn) => (
                        <DraggableButton key={btn} value={btn} />
                    ))}
                </div>
                <div className="flex justify-evenly py-10  sm:">
                    <button className="bg-orange-500 text-gray-200 text-lg p-3 rounded-sm min-w-28 font-bold hover:opacity-50" onClick={removeLastInput}>Remove</button>
                    <button className="bg-red-600 p-3 text-lg min-w-28 rounded-sm text-gray-200 font-bold" onClick={clearInput}> Clear </button>
                </div>
            </div>
        </div>
    </DndProvider>
  );
}

export default App;

