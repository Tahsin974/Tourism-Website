import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Destinations from "../Destinations/Destinations/Destinations";
import HolidayPackages from "../HolidayPackages/HolidayPackages/HolidayPackages";
import PeopleReviews from "../PeopleReviews/PeopleReviews/PeopleReviews";


const Home = () => {
    return (

        <div className="min-h-screen">
            <Helmet>
            <title>Home | Tourism-Website</title>
            </Helmet>
            <Header></Header>
            <Destinations></Destinations>
            <HolidayPackages></HolidayPackages>
            <PeopleReviews></PeopleReviews>
        </div>
    );
};

export default Home;