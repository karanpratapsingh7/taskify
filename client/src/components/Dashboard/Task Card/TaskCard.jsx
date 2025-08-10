import React from "react";
const TaskCard = ({ item }) => {
  const showEditDiv = (e, id) => {
    e.preventDefault();
    window.sessionStorage.setItem("editTaskId", id);
    window.location.reload();
  };
  return (
    <div>
      {item && (
        <button
          className="bg-white rounded px-4 w-[100%] py-2 hover:shadow transition-all duration-300"
          onClick={(event) => {
            showEditDiv(event, item._id);
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="">{item.title}</h1>
            <div
              className={`text-sm ${
                item.priority === "low"
                  ? "bg-green-100 text-green-500"
                  : item.priority === "medium"
                  ? "bg-yellow-100 text-yellow-500"
                  : "bg-red-100 text-red-500"
              }  rounded-full px-2`}
            >
              <p>{item.priority}</p>
            </div>
          </div>
          <hr className="my-2" />
          <p className="text-sm text-zinc-500 text-start">{item.description}</p>
        </button>
      )}
    </div>
  );
};

export default TaskCard;
