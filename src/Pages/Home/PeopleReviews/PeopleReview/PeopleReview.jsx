
import PropTypes from 'prop-types';

const PeopleReview = ({user}) => {
    const {imgURL,destinationName,country} = user;
    
  return (
    <div className="card lg:card-side bg-white shadow-xl max-w-full">
  <figure>
    <img
      src={imgURL}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{destinationName}</h2>
    <p className="text-gray-400"><small>{country}</small></p>
    <p>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
  </div>
</div>
   
  );
};

export default PeopleReview;

PeopleReview.propTypes = {
    user : PropTypes.node,
}
