import usePlans from "../../../../Hooks/useDestinations";
import Destination from "../Destination/Destination";


const Destinations = () => {
    const [plans] = usePlans('destinations');
   
    return (
        <div id="places" className="my-5 px-5">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-center my-14">Explore the Beautiful Places</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-items-center">
                {
                    plans.map(destination => <Destination
                    key={destination._id}
                    destination = {destination}
                    ></Destination>)
                }
            </div>
            
        </div>
    );
};

export default Destinations;