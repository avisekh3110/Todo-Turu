import React, { useState } from "react";
import close from "../assets/close-icon.svg";
function TaskShow(prop) {
  const [isDone, setIsDone] = useState(false);
  const strikeThrough = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="flex justify-between bg-[#0c15619c] px-3 py-2 rounded-lg">
      <div className="flex gap-3">
        <input type="checkbox" checked={prop.isDone} onClick={strikeThrough} />
        <div
          className={`font-bold text-white text-lg decoration-black  ${
            isDone && `line-through text-opacity-60`
          }`}
          style={{
            textDecorationThickness: "2px",
          }}
        >
          {prop.taskName}
        </div>
      </div>
      <button
        className="text-white"
        onClick={() => prop.deleteTask(prop.index)}
      >
        <img width="12" height="12" src={close} alt="close" />
      </button>
    </div>
  );
}

export default TaskShow;
