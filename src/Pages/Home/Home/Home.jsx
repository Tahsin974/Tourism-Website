import { Helmet } from "react-helmet";
import Header from "../Header/Header";

const Home = () => {
    return (

        <div>
            <Helmet>
            <title>Home | Tourism-Website</title>
            </Helmet>
            <Header></Header>
        </div>
    );
};

export default Home;