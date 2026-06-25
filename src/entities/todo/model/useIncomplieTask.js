import { useRef } from "react";

const useIncomplieTask = (tasks) => {
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  return { firstIncompleteTaskRef, firstIncompleteTaskId };
};

export default useIncomplieTask;
