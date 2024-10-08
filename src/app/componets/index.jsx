import dynamic from "next/dynamic";


const Profile = dynamic(() => import("./Profile/Profile"));
const HeaderContainer = dynamic(() => import("./HeaderContainer/HeaderContainer"));
import PorftolioCard from "./PortfolioCard/PorftolioCard";


export {
    Profile,
    HeaderContainer,
    PorftolioCard
}