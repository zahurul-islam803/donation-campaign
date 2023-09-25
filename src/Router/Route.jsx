import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const createMyRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

export default createMyRoute;