# **Todo-Turu**

### It is a Todo List web site which will help you jotting your daily work down. Enjoy!!

<!-- <div>
      <Navbar />
      <div className="bg-[#010722] flex flex-col justify-center items-center h-screen gap-3 ">
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <div className="bg-[#1c2a5ad7] px-10 h-1/2 flex flex-col gap-2 rounded-md z-10">
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
                  title="ctrl+Shift"
                  onClick={deletAll}
                >
                  ABORT
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 overflow-y-scroll p-2">
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
          <button
            className="p-3 w-full rounded-md text-white font-bold bg-[#5b19c452] "
            onClick={addIntoList}
          >
            ADD TO GRID
          </button>
        </div>
      </div>
      <div className="text-white z-10">BOOM BOOM</div>
      <div className=" absolute bottom-0 bg-[#010722] text-white font-semibold p-4">
        COPYRIGHT | <a href="https://github.com/avisekh3110">AVISEKH SABI</a>
      </div>
    </div>
  );
}
export default App; -->
