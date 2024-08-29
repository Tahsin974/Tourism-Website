
import PropTypes from 'prop-types';

const PeopleReview = ({user}) => {
    const {imgURL,name,country,feedback} = user;
    
  return (
    <div className="card lg:card-side bg-white shadow-xl max-w-full">
  <figure>
    <img
      src={imgURL}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="text-gray-400"><small>{country}</small></p>
    <p>{feedback}</p>
  </div>
</div>
   
  );
};

export default PeopleReview;

PeopleReview.propTypes = {
    user : PropTypes.node,
}
