
import { Link } from "react-router-dom";
import App from "./App"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./AppStates";
import Home from "./routes/Home";

const Navigation = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  )
}
export default Navigation
