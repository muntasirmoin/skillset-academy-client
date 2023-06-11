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
import MyEnrolledClasses from "../Pages/Dashboard/Student/MyEnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import Update from "../Pages/Dashboard/Instructors/MyClasses/Update";
import ErrorPage from "../ErrorPage/ErrorPage";
import InstructorsPage from "../Pages/Home/InstructorsPage/InstructorsPage";
import DashboardHome from "../Pages/Dashboard/DashboardHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: 'login',
            element: <Login></Login>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: 'registration',
            element: <Registration></Registration>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'approveclass',
          element: <ClassesPage></ClassesPage>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'instructorAll',
          element: <InstructorsPage></InstructorsPage>,
          errorElement: <ErrorPage></ErrorPage>
        }
       
      ]
    },

    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path : 'counter',
          element: <DashboardHome></DashboardHome>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path : 'allusers',
          element: <AllUsers></AllUsers>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'addclass',
          element :<AddClass></AddClass>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses></ManageClasses>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'payment/:selectId',
          element: <PaymentPage></PaymentPage>
        },
        {
          path: 'myenroll',
          element: <MyEnrolledClasses></MyEnrolledClasses>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>,
          errorElement: <ErrorPage></ErrorPage>
        }
        ,
        {
          path: 'update/:id',
          element: <Update></Update>,
          errorElement: <ErrorPage></ErrorPage>
        }
      ]
    }
  ]);