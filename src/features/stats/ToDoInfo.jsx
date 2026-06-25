import { memo, useContext, useMemo } from "react";
import { TasksContext } from "@/entities/todo/model/TasksContext";

const ToDoInfo = ({ style }) => {
  const { tasks, handleDeleteAll } = useContext(TasksContext);
  const total = tasks.length;
  const hasTasks = total > 0;
  const done = useMemo(() => {
    return tasks.filter((task) => task.isDone).length;
  }, [tasks]);

  return (
    <div className={style.info}>
      <div className={style.totalTasks}>
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className={style.deleteAllButton}
          type="button"
          onClick={handleDeleteAll}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default memo(ToDoInfo);
