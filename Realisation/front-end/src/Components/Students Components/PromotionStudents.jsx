import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentContext from "../../Context/StudentContext";
import { useParams } from "react-router-dom";

const PromotionStudents = () => {
  const { id } = useParams();
  const { PromotionStudentInfo, getPromotionStudent, deleteStudent } =
    useContext(StudentContext);
  useEffect(() => {
    getPromotionStudent(id);
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-center m-2 p-2 space-x-8">
          <Link
            to={`/PromotionIndex/${id}`}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
          >
            {" "}
            {PromotionStudentInfo.name}
          </Link>
          <Link
            to={`/PromotionIndex/${id}/addStudent`}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
          >
            {" "}
            Add Student
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap">
        {PromotionStudentInfo.apprentice.map((student) => (
          <div
            key={student.id}
            className="w-80 m-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {student.first_name} {student.last_name}
              </h5>
              <span className="border-y-2 border-zinc-500 text-sm text-gray-500 dark:text-gray-400 hover:text-[#e36414]">
                Email : {student.email}
              </span>
              <span className=" border-zinc-500 text-sm  text-gray-500 dark:text-gray-400 hover:text-[#e36414] ">
                <Link to={`/PromotionIndex/${student.promotion_id}/show`}>
                  {" "}
                  {/* Student's Promotion :{student.promotion.name} */}
                </Link>
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link
                  to={`/StudentIndex/${student.id}/`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit Student
                </Link>
                <Link
                  onClick={() => deleteStudent(student.id)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Delete Student
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionStudents;
