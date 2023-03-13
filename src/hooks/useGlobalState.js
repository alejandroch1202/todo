import { useState } from "react";

const useGlobalState = () => {
  const initalState = {
    tasks: [
      { title: "Tasks finished", done: true },
      { title: "Task in progress", done: false },
    ],
  };

  const [state, setState] = useState(initalState);

  const addTask = (task) => {
    setState({
      ...state,
      tasks:
        state.tasks.filter((items) => items.title === task.title).length > 0
          ? state.tasks
          : [...state.tasks, task],
    });
  };

  const removeTask = (task) => {
    setState({
      ...state,
      tasks: state.tasks.filter((items) => items !== task),
    });
  };

  const toggleDone = (task) => {
    state.tasks.find((items) => items.title === task.title).done =
      !state.tasks.find((items) => items.title === task.title).done;

    setState({
      ...state,
      tasks: state.tasks,
    });
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
