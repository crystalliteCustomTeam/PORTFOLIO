import dynamic from "next/dynamic";


const Profile = dynamic(() => import("./Profile/Profile"));
const HeaderContainer = dynamic(() => import("./HeaderContainer/HeaderContainer"));
import PorftolioCard from "./PortfolioCard/PorftolioCard";
import Portfolio from "./Portfolio/Portfolio";
import Fancybox from "./Fancy/Fancybox";


export {
    Profile,
    HeaderContainer,
    PorftolioCard,
    Portfolio,
    Fancybox
}