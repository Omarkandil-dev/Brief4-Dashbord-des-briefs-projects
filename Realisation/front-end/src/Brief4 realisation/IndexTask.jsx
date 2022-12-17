import React, { useEffect, useState } from "react";
import TaskContext from "./BriefProgressionContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
const IndexTask = (props) => {
  const { briefState, counter, briefName, showAllBriefInfo } =
    useContext(TaskContext);
  const { id } = useParams();
  useEffect(() => {
    showAllBriefInfo(id);
  }, []);
  const briefAffichage = briefState.task;
  console.log(briefState.task);

  return (
    <div>
      <div className="flex justify-center  m-2 p-2">
        <Link
          to="#"
          className="px-4 py-2 bg-gray-300 font-bold text-lg hover:bg-gray-700 text-white rounded-md"
        >
          {briefState.name}
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap  ">
        {briefAffichage.map((t) => (
          <div key={t.id}>
            <div class="w-full p-4 lg:w-96">
              <div class="p-8 bg-white rounded shadow-md">
                <h4 class="text-md font-light space-y-8 text-gray-800  hover:text-[#e36414]">
                  Task Name :{t.name}
                </h4>
                <h4 class="text-md font-light text-gray-800  hover:text-[#e36414]">
                  Delivrance Date :{t.starting_date}
                </h4>
                <h4 class="text-md font-light text-gray-800  hover:text-[#e36414]">
                  Recuperation Date :{t.finishing_date}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default IndexTask;
