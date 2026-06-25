import { useState, useCallback, useEffect, useMemo, useRef, useReducer} from "react";
import tasksApi from "@/shared/api/tasks";

const tasksReducer = (state, action) => {
  switch(action.type) {
    case 'SET_TASKS':
      return Array.isArray(action.tasks) ? action.tasks : state;
    case 'ADD':
      return [...state, action.task];
    case 'TOGGLE_COMPLITE':

    const {id , isDone} = action;
      return state.map((task) => task.id === id ? { ...task, isDone } : task);
    case 'DELETE':
      return state.filter((task) => task.id !== action.id);
    case 'DELETE_ALL':
      return [];
    default: { return state; }
  }
}

const useTasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
 
  const [searchQuery, setSearchQuery] = useState("");
  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setAppearingTaskId] = useState(null);


  const newTaskTitleRef = useRef(null);

  const handleDeleteAll = useCallback(() => {
    tasksApi.deleteAll(tasks).then(() =>  dispatch({ type: 'DELETE_ALL' }));
  }, [tasks]);

  const deleteTask = useCallback(
    (id) => {
      tasksApi.delete(id).then(() => {
        setDisappearingTaskId(id);
        setTimeout(() => {
          dispatch({type: 'DELETE', id:id});
          setDisappearingTaskId(null);
        }, 400)
       
      });
    },

    [],
  );

  const toogleTaskComlite = useCallback(
    (taskId, isDone) => {
      tasksApi.toggleComplete(taskId, isDone).then(() => {
        dispatch({type: 'TOGGLE_COMPLITE', id:taskId, isDone});
      });
    },
    [],
  );

  const addTask = useCallback((title , callbackAfterAdding) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksApi.add(newTask).then((addedTask) => {
      dispatch({type: 'ADD', task: addedTask});
      callbackAfterAdding()
      setSearchQuery("");
      newTaskTitleRef.current.focus();
      setAppearingTaskId(addedTask.id);
      setTimeout(() => {
        setAppearingTaskId(null);
      }, 400);
    });
  }, []);

  useEffect(() => {
    newTaskTitleRef.current.focus();

    tasksApi.getAll().then((tasks) => dispatch({type: 'SET_TASKS', tasks:tasks}));
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    return clearSearchQuery.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
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
  };
};

export default useTasks;
