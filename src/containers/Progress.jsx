import React, { useState, useEffect, useContext } from "react";
import AppContext from "@context/AppContext";
import AddTask from "@components/AddTask";
import addImg from "@assets/add.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "@styles/Progress.scss";

const Progress = () => {
  const { showAddTask, toggleAddTask } = useContext(AppContext);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(60);
  }, [percentage]);

  return (
    <aside>
      <h1>Progress</h1>
      <div className="progress">
        <div>
          <p>2 Finished</p>
          <p>4 In progress</p>
        </div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
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
