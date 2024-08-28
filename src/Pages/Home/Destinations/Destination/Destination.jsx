import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Destination = ({destination}) => {
    const {_id,imgURL,daysOfTrip,destinationName,price} = destination;

    const navigate = useNavigate()
    const handleCard = id =>{
      
      navigate(`/placebooking/${id}`)
    }
    return (
        <Card onClick={() => handleCard(_id)} className="w-4/5 shadow-md cursor-pointer">
      <Card.Img variant="top" src={imgURL}  />
      <Card.Body className="grid grid-cols-3 gap-x-4">
        <Card.Title className="font-bold col-span-2">{destinationName}</Card.Title>
        <Card.Text className="row-span-2 font-bold text-xl">
          $ {price}
        </Card.Text>
      </Card.Body>
      <h2 className="font-bold text-xl col-span-3 border-t mt-5 p-3">
        
      <i className="fa-solid fa-plane"></i>  {daysOfTrip} days Trip</h2>
    </Card>
    );
};

export default Destination;

Destination.propTypes = {
    destination : PropTypes.node,
}