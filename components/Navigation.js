import Image from "next/image";
import Home from "@/assets/icons/icon_nav-home.svg";
import Surprize from "@/assets/icons/icon_nav-gift.svg";
import Paket from "@/assets/icons/icon_bags.svg";
import Hiburan from "@/assets/icons/icon_nav-music.svg";
import Alifetime from "@/assets/icons/icon_nav-axis.svg";

export default function Navigation() {
  return (
    <div className="bottom-nav fixed flex items-center justify-between w-full mx-auto max-w-[480px] bottom-0 pb-[17px] text-[#D3D3E7] text-[12px] border-t-2 pt-2 px-[15px] bg-white">
      <div className="text-center">
        <Image src={Home} />
        <p className="text-[#3D2360]">Home</p>
      </div>
      <div className="text-center">
        <Image src={Surprize} />
        <p className="">Sureprize</p>
      </div>
      <div className="text-center">
        <div className="w-[65px] h-[65px] bg-[#EB008B] rounded-full -mt-[50px] flex items-center justify-center flex-col">
          <Image src={Paket} />
          <p>Paket</p>
        </div>
      </div>
      <div className="text-center">
        <Image src={Hiburan} />
        <p>Hiburan</p>
      </div>
      <div className="text-center">
        <Image src={Alifetime} />
        <p>Alifetime</p>
      </div>
    </div>
  );
}
