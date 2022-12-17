import { Routes, Route, Link } from "react-router-dom";
import { PromotionProvider } from "./context/PromotionContext";
import Home from "./components/Home";
import PromotionCreate from "./components/Promotion/PromotionCreate";
import PromotionIndex from "./components/Promotion/PromotionIndex";

import './App.css';

function App() {
  return (
    <PromotionProvider>
    <div className="App">
                <nav className="bg-gray-200 w-52  min-h-screen flex flex-col justify-start aligns-start">
                  <ul>
                    <li className="m-2 p-2 hover:text-[#e36414]">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 p-2 hover:text-[#e36414]">
                      <Link to="/PromotionIndex">Promotions</Link>
                    </li>
                    {/* <li className="m-2 p-2 hover:text-[#e36414] ">
                      <Link to="/ApprenticeIndex">Apprentices</Link>
                    </li>
                    <li className="m-2 p-2 hover:text-[#e36414]">
                      <Link to="/BriefIndex">Briefs</Link>
                    </li> */}
                  </ul>
                </nav>
                <div>
                <Routes>
       <Route path="/" element={<Home />} />
              <Route path="/PromotionIndex">
                <Route index element={<PromotionIndex/>} />
                <Route path="create" element={<PromotionCreate />} />
                {/* <Route path=":id" element={<PromotionUpdate />} /> */}
      </Route>
              </Routes>
        </div>
    </div>
    </PromotionProvider>
    
  );
}

export default App;
