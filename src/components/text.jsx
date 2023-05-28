import React, { useState } from "react";

function TaskShow(prop) {
  const [isDone, setIsDone] = useState(false);
  const strikeThrough = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="flex justify-between bg-[#444E74] p-2">
      <div className="flex gap-3">
        <input type="checkbox" onClick={strikeThrough} />
        <div
          className={`font-bold text-slate-950 text-lg ${
            isDone && `line-through`
          }`}
        >
          {prop.taskName}
        </div>
      </div>
      <button onClick={() => prop.deletTask(prop.index)}>✖</button>
    </div>
  );
}

export default TaskShow;
