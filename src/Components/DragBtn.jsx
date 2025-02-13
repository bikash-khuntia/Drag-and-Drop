import { useDrag } from "react-dnd";

const DraggableButton = ({ value }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-3 md:p-4 bg-blue-300 text-black text-lg rounded cursor-grabbing text-center min-w-[40px] min-h-[50px] md:min-h-[60px] flex items-center justify-center ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {value}
    </div>
  );
};

export default DraggableButton;
