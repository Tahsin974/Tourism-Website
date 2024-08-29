import { Helmet } from "react-helmet";
import Menubar from "../Shared/Menubar/Menubar";
import { useEffect, useState } from "react";
import axios from "axios";
import trash from '../../../images/Logo/trash-2 9.png'
import { Button } from "react-bootstrap";

const ManageAllBookings = () => {
    const [users,setUsers] = useState([]);
    const baseURL = "https://tourism-website-server-nine.vercel.app";
    useEffect(() =>{
        axios.get(`${baseURL}/users`)
        .then((res) => {
            
            setUsers(res.data)
          });
    },[])

    const handleDelete = id =>{
      const proceed = confirm("Are You Sure You Want To Remove This User?")
      if(proceed){
        fetch(`${baseURL}/deleteUser?id=${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          if(result.deletedCount > 0){
            alert("User Removed Successfully")
            const rest = users.filter(user => user._id !== id);
            setUsers(rest)
          }
        })
      }

    }
    console.log(users)
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manage All Bookings | Tourism-Website</title>
      </Helmet>
      <Menubar></Menubar>
      <div id="places" className="my-5 px-5">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-center my-14">
          Manage All Bookings
        </h1>
        <div className="overflow-x-auto">
          <table className="table lg:table-lg md:table-md sm:table-sm table-xs table-zebra">
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
                    users.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0)).map(user => <tr
                    key={user._id}
                    >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.destination}</td>
                        <td><Button onClick={()=>handleDelete(user._id)} className="btn bg-red-600 hover:bg-red-700 btn-sm text-white w-10">
                          <img src={trash} alt="" className="w-full" />
                          </Button></td>
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
