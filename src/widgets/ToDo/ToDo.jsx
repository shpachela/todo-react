import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import ToDoInfo from "@/features/stats";
import { ToDoList, TasksContext } from "@/entities/todo";
import Button from "@/shared/ui/Button";
import { useContext } from "react";
import styles from "./Todo.module.scss";

const ToDo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm style={styles} />
      <SearchTaskForm style={styles} />
      <ToDoInfo style={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>
      <ToDoList style={styles} />
    </div>
  );
};

export default ToDo;
