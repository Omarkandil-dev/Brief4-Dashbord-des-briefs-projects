import React from "react";
import { useContext, useEffect } from "react";
import StudentContext from "../../Context/StudentContext";
import { useParams } from "react-router-dom";

const StudentUpdate = () => {
  const {
    studentFormValue,
    handleChange,
    getSingleStudentInfo,
    UpdateStudent,
  } = useContext(StudentContext);
  const { id } = useParams();

  useEffect(() => {
    getSingleStudentInfo(id);
  }, []);

  return (
    <div className="container ml-18 mt-40">
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="first_name" className="mb-2 text-sm font-medium">
              First Name
              <input
                type="text"
                name="first_name"
                value={studentFormValue.first_name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="last_name" className="mb-2 text-sm font-medium">
              Last Name
              <input
                type="text"
                name="last_name"
                value={studentFormValue.last_name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
              <input
                type="text"
                name="email"
                value={studentFormValue.email}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={UpdateStudent}
              className="  px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
            >
              Update Brief
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentUpdate;
