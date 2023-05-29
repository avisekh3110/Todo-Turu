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
    if (task.trim() !== "") {
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
        <div className="bg-[#1c2a5ad7] relative px-10 h-1/2 overflow-y-auto flex flex-col gap-2 rounded-md z-10">
          <div className="sticky top-0 ">
            <div className="text-white font-bold flex justify-center py-4">
              WHAT’S TODAY’S PLAN, CAPTAIN...?
            </div>
            <div className=" pb-3 flex gap-2">
              <div>
                <input
                  className="bg-[#ffffff3d] py-2 px-2 outline-none rounded-bl-lg rounded-tl-lg"
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
                  className="bg-[#149209] py-2 px-4 font-bold rounded-br-lg rounded-tr-lg text-white"
                  title="Enter"
                  onClick={handleClick}
                >
                  ADD
                </button>
              </div>
              <button
                className="bg-red-500 py-1 px-2 font-bold text-white rounded-lg"
                title="ctrl+Shi"
                onClick={deletAll}
              >
                ABORT
              </button>
            </div>
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
      <div className=" absolute bottom-0 bg-[#010722] text-white font-semibold p-4">
        COPYRIGHT | <a href="https://github.com/avisekh3110">AVISEKH SABI</a>
      </div>
    </div>
  );
}
export default App;
