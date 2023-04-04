// framework
import React, { useState, useEffect } from "react";
import Image from "next/image";
// libs
import Slider from "react-slick";
// utils
import { formatQuota, formatPrice } from "@/utils/helpers";
// icons
import iconArrow from "@/assets/icons/icon_arrow-right.svg";
import iconInternet from "@/assets/icons/icon_internet.svg";
import iconMusic from "@/assets/icons/icon_music.svg";

export default function PackageList({ data }) {
  // console.log(data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 2,
  };
  return (
    <div className="mt-[20px] mb-[25px]">
      <div className="flex items-center justify-between px-[25px] mb-2">
        <p className="text-[18px] font-semibold">Hanya Untukmu</p>
        <div className="flex items-center gap-[5px]">
          <p className="text-[14px] text-[#EB008B] font-semibold">
            DETAIL PAKET
          </p>
          <Image src={iconArrow} />
        </div>
      </div>
      <div className="pl-[20px]">
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i.packageServiceId} className="recomendation">
              <div className="flex flex-col wrap gap-[10px] py-[10px] px-[12px] mx-[5px] rounded-xl text-white leading-tight text-[12px] font-bold">
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                  <Image
                    src={i._variation === "master" ? iconInternet : iconMusic}
                  />
                </div>
                <p className="uppercase">{i.packageHeader}</p>
                <p className="text-[16px] leading-none">
                  {formatQuota(i.packageQuota)}
                </p>
                <div className="flex items-center gap-1">
                  <p>Rp</p>
                  <p className="text-[24px]">{formatPrice(i.packagePrice)}</p>
                </div>
                <p className="opacity-70">{i.validityDetail}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
