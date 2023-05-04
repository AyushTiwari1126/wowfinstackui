import styles from '@/styles/Home.module.css'
import OutsideClickHandler from 'react-outside-click-handler';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Asidebar() {

    let [toggled, setToggled] = React.useState(true);
    let toggleImage = () => {
        let val = !toggled;
        (val === !toggled ? setToggled(!toggled) : setToggled(toggled))
    };

    return (
        <>
            <div className={styles.aside}>
                <Image
                    className={styles.logo}
                    src="/wowlogo.svg"
                    alt="Welcome to WOW Card"
                    width={100}
                    height={50} />

                <div className={styles.container}>
                    <div className={styles.accordianOne} class="accordion-item">
                        <h2 className={styles.accordianheader}>
                            <button onClick={toggleImage} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <Image className={styles.ddtimg11} src="/gear.svg" width={20} height={20} />
                                System Setup
                                {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                                <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                            </div>
                        </div>
                    </div>

                    <div className={styles.accordianTwo} class="accordion-item">
                        <h2 className={styles.accordianheader}>
                            <button onClick={toggleImage} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <Image className={styles.ddtimg11} src="/person.svg" width={20} height={20} />
                                User Management
                                {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                                <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                            </div>
                        </div>
                    </div>


                    {/* <div className={styles.accordianThree} class="accordion-item">
                        <h2 className={styles.accordianheader} class="accordion-header">
                            <button onClick={toggleImage} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <Image className={styles.ddtimg11} src="/wallet2.svg" width={20} height={20} />
                                Cards Management
                                {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                                <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                            </div>
                        </div>
                    </div>

                    <div className={styles.accordianFour} class="accordion-item">
                        <h2 className={styles.accordianheader} class="accordion-header">
                            <button onClick={toggleImage} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <Image className={styles.ddtimg11} src="/pencil-square.svg" width={20} height={20} />
                                Application Forms
                                {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                                <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                            </div>
                        </div>
                    </div> */}


                </div>


                {/* <div className={styles.dropdown}>
                    <a className={styles.dropdowntoggle} onClick={toggleImage} class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        <Image onClick={() => setHidden(!hidden)} className={styles.ddtimg11} src="/wallet2.svg" width={20} height={20} />Cards Management
                        {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12} />}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                        <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                        <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                        
                    </ul>
                </div> */}

            </div>
        </>
    );
}

export default Asidebar