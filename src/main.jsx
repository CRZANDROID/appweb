import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/body"
import Characters from "./components/MoreCars/BodyMore.jsx"
import ContactUs from './components/Recomendaciones/RecomBody.jsx'
import LayoutHome from "./components/Layouts/LayoutHome.jsx";
import LayoutPreregistro from "./components/Layouts/LayoutPreregistro.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
    <BrowserRouter>
        <Routes>
            <Route path="/appweb/" element={<LayoutHome></LayoutHome>}></Route>
            <Route path="/Preregistro" element={<LayoutPreregistro></LayoutPreregistro>}></Route>
        </Routes>
    </BrowserRouter>
  </>
);
