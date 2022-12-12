import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const PromotionContext = createContext();

export const PromotionProvider = ({ children }) => {
  const [formValue, SetFormValue] = useState({ name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValue({ ...formValue, [name]: value });
  };

  const [promotionInfo, setPromotionsInfo] = useState([]);
  const [singlePromo, setSinglePromo] = useState([]);
  const navigate = useNavigate();

  const getPromotionInfo = async () => {
    const res = await axios.get("/promotion");
    setPromotionsInfo(res.data);
  };
  const getSinglePromotionInfo = async (id) => {
    const res = await axios.get("/promotion/" + id);
    setSinglePromo(res.data);
    SetFormValue(res.data);
  };

  const postPromotionInfo = async (e) => {
    e.preventDefault();
    await axios.post("/promotion", formValue);
    SetFormValue({ name: "" });
    getPromotionInfo();
    navigate("/PromotionIndex");
  };

  const UpdatePromotion = async (e) => {
    e.preventDefault();
    await axios.put(`/promotion/${singlePromo.id}`, formValue);
    getPromotionInfo();
    navigate("/PromotionIndex");
  };

  const deletePromotion = async (id) => {
    await axios.delete(`/promotion/${id}`);
    getPromotionInfo();
    navigate("/PromotionIndex");
  };
  return (
    <PromotionContext.Provider
      value={{
        promotionInfo,
        setPromotionsInfo,
        formValue,
        SetFormValue,
        getPromotionInfo,
        handleChange,
        postPromotionInfo,
        singlePromo,
        getSinglePromotionInfo,
        UpdatePromotion,
        deletePromotion,
      }}
    >
      {children}
    </PromotionContext.Provider>
  );
};

export default PromotionContext;
