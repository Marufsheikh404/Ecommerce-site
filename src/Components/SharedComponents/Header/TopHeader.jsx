import { IoIosArrowDown } from "react-icons/io";
import { PiPhoneCall, PiWhatsappLogoThin } from "react-icons/pi";


const TopHeader = () => {
    return (
        <div className="hidden lg:flex items-center justify-between container mx-auto px-4">
            <div className="flex items-center gap-2 ct">
                <div className="flex items-center gap-1">
                    <PiPhoneCall className="text-[#5CAF90]" size={20} />
                    <p>+8801719199642</p>
                </div>
                <div className="flex items-center gap-1">
                    <PiWhatsappLogoThin className="text-[#5CAF90]" size={20} />
                    <p>+8801719199642</p>
                </div>
            </div>
            <div>
                <p className="ct">World Fastest Online Shopping Destination</p>
            </div>
            <div className="flex items-center gap-3 ct">
                <p>Help ?</p>
                <p>Trader Order ?</p>
                <div className="flex items-center">
                    <p>English</p>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center">
                    <p>Dollar</p>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;