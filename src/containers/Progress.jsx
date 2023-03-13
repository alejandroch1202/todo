import React, { useState, useEffect, useContext } from "react";
import AppContext from "@context/AppContext";
import AddTask from "@components/AddTask";
import addImg from "@assets/add.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "@styles/Progress.scss";

const Progress = () => {
  const { state, showAddTask, toggleAddTask } = useContext(AppContext);
  const tasks = state.tasks;
  const totalTasks = tasks.length;

  const inProgress = tasks.filter((task) => task.done === false).length;
  const finished = tasks.filter((task) => task.done === true).length;

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (totalTasks) {
      const per = ((finished * 100) / totalTasks).toFixed(0);
      setPercentage(per);
    } else {
      setPercentage(100);
    }
  }, [percentage, totalTasks, finished, inProgress]);

  return (
    <aside>
      <h1>Progress</h1>
      <div className="progress">
        <div>
          <p>{finished} Finished</p>
          <p>{inProgress} In progress</p>
        </div>

        <div className="progressBar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>

      <div className="add">
        <img
          className="addButton"
          src={addImg}
          alt="add item"
          onClick={toggleAddTask}
        />
        <h2>Add a new task</h2>
      </div>
      {showAddTask && <AddTask />}
    </aside>
  );
};

export default Progress;
