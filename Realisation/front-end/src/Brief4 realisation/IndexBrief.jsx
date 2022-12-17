import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const IndexBrief = () => {
  const [briefInfo, setBriefInfo] = useState([]);
  useEffect(() => {
    const showAllBriefInfo = async () => {
      const { data } = await axios.get("/Briefs");
      console.log(data);
      setBriefInfo(data);
    };
    showAllBriefInfo();
  }, []);
  return (
    <div>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 rounded-l-lg">
                Brief name
              </th>
              <th scope="col" class="py-3 px-6">
                Brief State
              </th>
            </tr>
          </thead>
          {briefInfo.map((brief) => (
            <tbody key={brief.id}>
              <tr class="bg-white dark:bg-gray-800">
                <td
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {brief.name}
                </td>
                <td class="py-4 px-6">
                  <Link
                    className="bg-rose-200 p-2 m-2"
                    to={`${brief.id}/BriefProgression`}
                  >
                    + Consulter
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
          {/* <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="py-3 px-6 text-base">Total</th>
                <td class="py-3 px-6">3</td>
                <td class="py-3 px-6">21,000</td>
            </tr>
        </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default IndexBrief;
