import { Helmet } from "react-helmet";
import Menubar from "../Shared/Menubar/Menubar";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageAllBookings = () => {
    const [users,setUsers] = useState([]);
    const baseURL = "http://localhost:5000";
    useEffect(() =>{
        axios.get(`${baseURL}/users`)
        .then((res) => {
            console.log(res.data)
            setUsers(res.data)
          });
    },[])
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manage All Bookings | Tourism-Website</title>
      </Helmet>
      <Menubar></Menubar>
      <div id="places" className="my-5 px-5">
        <h1 className="text-5xl font-bold text-center my-14">
          Manage All Bookings
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
        
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Destination</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
              
                {
                    users.sort().map(user => <tr
                    key={user._id}
                    >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.destination}</td>
                        <td><button className="btn btn-error text-white">Delete</button></td>
                    </tr>
                
                    )
                }
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllBookings;
