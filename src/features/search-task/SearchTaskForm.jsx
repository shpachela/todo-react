import Fields from "@/shared/ui/Field";
import { useContext } from "react";
import { TasksContext } from "@/entities/todo/model/TasksContext";

const SearchTaskForm = ({ style }) => {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form className={style.form} onSubmit={(e) => e.preventDefault()}>
      <Fields
        className={style.field}
        label="search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;
