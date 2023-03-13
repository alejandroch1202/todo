import React, { useContext } from "react";
import Task from "@components/Task";
import AppContext from "@context/AppContext";
import "@styles/Tasks.scss";

const Tasks = () => {
  const { state } = useContext(AppContext);

  return (
    <main>
      <h1>Tasks</h1>

      <div className="content">
        <div className="tasks">
          {state.tasks.map((task) => (
            <Task key={task.title} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Tasks;
