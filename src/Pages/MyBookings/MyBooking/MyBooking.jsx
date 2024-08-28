import PropTypes from "prop-types";

const MyBooking = ({ booking }) => {
  const {imgURL,destinationName,country,price,daysOfTrip  } = booking;
  
  return (
    <div className="card  bg-white shadow-xl">
      <figure>
        <img
          src={imgURL}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{destinationName}</h2>
        <p className="text-gray-400 text-lg"><small>{country}</small></p>
        <p className="font-bold text-3xl">Price: ${price}</p>
        
      </div>
      <div className="flex items-center justify-between border-t mt-5 p-3">
      <h2 className="font-bold text-xl  ">
        
        <i className="fa-solid fa-plane"></i>  {daysOfTrip} days Trip</h2>
        <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white">Cancel</button>
      </div>
    </div>
  );
};

export default MyBooking;
MyBooking.propTypes = {
  booking: PropTypes.node,
};
