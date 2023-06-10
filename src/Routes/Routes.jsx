import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../User/Login/Login";
import Registration from "../User/Registration/Registration";
import AllUsers from "../Pages/Allusers/AllUsers";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../Pages/Dashboard/Instructors/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import MyCart from "../Pages/Dashboard/Student/MyCart";
import PaymentPage from "../Pages/Dashboard/Student/PaymentPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
        {
          path: 'approveclass',
          element: <ClassesPage></ClassesPage>
        }
       
      ]
    },

    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path : 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addclass',
          element :<AddClass></AddClass>
        },
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <PaymentPage></PaymentPage>
        }
      ]
    }
  ]);