import React from "react";
import { useContext, useEffect } from "react";
import PromotionContext from "../../Context/PromotionContext";
import { useParams } from "react-router-dom";
const PromotionUpdate = () => {
  const {
    formValue,
    handleChange,
    postPromotionInfo,
    singlePromo,
    getSinglePromotionInfo,
    UpdatePromotion,
  } = useContext(PromotionContext);
  const { id } = useParams();

  useEffect(() => {
    getSinglePromotionInfo(id);
  }, []);

  return (
    <div className="container ml-18 mt-40">
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 text-sm font-medium">
              Promotion Name
              <input
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              ></input>
            </label>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={UpdatePromotion}
              className="  px-4 py-2 bg-gray-300 hover:bg-gray-700 text-white rounded-md"
            >
              Update Promotion
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { PromotionUpdate };
