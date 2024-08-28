import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Root from './Pages/Root/Root';
import Login from './Pages/Login/Login/Login';
import PlaceBooking from './Pages/PlaceBooking/PlaceBooking';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import MyBookings from './Pages/MyBookings/MyBookings/MyBookings';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/placebooking/:desitinationId",
        element: <PrivateRoute>
          <PlaceBooking></PlaceBooking>
        </PrivateRoute>,
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/managebookings",
        element: <ManageAllBookings></ManageAllBookings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
