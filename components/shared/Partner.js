import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Partner = () => {
  const partners = ["/partner/logo1.png", "/partner/logo2.png", "/partner/logo3.png", "/partner/logo4.png"];

  return (
    <section className="partner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Our Partners</h2>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              loop={true}
              spaceBetween={24}
              autoplay={true}
              slidesPerView="auto"
              slidesPerGroup={1}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              className="partner-slider"
            >
              {partners?.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <Image src={item} alt="Partner Logo" width={184} height={48} />
                      </div>
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
