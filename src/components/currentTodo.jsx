import React from "react";
import TaskShow from "./task";
import { useState } from "react";

function CurrentTodo(prop) {
  const [allTaskList, setAllTaskList] = useState([]);
  const [activeTasks, setActiveTask] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (task.trim() !== "") {
      const newTask = {
        id:
          activeTasks.length === 0
            ? 1
            : activeTasks[activeTasks.length - 1].id + 1,
        taskName: task,
      };
      const newTaskArray = [...activeTasks, newTask];
      setActiveTask(newTaskArray);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newFilterArray = activeTasks.filter((element) => {
      return element.id !== index;
    });
    setActiveTask(newFilterArray);
  };

  const deletAll = () => {
    setActiveTask([]);
  };

  const addIntoList = () => {
    const newMainList = [...allTaskList, activeTasks];
    setAllTaskList(newMainList);
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="text-white text-xl font-bold pt-4">
        WHAT'S TODAY'S PLAN CAPTAIN...??
      </div>
      <div className="flex flex-row gap-4 justify-center w-full px-3">
        <div className="flex flex-row w-full ">
          <input
            className="bg-[#ffffff3d] py-2 px-2 outline-none rounded-bl-lg rounded-tl-lg w-full "
            placeholder="Enter you task here..."
            type="text"
            value={task}
            onChange={handleChange}
            onKeyDown={(event) => {
              event.key === "Enter" && handleClick();
              event.ctrlKey && event.shiftKey && deletAll();
            }}
          />
          <button
            className="bg-[#149209] py-2 px-4 font-bold rounded-br-lg rounded-tr-lg text-white outline-none"
            title="Enter"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>
        <button
          className="bg-red-500 flex-grow py-1 px-2 font-bold text-white rounded-lg outline-none"
          title="ctrl+Shift"
          onClick={prop.deletAll}
        >
          ABORT
        </button>
      </div>
      <div className="flex flex-col gap-2 overflow-y-scroll p-2 w-full">
        {activeTasks.map((element, index) => {
          return (
            <TaskShow
              taskName={element.taskName}
              index={element.id}
              key={element.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CurrentTodo;