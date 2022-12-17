import React, { useEffect } from "react";
import { useContext } from "react";
import StudentContext from "../../Context/StudentContext";
import { useParams } from "react-router-dom";

const StudentCreate = () => {
  const { id } = useParams();
  const { studentFormValue, handleChange, postStudentInfo, settingUpId } =
    useContext(StudentContext);
  useEffect(() => {
    studentFormValue.promotion_id = id;
  });
  return (
    <div className="container ml-18 mt-40">
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              First Name
              <input
                type="text"
                name="first_name"
                value={studentFormValue.first_name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="creation_date" className="mb-2 text-sm font-medium">
              Last Name
              <input
                type="text"
                name="last_name"
                value={studentFormValue.last_name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="name" className="mb-2 text-sm font-medium">
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
              onClick={postStudentInfo}
              className="  px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
            >
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StudentCreate;
