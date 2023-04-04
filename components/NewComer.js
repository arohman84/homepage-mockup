// framework
import React, { useState, useEffect } from "react";
// libs
import Slider from "react-slick";

export default function NewComer({ data }) {
  // console.log(data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-[20px] mb-[25px]">
      <div className="flex items-center justify-between px-[25px] mb-2">
        <p className="text-[18px] font-semibold">Yang Baru di AXISNET</p>
      </div>
      <div className="pl-[20px]">
        <Slider {...settings}>
          {data?.map((i) => (
            <div key={i.fieldLabel?._publishUrl}>
              <div className="mx-[7px] rounded-xl">
                <div className="">
                  <img
                    src={i.fieldLabel?._publishUrl}
                    className="block w-full h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
