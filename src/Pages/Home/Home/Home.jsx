import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Destinations from "../Destinations/Destinations/Destinations";
import HolidayPackages from "../HolidayPackages/HolidayPackages/HolidayPackages";


const Home = () => {
    return (

        <div>
            <Helmet>
            <title>Home | Tourism-Website</title>
            </Helmet>
            <Header></Header>
            <Destinations></Destinations>
            <HolidayPackages></HolidayPackages>
        </div>
    );
};

export default Home;