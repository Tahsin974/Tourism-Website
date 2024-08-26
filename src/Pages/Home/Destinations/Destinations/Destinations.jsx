import usePlans from "../../../../Hooks/useDestinations";
import Destination from "../Destination/Destination";


const Destinations = () => {
    const [plans] = usePlans('destinations');
    console.log(plans)
    return (
        <div className="my-5 px-5">
            <h1 className="text-6xl font-bold text-center my-14">Explore the Beautiful Places</h1>
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