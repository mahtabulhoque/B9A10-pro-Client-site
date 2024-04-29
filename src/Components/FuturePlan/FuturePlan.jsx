
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const FuturePlan = () => {
  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: "1",
  };

  return (
    <div className="m-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img className="rounded-xl"  src="/Potter.jpg" alt="" />
            <div style={textStyle}>
            <p className="text-[24px] lg:text-[40px] font-bold text-[#FFFF]">Terra Cotta Pottery</p>
              <p className="text-yellow-400 text-[14px] lg:text-[25px]">Our Terra Cotta Pottery is not just about tradition; it is a canvas for innovation. From classic pots to avant-garde sculptures, our future collection will showcase the versatility of Terra Cotta as a medium for artistic expression.</p>
              </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img className="rounded-xl"  src="/clayArt.jpg" alt="" />
            <div style={textStyle}>
              <p className="text-[24px] lg:text-[40px] font-bold text-white">Aesthetic Clay Sculpture</p>
              <p className="text-[14px] lg:text-[25px]">OurAesthetic Clay Sculpture Art is a visionary project that combines the traditional art of clay sculpture with a contemporary aesthetic.</p>
              </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img src="/Decor.jpg" className="rounded-xl" alt="" />
            <div style={textStyle}>
              <p className="text-[24px] lg:text-[40px] font-bold text-amber-300">Home Decor Art</p>
              <p className="text-[14px] lg:text-[25px]">At EcoArtisan, we are passionate about transforming living spaces into vibrant, inspiring environments. Our future plan involves creating a curated collection of home decor art that embodies elegance, creativity, and personality.</p>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FuturePlan;
