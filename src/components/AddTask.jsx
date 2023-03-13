import React, { useContext, useRef } from "react";
import closeImg from "@assets/close.svg";
import AppContext from "@context/AppContext";

import "@styles/AddTask.scss";
const AddTask = () => {
  const { toggleAddTask, addTask } = useContext(AppContext);
  const inputTask = useRef();

  const handleAddtask = () => {
    addTask({ text: inputTask.current.value, done: false });
    toggleAddTask();
  };

  return (
    <div className="addTask">
      <div className="title">
        <img src={closeImg} alt="close" onClick={toggleAddTask} />
        <p>Add a new task</p>
      </div>

      <div className="input">
        <input ref={inputTask} placeholder="e.i. Read"></input>
        <button onClick={handleAddtask}>Add</button>
      </div>
    </div>
  );
};

export default AddTask;
