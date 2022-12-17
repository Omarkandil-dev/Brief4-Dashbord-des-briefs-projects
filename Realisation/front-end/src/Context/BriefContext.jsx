import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BriefIndex } from "../Components/Brief Components/BriefIndex";
import useFormState from "../Hooks/useFormState";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const BriefContext = createContext();

export const BriefProvider = ({ children }) => {
  const [formBriefValue, SetBriefFormValue] = useState({
    name: "",
    creation_date: "",
    recuperation_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetBriefFormValue({ ...formBriefValue, [name]: value });
  };

  const [BriefInfo, setBriefInfo] = useState([]);
  const [singleBrief, setSingleBrief] = useState([]);
  const navigate = useNavigate();

  const getBriefInfo = async () => {
    const res = await axios.get("/Briefs");
    setBriefInfo(res.data);
  };
  const getSingleBriefInfo = async (id) => {
    const res = await axios.get("/Briefs/" + id);
    setSingleBrief(res.data);
    SetBriefFormValue(res.data);
  };

  const postBriefInfo = async (e) => {
    e.preventDefault();
    await axios.post("/Briefs", formBriefValue);
    SetBriefFormValue({
      name: "",
      creation_date: "",
      recuperation_date: "",
    });
    getBriefInfo();
    navigate("/BriefIndex");
  };

  const UpdateBrief = async (e) => {
    e.preventDefault();
    await axios.put(`/Briefs/${singleBrief.id}`, formBriefValue);
    getBriefInfo();
    navigate("/BriefIndex");
  };

  const deleteBrief = async (id) => {
    await axios.delete(`/Briefs/${id}`);
    getBriefInfo();
    navigate("/BriefIndex");
  };
  return (
    <BriefContext.Provider
      value={{
        BriefInfo,
        setBriefInfo,
        formBriefValue,
        SetBriefFormValue,
        getBriefInfo,
        handleChange,
        postBriefInfo,
        singleBrief,
        setSingleBrief,
        getSingleBriefInfo,
        UpdateBrief,
        deleteBrief,
      }}
    >
      {children}
    </BriefContext.Provider>
  );
};

export default BriefContext;
