import { Routes, Route, Link } from "react-router-dom";
import { PromotionProvider } from "./Context/PromotionContext";
import { BriefProvider } from "./Context/BriefContext";
import { StudentProvider } from "./Context/StudentContext";
import { TaskProvider } from "./Brief4 realisation/BriefProgressionContext";
import { Home } from "./Components/Home";
import { PromotionCreate } from "./Components/Promotion Components/PromotionCreate";
import { PromotionsIndex } from "./Components/Promotion Components/PromotionsIndex";
import { PromotionUpdate } from "./Components/Promotion Components/PromotionUpdate";
import { BriefIndex } from "./Components/Brief Components/BriefIndex";
import BriefCreate from "./Components/Brief Components/BriefCreate";
import BriefUpdate from "./Components/Brief Components/BriefUpdate";
import StudentsIndex from "./Components/Students Components/StudentsIndex";
import StudentCreate from "./Components/Students Components/StudentCreate";
import StudentUpdate from "./Components/Students Components/StudentUpdate";
import PromotionStudents from "./Components/Students Components/PromotionStudents";
import IndexBrief from "./Brief4 realisation/IndexBrief";
import IndexTask from "./Brief4 realisation/IndexTask";
import { BriefProgression } from "./Brief4 realisation/BriefProgression";
import DetailledBrief from "./Brief4 realisation/DetailledBrief";

function App() {
  return (
    <PromotionProvider>
      <BriefProvider>
        <StudentProvider>
          <TaskProvider>
            <div className="bg-[#f8f9fa] flex ">
              <nav className="bg-gray-200 w-52  min-h-screen flex flex-col justify-start aligns-start">
                <ul>
                  <li className="m-2 p-2 hover:text-[#e36414]">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="m-2 p-2 hover:text-[#e36414]">
                    <Link to="/PromotionIndex">Promotions</Link>
                  </li>
                  <li className="m-2 p-2 hover:text-[#e36414] ">
                    <Link to="/StudentIndex">Apprentices</Link>
                  </li>
                  <li className="m-2 p-2 hover:text-[#e36414]">
                    <Link to="/BriefIndex">Briefs</Link>
                  </li>
                  <li className="m-2 p-2 hover:text-[#e36414]">
                    <Link to="/IndexBrief">Brief 4</Link>
                  </li>
                </ul>
              </nav>
              <div className="container ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/PromotionIndex">
                    <Route index element={<PromotionsIndex />} />
                    <Route path="create" element={<PromotionCreate />} />
                    <Route path=":id" element={<PromotionUpdate />} />
                    <Route path=":id/show" element={<PromotionStudents />} />
                    <Route path=":id/addStudent" element={<StudentCreate />} />
                  </Route>
                  <Route path="/BriefIndex">
                    <Route index element={<BriefIndex />} />
                    <Route path="create" element={<BriefCreate />} />
                    <Route path=":id" element={<BriefUpdate />} />
                  </Route>
                  <Route path="/StudentIndex">
                    <Route index element={<StudentsIndex />} />
                    <Route path=":id" element={<StudentUpdate />} />
                  </Route>

                  {/*Brief4 Route----------------------------------- */}
                  <Route path="IndexBrief">
                    <Route index element={<IndexBrief />} />
                    <Route
                      path=":id/BriefProgression"
                      element={<BriefProgression />}
                    />
                    <Route path=":id/IndexTask" element={<IndexTask />} />
                    <Route
                      path=":id/BriefProgression/detailledBrief"
                      element={<DetailledBrief />}
                    />
                  </Route>
                </Routes>
              </div>
            </div>
          </TaskProvider>
        </StudentProvider>
      </BriefProvider>
    </PromotionProvider>
  );
}

export default App;
