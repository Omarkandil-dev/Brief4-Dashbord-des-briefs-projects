import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState([]);
  const [PromotionStudentInfo, setPromotionStudentInfo] = useState({
    name: "",
    created_at: "",
    updated_at: "",
    apprentice: [],
  });

  const [studentFormValue, setStudentFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    promotion_id: 0,
  });

  const getStudentInfo = async () => {
    const res = await axios.get("/Students");
    setStudentInfo(res.data);
  };
  const getPromotionStudent = async (id) => {
    const res = await axios.get(`/promotions/${id}/show`);
    const response = res.data;
    setPromotionStudentInfo({
      ...PromotionStudentInfo,
      name: response.name,
      created_at: response.created_at,
      updated_at: response.updated_at,
      apprentice: response.apprentice,
    });
    console.log(res.data);
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setStudentFormValue({ ...studentFormValue, [name]: value });
  };
  // const settingUpId = async (e) => {
  //   const { name, value } = e.target;
  //   setStudentFormValue({ ...studentFormValue, [name]: value });
  // };
  const postStudentInfo = async (e) => {
    e.preventDefault();
    await axios.post("/Students", studentFormValue);
    getStudentInfo();
    navigate("/StudentIndex");
  };
  const getSingleStudentInfo = async (id) => {
    const { data } = await axios.get("/Students/" + id);
    console.log(data);
    setStudentFormValue({
      ...studentFormValue,
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      promotion_id: data.promotion_id,
    });
  };
  const UpdateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`/Students/${studentFormValue.id}`, studentFormValue);
    getStudentInfo();
    navigate("/StudentIndex");
  };
  const deleteStudent = async (id) => {
    await axios.delete(`/Students/${id}`);
    getStudentInfo();
    navigate("/StudentIndex");
  };
  return (
    <StudentContext.Provider
      value={{
        studentInfo,
        getStudentInfo,
        postStudentInfo,
        handleChange,
        studentFormValue,
        handleChange,
        postStudentInfo,
        PromotionStudentInfo,
        getPromotionStudent,
        getSingleStudentInfo,
        UpdateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
export default StudentContext;
