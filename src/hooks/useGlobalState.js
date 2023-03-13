import { useState } from "react";

const useGlobalState = () => {
  const localTasks = localStorage.getItem("TASKS_V1");
  let initialState;

  if (!localTasks || localTasks === '{"tasks":[]}') {
    initialState = {
      tasks: [
        { text: "Tasks finished", done: true },
        { text: "Task in progress", done: false },
      ],
    };

    localStorage.setItem("TASKS_V1", JSON.stringify(initialState));
  } else {
    initialState = JSON.parse(localTasks);
  }

  const [state, setState] = useState(initialState);

  const addTask = (task) => {
    const newState = {
      ...state,
      tasks:
        state.tasks.filter((items) => items.text === task.text).length > 0
          ? state.tasks
          : [...state.tasks, task],
    };
    setState(newState);
    localStorage.setItem("TASKS_V1", JSON.stringify(newState));
  };

  const removeTask = (task) => {
    const newState = {
      ...state,
      tasks: state.tasks.filter((items) => items !== task),
    };
    setState(newState);
    localStorage.setItem("TASKS_V1", JSON.stringify(newState));
  };

  const toggleDone = (task) => {
    state.tasks.find((items) => items.text === task.text).done =
      !state.tasks.find((items) => items.text === task.text).done;

    const newState = {
      ...state,
      tasks: state.tasks,
    };

    setState(newState);
    localStorage.setItem("TASKS_V1", JSON.stringify(newState));
  };

  const [showAddTask, setShowAddTask] = useState(false);
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return {
    showAddTask,
    toggleAddTask,
    state,
    addTask,
    removeTask,
    toggleDone,
  };
};

export default useGlobalState;
