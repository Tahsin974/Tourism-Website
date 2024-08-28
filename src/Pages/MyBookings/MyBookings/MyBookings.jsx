import { Helmet } from "react-helmet";
import Menubar from "../../Shared/Menubar/Menubar";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../../../Context/useAuthContext";
import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const {user} = useAuthContext();
  const baseURL = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${baseURL}/userBookings?email=${user.email}`)
    .then((res) => {
      setBookings(res.data)
    });
  }, []);
    return (
        <div className="min-h-screen">
            <Helmet>
            <title>My Bookings | Tourism-Website</title>
            </Helmet>
            <Menubar></Menubar> 
            <div id="places" className="my-5 px-5">
            <h1 className="text-6xl font-bold text-center my-14">My Bookings</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-items-center">
                {
                    bookings.map(booking => <MyBooking
                    key={booking._id}
                    booking = {booking.bookedPlace}
                    ></MyBooking>)
                }
                
            </div>
            
        </div>
            
        </div>
    );
};

export default MyBookings;