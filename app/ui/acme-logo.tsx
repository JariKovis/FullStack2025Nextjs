import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { lusitana } from "@/app/ui/fonts";
//import LaureaLogo from "@/public/Laurealogo.svg";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <CircleStackIcon className="h-12 w-12" />
      {/* <img src={LaureaLogo.src} className="h-12 w-12" /> */}
      <p className="text-[44px]">Laurea</p>
    </div>
  );
}
