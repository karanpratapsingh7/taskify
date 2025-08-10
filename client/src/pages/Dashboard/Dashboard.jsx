import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/Header/Header";
import YetToStart from "../../components/Dashboard/YetToStart/YetToStart";
import InProgress from "../../components/Dashboard/InProgress/InProgress";
import Completed from "../../components/Dashboard/Completed/Completed";
import StackTitle from "../../components/Dashboard/StackTitle/StackTitle";
import AddTask from "../../components/Dashboard/Add Task/AddTask";
import axios from "axios";
import EditTask from "../../components/Dashboard/EditTask/EditTask";
const Dashboard = () => {
  const [AddTaskDiv, setAddTaskDiv] = useState("hidden");
  const [editTaskDiv, setEditTaskDiv] = useState("hidden");
  const [EditTaskId, setEditTaskId] = useState();
  const [Tasks, setTasks] = useState();
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/getUserDetails",
          { withCredentials: true }
        );
        setTasks(res.data.tasks);
      } catch (error) {}
    };
    fetchUserDetails();
    if (window.sessionStorage.getItem("editTaskId")) {
      setEditTaskDiv("block");
      setEditTaskId(window.sessionStorage.getItem("editTaskId"));
    }
  }, [AddTaskDiv]);

  return (
    <div className="w-full relative ">
      <div className="bg-white">
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>
      <div className="px-12 py-4 flex gap-12 bg-zinc-100 min-h-[89vh] max-h-auto ">
        <div className="w-1/3">
          <div className="border-b pb-2 ">
            <StackTitle title="Yet To Start" />
          </div>
          <div className="pt-2">
            {Tasks && <YetToStart task={Tasks[0].yetToStart} />}
          </div>
        </div>
        <div className="w-1/3">
          <div className="border-b pb-2 ">
            <StackTitle title="In Progress" />
          </div>
          <div className="pt-2">
            {Tasks && <InProgress task={Tasks[1].inProgress} />}
          </div>
        </div>
        <div className="w-1/3">
          <div className="border-b pb-2 ">
            <StackTitle title="Completed" />
          </div>
          <div className="pt-2">
            {Tasks && <Completed task={Tasks[2].completed} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full h-screen ${AddTaskDiv} fixed top-0 left-0  bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full h-screen ${AddTaskDiv} fixed top-0 left-0 flex items-center justify-center`}
      >
        <AddTask setAddTaskDiv={setAddTaskDiv} />
      </div>
      <div
        className={`w-full h-screen ${editTaskDiv} fixed top-0 left-0  bg-zinc-800 opacity-85`}
      ></div>
      <div
        className={`w-full h-screen ${editTaskDiv} fixed top-0 left-0 flex items-center justify-center`}
      >
        {EditTaskId && (
          <EditTask EditTaskId={EditTaskId} setEditTaskDiv={setEditTaskDiv} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
