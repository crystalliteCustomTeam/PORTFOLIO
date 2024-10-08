import { Profile } from "..";
import Style from './header.module.css';


export default function HeaderContainer() {
    return (
        <div className={Style.MainGrid}>
            <div className={Style.MainCol}>
                <Profile />
            </div>
            <div className={Style.MainCol}>
                <h1 className={Style.MainTitle}>Portfolio</h1>
            </div>
        </div>
    )
}
