import React from 'react'
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

function App(){
    return(
        <div className="App">
            <div className="menu-container">
                <div className="dropdown-menu">

                </div>
            </div>
        </div>
    )
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
