import Home from "../../pages/home";
import SignUp from "../../pages/signUp";
import LoginPage from "../../pages/loginPage";
import ResetPassword from "../../pages/resetPassword";

export const router = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/signup",
    component: <SignUp />,
  },
  {
    id: 3,
    path: "/login",
    component: <LoginPage />,
  },
  {
    id: 4,
    path: "/resetPassword",
    component: <ResetPassword />,
  },
];
