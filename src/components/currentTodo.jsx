import React, { useEffect } from "react";
import TaskShow from "./task";
import { useState } from "react";
import server from "../utils/axiosinstance";

function CurrentTodo(prop) {
  const key = "listLocal";
  const [activeTasks, setActiveTasks] = useState(null);
  const [task, setTask] = useState("");

  useEffect(() => {
    server
      .get("/api/task")
      .then(({ data: { tasks } }) => {
        setActiveTasks(tasks);
      })
      .catch(console.error);

    return () => {};
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(activeTasks));
  //   console.log(activeTasks);
  // }, [activeTasks]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (task.trim() !== "") {
      // const newTask = {
      //   id:
      //     activeTasks.length === 0
      //       ? 1
      //       : activeTasks[activeTasks.length - 1]._id + 1,
      //   name: task,
      //   done: false,
      // };
      server
        .post("/api/task", {
          name: task,
        })
        .then(({ data: { task } }) => {
          setActiveTasks((prevActTask) => [...prevActTask, task]);

          /**
          server
          .get("/api/task")
          .then(({ data: { tasks } }) => {
            setActiveTasks(tasks);
          })
          .catch(console.error);
           */
        })
        .catch(console.error);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newFilterArray = activeTasks.filter((element) => {
      return element._id !== index;
    });
    setActiveTasks(newFilterArray);
  };

  const checktask = (newTask, elementId) => {
    console.log(newTask);
    setActiveTasks((prevActTasks) => {
      const newTasks = prevActTasks.filter((prevActTask) => {
        return prevActTask._id != elementId;
      });
      return [...newTasks, newTask];
    });
  };

  const deletAll = () => {
    setActiveTasks([]);
    localStorage.clear();
  };

  const addIntoList = () => {
    console.log(activeTasks);
    const newMainList = [...prop.allTaskList, activeTasks];
    prop.setAllTaskList(newMainList);
  };

  const showGrid = () => {
    prop.setIsFlip(!prop.isFlip);
  };

  return activeTasks ? (
    <div className="flex flex-col items-center w-full h-full gap-4">
      <div className="text-white text-sm sm:text-xl font-bold pt-4 px-2">
        WHAT'S TODAY'S PLAN CAPTAIN...??
      </div>
      <div className="flex flex-row gap-4 justify-center w-full px-3">
        <div className="flex flex-row w-full ">
          <input
            className="bg-[#ffffff3d] py-2 px-2 outline-none rounded-bl-lg rounded-tl-lg w-full placeholder-slate-700 font-medium"
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
            className="bg-[#003493] py-2 px-4 font-bold rounded-br-lg rounded-tr-lg text-white outline-none hover:bg-[#194aa6] duration-200"
            title="Enter"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>
        <button
          className="bg-red-800 flex-grow py-1 px-2 font-bold text-white rounded-lg outline-none hover:bg-red-600 duration-300"
          title="ctrl+Shift"
          onClick={deletAll}
        >
          ABORT
        </button>
      </div>
      <div className=" flex flex-col gap-2  overflow-y-scroll p-2 w-full h-3/4">
        {activeTasks
          .sort((a, b) => a._id - b._id)
          .map((element, idx) => {
            return (
              <TaskShow
                name={element.name}
                _id={element._id}
                key={idx}
                done={element.done}
                deleteTask={deleteTask}
                setTask={(newTask) => checktask(newTask, element._id)}
              />
            );
          })}
      </div>
      <div className="bg-white bg-opacity-10 p-2 flex gap-2 w-full">
        <button
          className="bg-[#8b5264] hover:  text-md font-bold text-white p-2 w-3/5 rounded-md "
          onClick={addIntoList}
        >
          ADD TO GRID
        </button>
        <button
          className="bg-[#01669d] text-md font-bold text-white  p-2 w-2/5 rounded-md"
          onClick={showGrid}
        >
          SHOW GRID
        </button>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default CurrentTodo;
