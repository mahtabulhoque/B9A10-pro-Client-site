

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div
     className='m-8'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div data-aos="fade-left"
             data-aos-duration="3000"
            style={{
              backgroundImage: `url('/banner4.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <div data-aos="fade-down"
             data-aos-duration="3000" >
              <h1 className=" text-4xl lg:text-7xl text-gray-100 font-semibold p-5 lg:p-16 ">
                Welcome to Homies Realestate
              </h1>

              <p className="text-[16px] lg:text-[30px] text-yellow-300 font-medium p-3 lg:p-10">
                we turn dreams of owning your perfect home into reality. With
                our expertise in the housing market and dedication to customer
                satisfaction, we specialize in helping individuals and families
                find their ideal properties...
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div data-aos="fade-down"
             data-aos-duration="4000"
            style={{
              backgroundImage: `url('/banner3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px"
            }}
          >
            <div data-aos="zoom-out-left">
            <h1 className=" text-[20px] lg:text-[40px] text-amber-600 font-extrabold p-3 lg:p-5">Our homes are meticulously curated to exceed your expectations. Your ideal living space awaits.</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div data-aos="fade-down"
             data-aos-duration="5000"
            style={{
              backgroundImage: `url('/banner1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className=" text-[18px] lg:text-[30px] text-white font-bold p-5">Unlock the door to your dream home with our exclusive collection of residential properties. From cozy cottages to sprawling estates, we have something to cater to every taste and lifestyle.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div  data-aos="fade-down"
             data-aos-duration="6000"
            style={{
              backgroundImage: `url('/banner5.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className="text-[18px] lg:text-[30px] text-yellow-400 font-bold p-5 animate__animated animate__bounce"> Step into the realm of exquisite living with our exceptional selection of homes. Each property we offer is crafted to perfection, promising not just a residence but an experience of a lifetime.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
