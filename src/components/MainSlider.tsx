import {MainSliderArr} from "../elements/JsonData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Parallax} from "swiper/modules";
import {motion} from "framer-motion";

const MainSlider = () => {
  return (
    <motion.div
      className="silder-one"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        className="swiper-container main-silder-swiper"
        slidesPerView={1}
        speed={1500}
        loop={true}
        parallax={true}
        navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
        modules={[Parallax, Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
      >
        {MainSliderArr.map((item, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="silder-img overlay-black-light">
              <img src={item.img} data-swiper-parallax="30%" alt="" />
            </div>
            <div className="silder-content" data-swiper-parallax="-40%">
              <div className="inner-content">
                <h1 className="title">
                  <span className="text-primary">Bienvenue chez</span> <br/> Construction Phoenix Signature
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}


      </Swiper>
    </motion.div>
  );
};

export default MainSlider;
