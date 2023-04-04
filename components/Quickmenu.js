// framework
import React, { useState, useEffect } from "react";
import Image from "next/image";
// libs
import Slider from "react-slick";
// icons
import Voucher from "@/assets/icons/icon_voucher.svg";
import IsiAIGO from "@/assets/icons/icon_scan.svg";
import Isipulsa from "@/assets/icons/icon_phone-up.svg";
import Paket from "@/assets/icons/icon_paket.svg";
import PulsaDarurat from "@/assets/icons/icon_alarms.svg";
import TransferKuota from "@/assets/icons/icon_transfer-kuota.svg";
import Recreaxis from "@/assets/icons/icon_recreaxis.svg";
import TransferPulsa from "@/assets/icons/icon_transfer-pulsa.svg";
import CheckAIGO from "@/assets/icons/icon_search.svg";
import QrCode from "@/assets/icons/icon_qr-code.svg";
import History from "@/assets/icons/icon_history.svg";
import Axis from "@/assets/icons/icon_axis.svg";

export default function Quickmenu() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 5,
  };
  const nav = [
    {
      icon: Voucher,
      text: "Voucherku",
    },
    {
      icon: IsiAIGO,
      text: "Isi AIGO",
    },
    {
      icon: Isipulsa,
      text: "Isi Pulsa",
    },
    {
      icon: Paket,
      text: "Paket <br> Suka-Suka",
    },
    {
      icon: PulsaDarurat,
      text: "Pulsa Darurat",
    },
    {
      icon: TransferKuota,
      text: "Transfer Kuota",
    },
    {
      icon: Recreaxis,
      text: "RecreAXIS",
    },
    {
      icon: TransferPulsa,
      text: "Transfer Pulsa",
    },
    {
      icon: CheckAIGO,
      text: "Check AIGO",
    },
    {
      icon: QrCode,
      text: "QR Code",
    },
    {
      icon: History,
      text: "History",
    },
    {
      icon: Axis,
      text: "AXIS Setting",
    },
  ];
  return (
    <div className="mt-[20px] pl-[20px] mb-[25px]">
      <Slider {...settings}>
        {nav.map((i) => (
          <div key={i.text} className="quickmenu">
            <div className="flex flex-col items-center justify-center wrap gap-[10px]">
              <div className="w-[48px] h-[48px] flex items-center justify-center">
                <Image src={i.icon} />
              </div>
              <p
                className="text-[12px] leading-tight text-center"
                dangerouslySetInnerHTML={{
                  __html: i.text,
                }}
              ></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
