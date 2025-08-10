import React, { useState } from "react";
import TaskCard from "../Task Card/TaskCard";

const YetToStart = ({ task, setEditTaskDiv }) => {
  return (
    <div className="flex flex-col gap-2">
      {task.map((items, i) => (
        <div key={i}>
          <TaskCard item={items} />
        </div>
      ))}
    </div>
  );
};

export default YetToStart;
