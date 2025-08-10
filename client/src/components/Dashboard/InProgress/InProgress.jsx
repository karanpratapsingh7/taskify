import React from "react";
import TaskCard from "../Task Card/TaskCard";

const InProgress = ({ task }) => {
  return (
    <div className="flex flex-col gap-2">
      {task &&
        task.map((items, i) => (
          <div key={i}>
            <TaskCard item={items} />
          </div>
        ))}
    </div>
  );
};

export default InProgress;
