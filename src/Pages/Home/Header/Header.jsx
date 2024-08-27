import { Button } from "react-bootstrap";

import "./Header.css";
import Menubar from "../../Shared/Menubar/Menubar";


const Header = () => {
  return (
    <div className="header min-h-screen min-w-screen">
      <Menubar></Menubar>
      <div className="header-content flex flex-col justify-center text-center text-white min-h-96 items-center mt-16">
        <div>
          <h1 className="mb-1 lg:text-6xl md:text-6xl text-5xl font-bold">
            Discover Your Next
          </h1>
          <h1 className="mb-5 lg:text-8xl md:text-8xl text-6xl font-bold">
            Adventure
          </h1>
          
        </div>
        <form className="join join-vertical lg:join-horizontal md:join-horizontal text-black w-4/5">
            {/* Location */}
            <select className="join-item select select-bordered select-lg w-full bg-white">
              <option disabled selected>
                Location
              </option>
              <option>Europe</option>
              <option>Egypt</option>
              <option>Germany</option>
            </select>
            {/* Activity */}

            <select className="join-item select select-bordered select-lg w-full ">
              <option disabled selected>Activity</option>
              <option>Boating</option>
              <option>Tour</option>
              
            </select>

            {/* Tour Type */}
            <select className="join-item select select-bordered select-lg w-full">
              <option disabled selected>Tour Type</option>
              <option>Luxary</option>
              <option>Premium</option>
              <option>Standard</option>
            </select>
            {/* Search Button */}
            <Button className="join-item bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white px-4 rounded-l-none rounded-r-3xl btn-lg ">
              Search
            </Button>
          </form>
      </div>
    </div>
  );
};

export default Header;
