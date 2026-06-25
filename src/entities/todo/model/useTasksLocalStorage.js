import React from 'react'

const useTasksLocalStorage = () => {
  const svedTask = localStorage.getItem("tasks");
  const saveTask = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  return (
    {
      svedTask : svedTask ? JSON.parse(svedTask) : null,
      saveTask,
    }
  )
}

export default useTasksLocalStorage