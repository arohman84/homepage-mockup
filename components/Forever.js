// framework
import React, { useState, useEffect } from "react";
import Image from "next/image";
// libs
import Slider from "react-slick";
// icons
import iconArrow from "@/assets/icons/icon_arrow-right.svg";
import iconInternet from "@/assets/icons/icon_internet.svg";
import iconMusic from "@/assets/icons/icon_music.svg";

export default function Forever() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  const nav = [
    {
      icon: iconInternet,
      title: "BOOSTR INTERNET",
      size: "1 GB",
      prize: "1.500",
      oldPrize: "",
      disc: "",
      expired: "Masa aktif 30 hari",
    },
    {
      icon: iconMusic,
      title: "BOOSTR INTERNET",
      size: "1 GB",
      prize: "1.500",
      oldPrize: "",
      disc: "",
      expired: "Masa aktif 30 hari",
    },
    {
      icon: iconInternet,
      title: "BOOSTR INTERNET",
      size: "1 GB",
      prize: "1.500",
      oldPrize: "",
      disc: "",
      expired: "Masa aktif 30 hari",
    },
    {
      icon: iconMusic,
      title: "BOOSTR INTERNET",
      size: "1 GB",
      prize: "1.500",
      oldPrize: "",
      disc: "",
      expired: "Masa aktif 30 hari",
    },
  ];
  return (
    <div className="mt-[20px] mb-[25px]">
      <div className="flex items-center justify-between px-[25px] mb-2">
        <p className="text-[18px] font-semibold">Forever Online</p>
      </div>
      <Slider {...settings}>
        {nav.map((i) => (
          <div key={i.title} className="forever">
            <div className="flex flex-col wrap gap-[10px] p-[20px] mx-[10px] rounded-xl text-white leading-tight text-[12px] font-bold">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                <Image src={i.icon} />
              </div>
              <p>{i.title}</p>
              <p className="text-[16px] leading-none">{i.size}</p>
              <div className="flex items-center gap-1">
                <p>Rp</p>
                <p className="text-[24px]">{i.prize}</p>
              </div>
              <p className="opacity-70">{i.expired}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
