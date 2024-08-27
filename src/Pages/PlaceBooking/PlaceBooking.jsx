import Menubar from "../Shared/Menubar/Menubar";
import './PlaceBooking.css'
const PlaceBooking = () => {
    return (
        <div className="min-h-screen min-w-screen place-booking">
    <Menubar></Menubar>
    <div className="flex justify-center items-center py-4">
    <div className="card bg-card w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div>
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
              value='uganda'
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
              className="textarea textarea-bordered w-full"
              
              required
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