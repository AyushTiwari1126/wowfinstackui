import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Asidebar() {

    let [toggled, setToggled] = React.useState(true);

    let toggleImage = () => {
        let val = !toggled;
        (val === !toggled ? setToggled(!toggled) : setToggled(toggled))
    };



    // let [toggled, setToggled] = React.useState(true);

    // let toggleImage = () => setToggled(!toggled);
    // const [firstImage, setImage] = useState(<Image className={styles.ddtimg12} src="/chevron-down.svg" width={20} height={20} />);
    // const changeImage = () => {

    //     let val = firstImage;

    //     (val === <Image className={styles.ddtimg12} src="/chevron-down.svg" width={20} height={20} />) ? setImage(<Image className={styles.ddtimg12} src="/chevron-up.svg" width={20} height={20} />) : setImage(<Image className={styles.ddtimg12} src="/chevron-down.svg" width={20} height={20} />);
    // }

    return (
        <>
            <div className={styles.aside}>
                <Image
                    className={styles.logo}
                    src="/wowlogo.svg"
                    alt="Welcome to WOW Card"
                    width={100}
                    height={50} />


                <div className={styles.dropdown}>
                    <a className={styles.dropdowntoggle} onClick={toggleImage} class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image className={styles.ddtimg11} src="/wallet2.svg" width={20} height={20} />Cards Management
                    {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12}/> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12}/>}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                        <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                        <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                    </ul>
                </div>


                {/* <ul>
                    <li className={styles.systemsetup}>
                        <Link href="#">System Setup<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                    </li>
                    <li className={styles.usermgmt}>
                        <Link href="#">User Management<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                    </li>
                    <li className={styles.cardsmgmt} >
                        <Link href="#">Cards Management<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                        <ul className="dropdown-click">
                            <li>
                                <a href="#">Card Product Setup</a>
                            </li>
                            <li>
                                <a href="#">Card Product Rules</a>
                            </li>
                            <li>
                                <a href="#">Credit Scoring</a>
                            </li>
                        </ul>
                    </li>

                    <li className={styles.applforms}>
                        <Link href="/">Application Forms<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                    </li>

                </ul> */}

            </div>
        </>
    );
}

export default Asidebar