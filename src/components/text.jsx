import React, { useState } from "react";

function TaskShow(prop) {
  const [isDone, setIsDone] = useState(false);
  const strikeThrough = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="flex justify-between bg-[#444e7491] px-3 py-2 rounded-lg">
      <div className="flex gap-3">
        <input type="checkbox" color="pink" onClick={strikeThrough} />
        <div
          className={`font-bold text-black text-lg decoration-black  ${
            isDone && `line-through`
          }`}
        >
          {prop.taskName}
        </div>
      </div>
      <button className="text-white" onClick={() => prop.deletTask(prop.index)}>
        🗙
      </button>
    </div>
  );
}

export default TaskShow;
