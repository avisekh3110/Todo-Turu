import React, { useEffect, useRef, useState } from "react";
import close from "../assets/close-icon.svg";
import server from "../utils/axiosinstance";
function TaskShow(prop) {
  const [done, setDone] = useState(prop.done);
  const strikeThrough = () => {
    setDone(!done);
  };

  useEffect(() => {
    if (done === prop.done) {
      return;
    }
    server.put("/api/task", {
      taskId: prop._id,
      done,
    });
    prop.setTask({
      _id: prop._id,
      name: prop.name,
      done: done,
    });
  }, [done]);

  return (
    <div className="flex justify-between bg-[#0c2156a9] px-3 py-2 rounded-lg">
      <div className="flex gap-3 w-5/6  ">
        <input
          type="checkbox"
          className="accent-[#99f1fe] border-blue-800"
          onChange={strikeThrough}
          checked={done}
        />
        <div
          className={`flex font-bold text-white text-lg decoration-black overflow-hidden ${
            done && `line-through text-opacity-60`
          }`}
          style={{
            textDecorationThickness: "2px",
          }}
        >
          {prop.name}
        </div>
      </div>
      <button className="text-white" onClick={() => prop.deleteTask(prop._id)}>
        <img width="12" height="12" src={close} alt="close" />
      </button>
    </div>
  );
}

export default TaskShow;
