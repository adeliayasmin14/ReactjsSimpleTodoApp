import React from "react";
import {
  BrowserRouter as Routers,
  Routes ,
  Route,
} from "react-router-dom";
import Todospage from "../Pages/Todospage"
import DetailPage from "../Pages/Detailpage"
export default function Router() {
  return (
    <Routers>
        <Routes>
				<Route path="/" element={<Todospage />} />
				<Route path="/Detail" element={<DetailPage />} />
        </Routes>
    </Routers>
  );
}