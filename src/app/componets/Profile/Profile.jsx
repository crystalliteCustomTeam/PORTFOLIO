import Image from 'next/image'
import Style from './profile.module.css'
import ProfileImage from 'Media/Profile/Profile.jpg';


export default function Profile() {
    return (
        <div className={Style.ProfileGrid}>
            <div className={Style.ProfileColumn}>
                <Image src={ProfileImage} alt="Faisal Qadeer Yousufi" witdh="130" height="130" />
            </div>
            <div className={Style.ProfileTextColoumn}>
                <h1 className={Style.ProfileTitle}>Faisal Qadeer Yousufi</h1>
                <p className={Style.ProfileDescription}>Empowering Business Success through Innovative <br/> Leadership and Execution.</p>
            </div>
        </div>
    )
}
