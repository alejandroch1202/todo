import React, { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import checkboxImg from "@assets/checkbox.svg";
import squareImg from "@assets/square.svg";
import closeImg from "@assets/closeAlt.svg";

const Task = (task) => {
  const { removeTask, toggleDone } = useContext(AppContext);

  const handleDone = () => {
    toggleDone(task.task);
  };

  const handleRemove = (e) => {
    removeTask(task.task);
  };

  return (
    <div className="task">
      <img
        className="checkbox"
        src={task.task.done ? checkboxImg : squareImg}
        alt="check"
        onClick={handleDone}
      />

      {task.task.done ? (
        <>
          <p
            style={{
              textDecorationLine: "line-through",
              color: "#4f4e4e",
            }}
          >
            {task.task.text}
          </p>
          <img
            className="close"
            src={closeImg}
            alt={task.task.text}
            onClick={handleRemove}
          />
        </>
      ) : (
        <>
          <p>{task.task.text}</p>
          <img
            className="close"
            src={closeImg}
            alt={task.task.text}
            onClick={handleRemove}
          />
        </>
      )}
    </div>
  );
};

export default Task;
