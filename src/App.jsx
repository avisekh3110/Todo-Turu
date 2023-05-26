import { useState } from "react";

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
    <div className="bg-blue-500 p-3 h-1/2 overflow-y-auto">
      <div className="bg-red-400 p-3">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={(event) => {
            event.key === "Enter" && handleClick();
            event.key === "Backspace" && deletAll();
          }}
        />
        <button onClick={handleClick}>ADD</button>
        <button onClick={deletAll}>DELETE All</button>
      </div>
      <div>
        {taskList.map((element, index) => {
          return (
            <div className="container">
              <div className="EachDiv">{element}</div>
              <button onClick={() => deletTask(index)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
