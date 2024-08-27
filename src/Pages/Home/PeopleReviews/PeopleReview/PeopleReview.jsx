import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

const PeopleReview = ({user}) => {
    const {imgURL,destinationName,country} = user;
    
  return (
    <Card className="w-3/4 grid grid-cols-3 px-5">
      <Card.Img variant="top" src={imgURL} className="p-3 rounded-full" />
      <Card.Body className="col-span-2">
        <Card.Title>{destinationName}</Card.Title>
        <Card.Title className="text-gray-400"><small>{country}</small> </Card.Title>
        <Card.Text>
        The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
};

export default PeopleReview;

PeopleReview.propTypes = {
    user : PropTypes.node,
}
