import { createBrowserRouter } from "react-router-dom";
import Landingpg from "./components/Landingpg";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";
import Shopping from "./components/Shopping";
import Admin_panel from "./components/Admin_panel";
import Add_product from "./components/Add_product";
import Delete_product from "./components/Delete_product";
import Update_product from "./components/Update_product";
import View from "./components/View";
import User_request from "./components/User_request";

const router = createBrowserRouter([
  { path: "/", element: <Landingpg /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "/about", element: <About /> },
  { path: "/shopping", element: <Shopping /> },
  { path: "/admin", element: <Admin_panel /> },
  { path: "/add", element: <Add_product /> },
  { path: "/delete", element: <Delete_product /> },
  { path: "/update", element: <Update_product /> },
  { path: "/view", element: <View /> },
  { path: "/orders", element: <User_request /> },
]);

export default router;
