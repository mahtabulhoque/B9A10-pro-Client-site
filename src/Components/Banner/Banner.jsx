import { Typewriter } from "react-simple-typewriter";
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
              backgroundImage: `url('/banner4.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <div data-aos="fade-down" data-aos-duration="3000">
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

              <p className="text-[16px] lg:text-[30px] text-lime-400 font-medium p-3 lg:p-10">
                Jute and wooden crafts represent a beautiful blend of natural
                materials and artisanal skill, producing items that are both
                aesthetically pleasing and environmentally friendly. Jute, a
                versatile natural fiber, is commonly used in crafting due to its
                strength and sustainability.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="4000"
            style={{
              backgroundImage: `url('/banner3.jpg')`,
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
                    words={["We Provide The Best Wooden Craft"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={100}
                  />
                </span>
              </h1>
              <h1 className=" text-[16px] lg:text-[30px] text-gray-500 font-extrabold p-3 lg:p-5">
                {" "}
                Wooden crafts highlight the timeless appeal of wood as a
                material. Craftsmen transform wood into an array of items,
                including furniture, kitchenware, toys, and decorative pieces.
                Each piece of wooden craftwork carries the unique grain and
                character of the wood, creating items that are both functional
                and visually striking.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="5000"
            style={{
              backgroundImage: `url('/banner6.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className=" text-4xl lg:text-7xl text-gray-200 font-semibold p-5 lg:p-16 ">
              Crafting with Nature: The Artistry of Jute
            </h1>
            <h1 className=" text-[18px] lg:text-[30px] text-lime-600 font-bold p-5 text-center">
              Jute crafts often include items such as baskets, bags, rugs, and
              decorative items. These crafts not only showcase the rustic charm
              of jute but also offer a touch of earthiness to any space.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            data-aos="fade-down"
            data-aos-duration="6000"
            style={{
              backgroundImage: `url('/banner5.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
              borderRadius: "20px",
            }}
          >
            <h1 className="text-[18px] lg:text-[30px] text-center text-cyan-500 font-bold py-10 animate__animated animate__bounce">
              <span style={{ color: "green", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Both jute and wooden crafts celebrate the beauty of natural materials and the skill of artisans who work with them. They also promote sustainability, as both jute and wood are renewable resources...",
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
