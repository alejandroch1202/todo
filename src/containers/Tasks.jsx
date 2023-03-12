import React from "react";
import checkboxImg from "@assets/checkbox.svg";
import squareImg from "@assets/square.svg";
import "@styles/Tasks.scss";

const Tasks = () => {
  return (
    <main>
      <h1>Tasks</h1>

      <div className="content">
        <div className="tasks">
          <div className="task">
            <img src={checkboxImg} alt="check" />
            <p>Task 1</p>
          </div>
          <div className="task">
            <img src={checkboxImg} alt="check" />
            <p>Task 2</p>
          </div>
          <div className="task">
            <img src={squareImg} alt="check" />
            <p>Task 3</p>
          </div>
          <div className="task">
            <img src={squareImg} alt="check" />
            <p>Task 4</p>
          </div>
          <div className="task">
            <img src={squareImg} alt="check" />
            <p>Task 5</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
