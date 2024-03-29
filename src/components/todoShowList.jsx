import React from "react";

export default function TodoShowList(prop) {
  const showGrid = () => {
    prop.setIsFlip(!prop.isFlip);
  };

  return (
    <div
      className="bg-transparent h-full w-full flex flex-col items-center justify-between"
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(180deg)",
      }}
    >
      <div className="text-white text-sm sm:text-xl font-bold pt-4 px-2">
        ALL TODO LIST
      </div>
      <div className="flex flex-col gap-2  overflow-y-scroll p-2 w-full h-3/4">
        {prop.allTaskList.map((element, index) => {
          console.log(element[0].taskName);
          return (
            <div
              className="flex justify-between text-white bg-[#0c2156a9] px-3 py-2 rounded-lg"
              key={index}
            >
              {element[0].taskName}
            </div>
          );
        })}
      </div>
      <div className="bg-white bg-opacity-10 p-2 flex gap-2 w-full">
        <button
          className="bg-[#1028a0dc] rounded-lg w-full text-white p-2 font-bold"
          onClick={showGrid}
        >
          SHOW CURRENT TODO
        </button>
      </div>
    </div>
  );
}
