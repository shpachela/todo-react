import Fields from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";
import { useContext, useState } from "react";
import { TasksContext } from "@/entities/todo/model/TasksContext";

const AddTaskForm = ({ style }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { newTaskTitleRef, addTask } =
    useContext(TasksContext);

    

  const [error, setError] = useState("");
  const onInput = (e) => {
    const { value } = e.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;
  
    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "Title cannot be empty" : "");
  };
  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isNewTaskTitleEmpty) {
      addTask(
        clearNewTaskTitle , 
        () => {
          setNewTaskTitle("");
          newTaskTitleRef.current.focus();
        }
      );
    }
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <Fields
        className={style.field}
        label="new task title"
        id="new-tak"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskTitleRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        add
      </Button>
    </form>
  );
};

export default AddTaskForm;
