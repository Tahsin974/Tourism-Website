import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const MyBooking = ({ booking,handleCancel }) => {
  const {imgURL,destinationName,country,price,daysOfTrip,images,activities  } = booking;
  console.log(booking)
  

  
  
  return (
    <>
    
    <Card  className=" shadow-md p-2">
        
    <div className={images ? 'grid grid-cols-7 gap-2 items-center' : ''}>
    {
          imgURL ?
           <img
          src={imgURL}
          alt="Album"
        />
        :
        <>
        <img
          src={images[0]}
          alt="Album"
          className='col-span-4 rounded-badge'
        />
        <img
          src={images[1]}
          alt="Album"
          className='col-span-3 rounded-full'
        />
        </>

        }
    </div>
  
    <Card.Body >
      <Card.Title className="font-bold text-2xl">{destinationName}</Card.Title>
      <p className="text-gray-400 text-lg"><small>{country}</small></p>

      <Card.Text className="font-bold text-xl">
        {
          activities ? <ol className='border-t-2 my-4 pt-3 space-y-2'>
          {
              activities.map(activity => <li
              key={activity}
              ><i className="fa-solid fa-circle-check text-green-500"></i>  {activity}</li>)
          }
          </ol> : <></>
        }
    
        </Card.Text>
      <Card.Text className="font-bold text-2xl mb-7 mt-3">
        Price: ${price}
      </Card.Text>
      
    </Card.Body>
    <div className={daysOfTrip ? "flex items-center justify-between border-t mt-5 p-3" : "border-t mt-5 p-3"}>
      {
        daysOfTrip ? <h2 className="font-bold text-xl  ">
        
        <i className="fa-solid fa-plane"></i>  {daysOfTrip} days Trip</h2> : <></>
      }
        <button onClick={() => handleCancel(destinationName)} className={daysOfTrip ? 'btn bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white' : 'btn bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white w-full'}>Cancel</button>
        
      </div>
    
  </Card>
  
    </>
  );
};

export default MyBooking;
MyBooking.propTypes = {
  booking: PropTypes.node,
  handleCancel: PropTypes.node,
};
