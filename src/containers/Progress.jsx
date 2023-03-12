import React from "react";
import progressImg from "@assets/circle.svg";
import addImg from "@assets/add.svg";
import "@styles/Progress.scss";

const Progress = () => {
  return (
    <aside>
      <h1>Progress</h1>
      <div className="progress">
        <div>
          <p>2 Finished</p>
          <p>4 In progress</p>
        </div>
        <img src={progressImg} alt="progress" />
      </div>

      <div className="add">
        <img src={addImg} alt="add item" />
        <h2>Add a new task</h2>
      </div>
    </aside>
  );
};

export default Progress;
