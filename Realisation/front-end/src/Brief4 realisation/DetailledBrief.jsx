import React, { useEffect, useState } from "react";
import TaskContext from "./BriefProgressionContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  plugins,
  Title,
  Filler
);

// config
const options = {
  indexAxis: "y",

  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },

      ticks: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },

      ticks: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};
//------------------------------------------------------------------------------

const DetailledBrief = () => {
  const {
    briefState,
    counter,
    briefName,
    showAllBriefInfo,
    detailledBrief,
    finishedTaskCounter,
    status,
  } = useContext(TaskContext);
  const { id } = useParams();
  useEffect(() => {
    showAllBriefInfo(id);
    setChartState({
      ...chartState,
      labels: briefState.target_apprentice.map((student) => {
        return student.first_name + " " + student.last_name;
      }),
      datasets: [
        {
          label: "# totality of tasks",
          data: [counter, counter],
          backgroundColor: ["rgba(240, 0, 0, 0.63)"],
          borderColor: ["green"],
          borderWidth: 1,
          borderSkipped: false,
          borderRadius: 5,
          barPercentage: 0.4,
        },
        {
          label: "# task progression",
          data: [...briefState.taskProgress],
          backgroundColor: ["rgba(0, 17, 240, 1)"],
          borderColor: ["green"],
          borderWidth: 1,
          borderSkipped: false,
          borderRadius: 5,
          barPercentage: 0.4,
        },
      ],
    });
  }, []);
  console.log(briefState.taskProgress);
  console.log(counter);
  console.log(detailledBrief);
  console.log(status);
  // console.log(briefState.studentTask);
  // console.log(briefState.studentTask);
  console.log(detailledBrief);
  const [chartState, setChartState] = useState({
    labels: briefState.target_apprentice.map((student) => {
      return student.first_name + " " + student.last_name;
    }),
    datasets: [
      {
        label: "# totality of tasks",
        data: [counter, counter],
        backgroundColor: ["rgba(240, 0, 0, 0.63)"],
        borderColor: ["green"],
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 5,
        barPercentage: 0.4,
      },
      {
        label: "# task progression",
        data: [...briefState.taskProgress],
        backgroundColor: ["rgba(0, 17, 240, 1)"],
        borderColor: ["green"],
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 5,
        barPercentage: 0.4,
      },
    ],
  });
  const assigned_task = detailledBrief.map((task) => task.assigned_task);

  console.log(assigned_task);
  const filteredData = assigned_task.map((obj) =>
    obj.filter((t) => t.pivot.taskStatus === 1)
  );
  console.log(filteredData);
  const datafiltered = [];
  for (let filterData1 of filteredData) {
    for (let filterData2 of filterData1) {
      if (
        filterData2.pivot.taskStatus === 1 &&
        filterData2.pivot.apprentice_id === 1
      ) {
        let data;
        data = filterData2.pivot.taskStatus;
        datafiltered.push(data);
      }
    }
  }
  console.log(datafiltered);
  return (
    <div>
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
          {detailledBrief.map((t) => (
            <div>
              <div class="w-full p-4 lg:w-96">
                <div class="p-8 bg-white rounded shadow-md">
                  <h4 class="text-md font-light space-y-8 text-gray-800  hover:text-[#e36414]">
                    Student Name :{t.first_name} {t.last_name}
                  </h4>
                  <div>
                    {t.assigned_task
                      .filter((item) => item.pivot.taskStatus !== 1)
                      .map((obj) => (
                        <h4 class="text-md font-light space-y-8 text-gray-800  hover:text-[#e36414]">
                          {obj.name}
                          <h4 class="text-md font-light text-gray-800  hover:text-[#e36414]">
                            Delivrance Date :{obj.starting_date}
                          </h4>
                          <h4 class="text-md font-light text-gray-800  hover:text-[#e36414]">
                            Recuperation Date :{obj.finishing_date}
                          </h4>
                          <h4 class="text-md font-light text-gray-800  hover:text-[#e36414]">
                            Task Status :
                            {obj.pivot.taskStatus ? "Finished" : "On Going"}
                          </h4>
                        </h4>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="p-8 w-1/2 mx-auto bg-white rounded shadow-md">
          <Bar data={chartState} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DetailledBrief;
