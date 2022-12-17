import React from "react";
import { useContext } from "react";
import BriefContext from "../../Context/BriefContext";

const BriefCreate = () => {
  const { formBriefValue, handleChange, postBriefInfo } =
    useContext(BriefContext);

  return (
    <div className="container ml-18 mt-40">
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              Brief Name
              <input
                type="text"
                name="name"
                value={formBriefValue.name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="creation_date" className="mb-2 text-sm font-medium">
              Brief Creation Date
              <input
                type="date"
                name="creation_date"
                value={formBriefValue.creation_date}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              Brief Recuperation Date
              <input
                type="date"
                name="recuperation_date"
                value={formBriefValue.recuperation_date}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={postBriefInfo}
              className="  px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
            >
              Add Promotion
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BriefCreate;
