import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
const HolidayPackage = ({holidayPackage}) => {
    const {destination,price,activities,images} = holidayPackage;
    return (
        <Card className="w-4/5 shadow-md p-2">
        
      <div className='grid grid-cols-7 gap-2 items-center'>
      <img src={images[0]} alt="" className='col-span-4 rounded-badge'/>
      <img src={images[1]} alt="" className='col-span-3 rounded-full'/>
      </div>
    
      <Card.Body >
        <Card.Title className="font-bold text-2xl">{destination}</Card.Title>
        <Card.Text className="font-bold text-xl">
        <ol className='border-t-2 my-4 pt-3 space-y-2'>
        {
            activities.map(activity => <li
            key={activity}
            ><i className="fa-solid fa-circle-check text-green-500"></i>  {activity}</li>)
        }
        </ol>
    
        </Card.Text>
        <Card.Text className="font-bold text-2xl mb-7 mt-3">
          Price: <del>${price}</del> $1200
        </Card.Text>
        
      </Card.Body>
      <button className='btn bg-neutral-950 hover:bg-neutral-950 text-white'>Book Now!</button>
    </Card>
    );
};

export default HolidayPackage;

HolidayPackage.propTypes = {
    holidayPackage : PropTypes.node,
}