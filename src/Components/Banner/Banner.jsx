import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
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
    <div className="m-8">
      
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
         
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            style={{
              backgroundImage: `url('/banner102.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <div data-aos="fade-down" data-aos-duration="3000">
            <Fade cascade>
              <h1 className=" text-4xl lg:text-7xl text-gray-200 font-semibold p-5 lg:p-16 ">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["EcoArtisan Is For You...."]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={70}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="text-[16px] lg:text-[30px] text-gray-100 font-medium p-3 lg:p-10">
              Ceramics and pottery have a rich history dating back thousands of years. From ancient civilizations like the Greeks and Egyptians to contemporary artists worldwide, this art form has evolved through time.
              </p>
              </Fade>
            </div>
          </div>
        
        </SwiperSlide>

        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="4000"
            style={{
              backgroundImage: `url('/banner104.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <div data-aos="zoom-out-left">
              <h1 className=" text-4xl lg:text-7xl text-green-800 font-semibold p-5 lg:p-16 ">
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["From Clay to Craft"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={100}
                  />
                </span>
              </h1>
              <h1 className=" text-[16px] lg:text-[30px] text-gray-200 font-extrabold p-3 lg:p-5">
                {" "}
                From delicate porcelain vases to sturdy earthenware plates, pottery serves both aesthetic and practical purposes. Its versatility allows artists to explore various techniques like wheel throwing, hand-building, and glazing, resulting in an endless array of designs and styles. 
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="5000"
            style={{
              backgroundImage: `url('/banner103.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className=" text-4xl lg:text-7xl text-gray-200 font-semibold p-5 lg:p-16 ">
            Shaping Dreams
            </h1>
            <h1 className=" text-[18px] lg:text-[30px] text-gray-200 font-semibold p-5 text-center">
            For many artists, ceramics and pottery provide a unique avenue for self-expression and creativity. Working with clay allows them to translate their ideas into tangible forms, each piece bearing the makers personal touch and artistic vision. Whether it is experimenting with different textures, exploring intricate patterns, or incorporating innovative techniques, pottery offers endless possibilities for creative exploration and innovation.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="6000"
            style={{
              backgroundImage: `url('/banner101.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className="text-[18px] lg:text-[30px] text-center text-cyan-500 font-bold py-10 animate__animated animate__bounce">
              <span style={{ color: "whitesmoke", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Beyond its artistic value, ceramics and pottery often serve as therapeutic and meditative practices. The process of working with clay encourages mindfulness and focus, as artists immerse themselves in the tactile experience of shaping and molding.",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    
    </div>
  );
};

export default Banner;
