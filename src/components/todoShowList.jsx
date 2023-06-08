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
      ;
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
