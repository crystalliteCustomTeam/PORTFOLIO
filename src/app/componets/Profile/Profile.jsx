import Image from 'next/image'
import Style from './profile.module.css'
import ProfileImage from 'Media/Profile/profile.jpg';
import Link from 'next/link';


export default function Profile() {
    return (
        <div className={Style.ProfileGrid}>
            <div className={Style.ProfileColumn}>
                <Link href="/">
                <Image src={ProfileImage} alt="Faisal Qadeer Yousufi" witdh="130" height="130" className='mx-auto block'/>
                </Link>
            </div>
            <div className={Style.ProfileTextColoumn}>
                <Link href="/">
                <h1 className={Style.ProfileTitle}>Faisal Qadeer Yousufi</h1>
                </Link>
                <p className={Style.ProfileDescription}>Empowering Business Success through Innovative <br/> Leadership and Execution.</p>
            </div>
        </div>
    )
}
