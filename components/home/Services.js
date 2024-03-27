"use client";
import { useState } from "react";
import LetsTalkBtn from "./utils/LetsTalkBtn";
import { serviceList } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/swiper-custom.css";

const Services = () => {
  const [index, setindex] = useState(0);
  const [swiper, setSwiper] = useState({});
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' w-5 leading-5 text-center">' +
        (index + 1) +
        "</span>"
      );
    },
  };

  return (
    <section className="Services bg-[#131626]">
      <div className="lea container mx-auto">
        <div className="wrap">
          <div className="sect-title py-8">
            <h1
              data-aos="fade-up"
              className="bg-title-decor bg-bottom bg-no-repeat pb-4 text-center text-2xl font-black uppercase lg:text-5xl"
            >
              Services
            </h1>
          </div>
          <div className="content flex flex-col-reverse gap-4 lg:flex-row">
            {serviceList.map((item, itemIndex) =>
              itemIndex == index ? (
                <div className="left lg:w-1/2" key={itemIndex}>
                  <div>
                    <h2 className="my-8 text-center text-2xl font-black uppercase lg:text-left lg:text-5xl">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-center leading-8 text-[#606580] lg:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, error? Temporibus omnis dolore odio, sed adipisci
                    laborum quis itaque a, ad nam quidem ab vero fuga ex iusto.
                    Rem, ut.
                  </p>
                  <LetsTalkBtn
                    width="w-[300px]"
                    fontSize="text-base my-8"
                    title="Go to the service"
                  />
                </div>
              ) : (
                ""
              ),
            )}
            <div className="services__cards flex h-[400px] w-full gap-8 overflow-x-hidden py-4 pl-8 lg:w-1/2">
              <Swiper
                spaceBetween={50}
                slidesPerView={1.3}
                breakpoints={{
                  1024: {
                    spaceBetween: 50,
                    slidesPerView: 2.5,
                  },
                }}
                pagination={pagination}
                modules={[Pagination]}
                loop={true}
                onSlideChange={(swiperCore) => {
                  const { activeIndex } = swiperCore;
                  setindex(activeIndex);
                  console.log(swiperCore);
                }}
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                }}
              >
                {serviceList.map((item, index) => (
                  <SwiperSlide width="200px" key={index}>
                    <div
                      className={`card relative flex h-80 shrink-0 -skew-x-6 ${index == 0 ? "scale-110" : "scale-100"} cursor-pointer items-end self-center rounded-lg border border-[#9BCF53] ${item.background} from-transparent to-[#131326] bg-contain px-4 pb-4 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:-z-[-2] after:h-full after:w-full after:rounded-lg after:bg-gradient-to-b hover:-translate-y-2`}
                    >
                      <h6 className="relative z-10 font-bold lg:text-2xl">
                        {item.title}
                      </h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="card flex h-80 w-[200px] shrink-0 -skew-x-6 items-end self-center rounded-lg border border-r-4 border-[#9BCF53] bg-app-dev bg-contain px-4 pb-4">
                  <h6 className="text-2xl font-bold">Software Development</h6>
                </div>
                <div className="card flex h-80 w-[200px] shrink-0 -skew-x-6 items-end self-center rounded-lg border border-r-4 border-[#9BCF53] bg-ui-design from-transparent to-[#131326] bg-contain px-4 pb-4 after:absolute after:bottom-0 after:left-0 after:-z-[-2] after:h-1/4 after:w-full after:bg-gradient-to-tr">
                  <h6 className="relative z-10 text-2xl font-bold">UI Design</h6>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
