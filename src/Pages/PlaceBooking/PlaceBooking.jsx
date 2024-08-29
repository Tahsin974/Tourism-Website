import { useNavigate, useParams } from "react-router-dom";
import Menubar from "../Shared/Menubar/Menubar";
import './PlaceBooking.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useAuthContext from "../../Context/useAuthContext";
import { Helmet } from "react-helmet";
const PlaceBooking = () => {
  const {desitinationId} = useParams();
  const [destination, setDestination] = useState({});
  const [holidayPackage, setHolidayPackage] = useState({});
  
  const {user} = useAuthContext();
  const baseURL = "https://tourism-website-server-nine.vercel.app";
  const nameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const destinationRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate()
  

  const handleBookingForm = e =>{
    e.preventDefault();
    const bookingInfo = {
      name : nameRef.current.value,
      email : emailRef.current.value,
      country : countryRef.current.value,
      destinationName : destinationRef.current.value,
      description : descriptionRef.current.value,
      bookedPlace : destination ? destination : holidayPackage,
    }

    axios.post(`${baseURL}/userBookings`, bookingInfo)
    .then(res => {
      if(res.data.insertedId){
        alert("Place Booked Successfully")
        e.target.reset()
        navigate('/mybookings')
      }
    })
  }
  useEffect(() => {
    axios.get(`${baseURL}/booking?id=${desitinationId}`)
    .then((res) => {
      setDestination(res.data)
    });

    

    
  }, []);
  useEffect(() => {
    axios.get(`${baseURL}/packagesbooking?id=${desitinationId}`)
    .then((res) => {
      console.log(res)
      setHolidayPackage(res.data)
    });

    
  }, []);
  
  
    return (
      
        <div className="min-h-screen min-w-screen place-booking">
          <Helmet>
            <title>Place-Booking | Tourism-Website</title>
            </Helmet>
    <Menubar></Menubar>
    <div className="flex justify-center items-center py-4">
    <div className="card bg-card w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleBookingForm} className="card-body">
          <div>
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={user?.displayName || ''}
              className="input input-bordered w-full bg-white"
              ref={nameRef}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              value={user?.email || ''}
              className="input input-bordered w-full bg-white"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Country</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered w-full bg-white"
              ref={countryRef}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Selected Place</span>
            </label>
            <input
              type="text"
              placeholder="selected place"
              className="input input-bordered w-full bg-white"
              value={destination?.destinationName || holidayPackage?.destinationName || ''}
              ref={destinationRef}
              readOnly
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="textarea textarea-bordered w-full bg-white"
              ref={descriptionRef}
              
            />
          </div>
          <div className=" mt-6">
            <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white w-full">Place Booking</button>
    
          </div>
        </form>
      </div>
    </div>
      
    </div>
    );
};

export default PlaceBooking;