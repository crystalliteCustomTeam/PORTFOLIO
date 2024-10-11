import { Profile } from "..";
import Style from './header.module.css';


export default function HeaderContainer({TITLE="Portfolio"}) {
    return (
        <div className={Style.MainGrid}>
            <div className={Style.MainCol}>
                <Profile />
            </div>
            <div className={`${Style.MainCol} hidden md:block`}>
                <h1 className={Style.MainTitle}>{TITLE}</h1>
            </div>
        </div>
    )
}
