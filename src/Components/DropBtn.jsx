import { useDrop } from "react-dnd";
import useCalculatorStore from "./Calculator";

const DropZone = () => {
  const { input, addToInput } = useCalculatorStore();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "button",
    drop: (item) => addToInput(item.value),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`text-right text-xl md:text-2xl bg-white p-3 mb-2 rounded min-h-[50px] md:min-h-[60px] flex items-center justify-end border ${
        isOver ? "bg-green-200" : ""
      }`}
    >
      {input || "Drop here"}
    </div>
  );
};

export default DropZone;
