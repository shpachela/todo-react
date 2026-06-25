import { memo, useContext } from "react";
import ToDoItem from "@/entities/todo/ui/ToDoItem";
import { TasksContext } from "@/entities/todo/model/TasksContext";

const ToDoList = ({ style }) => {
  const { tasks, filteredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className={style.emptyMessage}>there are no tasks yet</div>;
  }
  if (isEmptyFilteredTasks && hasTasks) {
    return <div className={style.emptyMessage}>tasks not founddff</div>;
  }

  return (
    <ul className={style.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem key={task.id} className={style.item} {...task} />
      ))}
    </ul>
  );
};

export default memo(ToDoList);
