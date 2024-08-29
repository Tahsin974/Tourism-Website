import { Helmet } from "react-helmet";
import Menubar from "../Shared/Menubar/Menubar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPlaces = () => {
    const { register, handleSubmit,reset } = useForm();
    const baseURL = "http://localhost:5000";
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        axios.post(`${baseURL}/addplace`, data).then((res) => {
            if (res.data.insertedId) {
              alert("Place Add Successfully");
              reset()
              navigate("/home");
            }
          });
      };
    return (
        <>
        <Menubar></Menubar>
        <div className=" min-h-screen">
            <Helmet>
            <title>Add Places | Tourism-Website</title>
            </Helmet>
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-center my-3">Add Places</h1>
            <div className="card bg-white shadow-2xl  lg:m-5 m-2">
        <form onSubmit={handleSubmit(onSubmit)}  className="card-body grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <div>
            <label className="label">
              <span className="label-text">Destination Name</span>
            </label>
            <input
              type="text"
              placeholder="Destination Name"
              className="input input-bordered bg-white"
              {...register("destinationName")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered bg-white"
              {...register("country")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Days Of Trip</span>
            </label>
            <input
              type="number"
              placeholder="days of trip"
              className="input input-bordered bg-white"
              {...register("daysOfTrip")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered bg-white"
              placeholder="Price"
              {...register("price")}
            />
          </div>
          <div className=" row-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter description"
              className="textarea textarea-bordered bg-white"
              {...register("description")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Banner</span>
            </label>
            <input
              type="url"
              className="input input-bordered bg-white"
              placeholder="Enter banner url"
              {...register("imgURL")}
            />
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn lg:btn-wide bg-orange-500 hover:bg-orange-600 text-white">Submit</button>
          </div>
          
        </form>
      </div>            
            
        </div>
        </>
    );
};

export default AddPlaces;