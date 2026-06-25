import { createContext, useMemo } from "react";
import useTasks from "@/entities/todo/model/useTasks";
import useIncomplieTask from "@/entities/todo/model/useIncomplieTask";

export const TasksContext = createContext({});



export const TasksProvider = ({ children }) => {
  const {
    tasks,
    filteredTasks,
    handleDeleteAll,
    deleteTask,
    toogleTaskComlite,
    addTask,
    newTaskTitleRef,
    searchQuery,
    setSearchQuery,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncomplieTask(tasks);

    const value  = useMemo(() => ({
      tasks,
      filteredTasks,
      handleDeleteAll,
      deleteTask,
      toogleTaskComlite,
      addTask,
      newTaskTitleRef,
      searchQuery,
      setSearchQuery,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    }), [
      tasks,
      filteredTasks,
      handleDeleteAll,
      deleteTask,
      toogleTaskComlite,
      addTask,
      newTaskTitleRef,
      searchQuery,
      setSearchQuery,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ]);

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};
