import { PiPhoneCall, PiWhatsappLogoThin } from "react-icons/pi";


const TopHeader = () => {
    return (
        <div className="flex items-center justify-between container mx-auto px-4">
            <div className="flex items-center gap-2 ct">
                <div className="flex items-center gap-1">
                    <PiPhoneCall size={20} />
                    <p>+8801719199642</p>
                </div>
                <div className="flex items-center gap-1">
                    <PiWhatsappLogoThin size={20}/>
                    <p>+8801719199642</p>
                </div>
            </div>
            <div>
                <p className="ct">World Fastest Online Shopping Destination</p>
            </div>
            <div className="flex items-center gap-2 ct">
                <p>Help?</p>
                <p>Trader Order</p>
                <p>English</p>
                <p>Dollar</p>
            </div>
        </div>
    );
};

export default TopHeader;