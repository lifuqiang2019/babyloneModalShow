import React, { useState, useRef, FC } from "react";
import SwiperCore, {
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
} from "swiper";
import 'swiper/swiper-bundle.min.css';

import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Mousewheel]);

import "./Gllery.css";
// 自定义hooks
import { useViewport } from "@hooks/index";
const bannerList = [
  {
    img: "b1.png",
    title: "1",
    info:
      "1",
    id: 1,
  },
  {
    img: "b2.png",
    title: "2",
    info:
      "2",
    id: 2,
  },
  {
    img: "b3.png",
    title: "3",
    info:
      "3",
    id: 3,
  },
  {
    img: "b4.png",
    title: "4",
    info: `4`,
    id: 4,
  },
  {
    img: "b5.png",
    title: "5",
    info:
      "5",
    id: 5,
  },
  {
    img: "b6.png",
    title: "6",
    info:
      "6",
    id: 6,
  },
  {
    img: "b7.png",
    title: "7",
    info:
      "7",
    id: 7,
  },
  {
    img: "b8.png",
    title: "8",
    info:
      "8",
    id: 8,
  },
];

const SwiperSlier: FC<{}> = () => {
  // console.log('swiper组件');
  const { wh } = useViewport();
  return (
    <div className="gallery-box" style={{ height: wh * 0.9 }}>
      <Swiper
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        speed={600}
        effect={"slide"}
        loop={true}
        direction={"vertical"}
        pagination={{ clickable: true }}
        mousewheel={true}
      >
        {bannerList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-item">
              <div className="item-text">
                <h1>{item.title}</h1>
                <p>{item.info}</p>
              </div>
              <img src={require(`@assets/images/${item.img}`)} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
// 他会进行浅比较 默认meiyouqianbijiao
export default React.memo(SwiperSlier);

