import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



function ApplicationForms() {

    const [open, setOpen] = useState(false);
    // const handleClickOpen = () =>{
    //     setOpen(true);
    // };
    
    const handleClose = () => {
        setOpen(true);
    };
    
    // let [toggled, setToggled] = useState(true);

    // let toggleImage = () => {
    //     let val = !toggled;
    //     (val === !toggled ? setToggled(!toggled) : setToggled(toggled))
    // };

    return (
        <>
            <div className={styles.aside}>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>

        </div>
    </div>
  </div>
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
