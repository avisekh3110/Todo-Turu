import { useState } from "react";
import TaskShow from "./components/text";
import Navbar from "./components/navbar";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task !== "") {
      const newTaskArray = [...taskList, task];
      setTaskList(newTaskArray);
      setTask("");
    }
  };

  const deletTask = (index) => {
    const newFilterArray = taskList.filter((name, indx) => {
      return indx !== index;
    });
    setTaskList(newFilterArray);
  };

  const deletAll = () => {
    setTaskList([]);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#010722] flex flex-col justify-center items-center h-screen ">
        <div className="bg-[#1C2A5A] py-3 px-10 h-1/2 overflow-y-auto flex flex-col gap-2  z-10">
          <div className="text-white font-bold flex justify-center py-2">
            WHAT’S TODAY’S PLAN, CAPTAIN...?
          </div>
          <div className=" pb-3 flex gap-2">
            <div>
              <input
                className="py-1 px-2 rounded-bl-md outline-none"
                placeholder="Enter you task here..."
                type="text"
                value={task}
                onChange={handleChange}
                onKeyDown={(event) => {
                  event.key === "Enter" && handleClick();
                  event.key === "Backspace" && deletAll();
                }}
              />

              <button
                className="bg-[#149209] py-1 px-2 rounded-tr-md font-bold text-white"
                onClick={handleClick}
              >
                ADD
              </button>
            </div>
            <button
              className="bg-red-500 py-1 px-2 rounded-tr-md rounded-bl-md font-bold text-white"
              onClick={deletAll}
            >
              ABORT
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {taskList.map((element, index) => {
              return (
                <TaskShow
                  taskName={element}
                  index={index}
                  deletTask={deletTask}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
