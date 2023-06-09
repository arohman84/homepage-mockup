// framework
import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
// library
import useSWR from "swr";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// components
import Quickmenu from "@/components/Quickmenu.js";
import PackageList from "@/components/PackageList.js";
import Forever from "@/components/Forever.js";
import NewComer from "@/components/NewComer.js";
import Navigation from "@/components/Navigation.js";
// images
import imgBanner from "@/assets/images/banner.jpg";
// icons
import { IoIosArrowForward } from "react-icons/io";
import iconHeart from "@/assets/icons/icon_heart.svg";
import iconChat from "@/assets/icons/icon_chat.svg";
import iconArrow from "@/assets/icons/icon_arrow-right.svg";

export default function Home({ data, banners }) {
  const [posts, setPosts] = useState([]);

  const handleParamsChange = useCallback((d) => {
    setParams(d);
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[480px] pb-[100px] h-full w-full mx-auto relative">
        <div className="header w-full p-[25px] relative">
          {/* top bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-[24px] rounded-full bg-gray-100">
                  {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
              </div>
              <div className="flex items-center ml-[10px] text-[18px] font-bold text-white">
                <p>Hi, Angkasa</p>
                <IoIosArrowForward className="text-xl font-bold ml-[5px]" />
              </div>
            </div>
            <div className="flex gap-[15px]">
              <Image src={iconHeart} />
              <Image src={iconChat} />
            </div>
          </div>
          {/* pulsa */}
          <div className="mt-5">
            <p className="text-[14px] text-white opacity-70">PULSA</p>
            <div className="flex gap-[5px] items-center">
              <p className="text-white text-[24px] font-extrabold leading-tight">
                RP500.000
              </p>
              <div className="rounded-full w-[18px] h-[18px] bg-[#00D9B5] text-white flex items-center justify-center">
                <IoIosArrowForward className="font-bold " />
              </div>
            </div>
            <p className="text-[12px] text-white opacity-70">
              Expired 30 Des 2022
            </p>
          </div>
        </div>
        {/* details box */}
        <div className="-mt-[80px] px-[25px] relative">
          <div className="flex items-center justify-between">
            <p className="text-white">PAKET SAAT INI (3)</p>
            <div className="flex items-center gap-[5px]">
              <p className="text-[#EB008B] font-semibold text-[14px]">
                DETAIL PAKET
              </p>
              <Image src={iconArrow} />
            </div>
          </div>
          <div className="bg-white rounded-[8px] p-[15px] mt-2 shadow-bronet">
            <div className="flex items-center justify-between">
              <h4 className="text-[20px] font-semibold">Bronet</h4>
              <div className="text-[#EB008B] text-[14px] font-semibold">
                DETAIL
              </div>
            </div>
            <progress
              className="w-full progress progress-primary"
              value="80"
              max="100"
            ></progress>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[14px] font-semibold">SISA 3.25 GB</p>
              <p className="text-[14px] text-[#3D2360]">
                Berlaku sampai 01 Jun 2020
              </p>
            </div>
          </div>
        </div>
        <Quickmenu />
        <PackageList data={data?.packagesList?.items} />
        {/* <Forever /> */}
        <NewComer data={banners?.bannerList?.items} />
        <Navigation />
      </main>
      <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
          duration: 10000,
        }}
      />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://author-p24773-e1010008.adobeaemcloud.com/graphql/execute.json/axisnet/getAllPackages`
  );
  const { data } = await res.json();

  const banner = await fetch(
    `https://author-p24773-e1010008.adobeaemcloud.com/graphql/execute.json/axisnet/getAllBanners`
  );
  const { data: getBanner } = await banner.json();

  // Pass data to the page via props
  return { props: { data, banners: getBanner } };
}
