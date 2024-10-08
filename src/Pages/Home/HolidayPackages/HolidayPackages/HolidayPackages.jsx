import usePlans from "../../../../Hooks/useDestinations";
import HolidayPackage from "../HolidayPackage/HolidayPackage";

const HolidayPackages = () => {
    const [plans] = usePlans('packages')
    
    return (
        <div id="offers" className="my-5 px-5">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-center my-14">Best Offer For Tour Lovers</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-items-center">
                {
                    plans.map(holidayPackage => <HolidayPackage
                    key={holidayPackage._id}
                    holidayPackage = {holidayPackage}
                    ></HolidayPackage>)
                }
            </div>
            
        </div>
    );
};

export default HolidayPackages;