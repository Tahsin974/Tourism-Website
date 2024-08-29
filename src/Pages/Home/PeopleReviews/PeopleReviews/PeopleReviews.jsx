import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./PeopleReviews.css";
import usePlans from "../../../../Hooks/useDestinations";
import PeopleReview from "../PeopleReview/PeopleReview";

const PeopleReviews = () => {
  const [plans] = usePlans("feedbacks");
  return (
    <div className="my-16 flex flex-col justify-center space-y-10 px-5">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-center"> What our customers are saying about us</h1>

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {plans.map((user) => (
            <SwiperSlide key={user._id}>
              <PeopleReview
              user = {user}
              ></PeopleReview>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PeopleReviews;
