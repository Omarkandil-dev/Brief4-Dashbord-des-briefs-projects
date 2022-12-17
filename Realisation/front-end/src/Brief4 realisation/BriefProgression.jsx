import React, { useEffect, useState } from "react";
import { useContext } from "react";
import TaskContext from "./BriefProgressionContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export const BriefProgression = (props) => {
  const { briefState, showAllBriefInfo, counter, briefName, taskState } =
    useContext(TaskContext);
  const { id } = useParams();
  useEffect(() => {
    showAllBriefInfo(id);
  }, []);
  console.log(briefState);
  return (
    <div>
      {
        <div class="flex flex-col align-center  relative m-10 ">
          <table
            className="flex flex-col  items-center border-2 border-gray-400 rounded shadow-md"
            key={briefState.id}
            class=" w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead class="flex justify-center text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 rounded-l-lg ">
                  Brief id number {briefState.id}
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col  items-center border-2 border-gray-400 rounded shadow-md">
              <tr class=" dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Brief Name : {briefState.name}
                </th>
              </tr>
              <tr class=" dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Creation Date : {briefState.creation_date}
                </th>
              </tr>
              <tr class=" dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Recuperation Date : {briefState.recuperation_date}
                </th>
              </tr>
              <tr class=" dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Number of tasks : {counter}{" "}
                  <Link
                    className="bg-rose-200 p-2 m-2"
                    to={`/IndexBrief/${briefState.id}/IndexTask`}
                  >
                    + Consulter
                  </Link>
                </th>
              </tr>
              <tr class="font-semibold  dark:bg-gray-800">
                <th scope="row" class="py-3 px-6 text-base">
                  Total
                </th>
              </tr>
              <tr class=" dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link
                    className="text-lg text-gray-900  hover:text-[#e36414]"
                    to={`/IndexBrief/${id}/BriefProgression/detailledBrief/`}
                  >
                    More details
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};
