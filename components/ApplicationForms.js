import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



function ApplicationForms() {

    // const [open, setOpen] = useState(false);
    // const handleClickOpen = () =>{
    //     setOpen(true);
    // };
    
    // const handleClose = () => {
    //     setOpen(false);
    // };
    
    let [toggled, setToggled] = useState(true);

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


                <div className={styles.dropdown}>
                    <a className={styles.dropdowntoggle}  class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Image className={styles.ddtimg11} src="/wallet2.svg" width={20} height={20}  />Cards Management
                        {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg12}/> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg12}/>}
                    </a>
                    <ul class="dropdown-menu" >
                        <li onClick={toggleImage}><a className={styles.dropdownitems} href="#">Card Product Setup</a>
                        <styles jsx>{`.dropdownitems {font-weight: bold;}`}</styles>
                        </li>
                        <li onClick={toggleImage}><a className={styles.dropdownitems} href="#">Card Product Rules</a>
                        <styles jsx>{`.dropdownitems {font-weight: bold;}`}</styles>
                        </li>
                        <li onClick={toggleImage}><a className={styles.dropdownitems} href="#">Credit Scoring</a>
                        <styles jsx>{`.dropdownitems {font-weight: bold;}`}</styles>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </>
    );
}

export default ApplicationForms










//  const [firstImage, setMyImg] = useState('downarrow');
//      const changeImage = () => {
//          let val = firstImage;
//          (val === 'downarrow') ? setMyImg('uparrow') : setMyImg('downarrow')
//      }
// // ----------------------------------
//     { <div>
//                 <h1>
//                     <button className='btn' onClick={changeImage}>Button</button>
//                     {firstImage}
//                 </h1>
//             </div> }



            // const ApplicationForms = () => {
//     let [toggled, setToggled] = React.useState(true);

//     let toggleImage = () => {
//         let val = !toggled;
//         (val === !toggled ? setToggled(!toggled) : setToggled(toggled))
//     };
    
//     return (
//         <>
//             <div>
//                 <button onClick={toggleImage}>Toggle Image</button>
//                 {toggled ? <img src="/chevron-down.svg" alt="down" /> : <img src="/chevron-up.svg" alt="up" />}
//             </div>
//         </>
//     )
// }
