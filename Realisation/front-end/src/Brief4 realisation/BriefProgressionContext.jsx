import { useState } from "react";
import axios from "axios";
import React from "react";
import IndexTask from "./IndexTask";
import { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const user = { name: "ziad" };
  const [briefState, setBriefState] = useState({
    id: null,
    name: "",
    creation_date: "",
    recuperation_date: "",
    task: [],
    target_apprentice: [],
    taskProgress: [],
  });
  const showAllBriefInfo = async (id) => {
    const { data } = await axios.get(`/Briefs/${id}`);
    // console.log(data);
    let initialValue = 0;
    setBriefState({
      ...briefState,
      id: data.id,
      name: data.name,
      creation_date: data.creation_date,
      recuperation_date: data.recuperation_date,
      task: [...data.task],
      target_apprentice: [...data.target_apprentice],
      taskProgress: data.target_apprentice.map((task) =>
        task.assigned_task
          .filter((obj) => obj.pivot.taskStatus === 1)
          .map((obj2) => obj2.pivot.taskStatus)
          .reduce((a, b) => a + b, initialValue)
      ),
    });
  };
  let counter = 0;
  const briefName = [];
  for (let brief of briefState.task) {
    briefName.push(brief);
    counter = counter + 1;
  }
  // const status = briefState.studentTask.map((marray) =>
  //   marray.map((obj) => obj.pivot.taskStatus)
  // );

  const detailledBrief = briefState.target_apprentice;

  // let finishedTaskCounter = 0;
  // for (let i = 0; i < briefState.task; i++) {
  //   if (briefState.task[i].taskStatus === 1) {
  //     finishedTaskCounter++
  //   }

  return (
    <TaskContext.Provider
      value={{
        briefState,
        counter,
        // briefName,
        showAllBriefInfo,
        detailledBrief,
        // status,
        // finishedTaskCounter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
