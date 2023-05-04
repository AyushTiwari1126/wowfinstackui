import React, { useState } from 'react'
// import OutsideClickHandler from 'react-outside-click-handler';
import styles from '@/styles/Home.module.css'

export default function Test() {

//   const songs = document.querySelectorAll("li");

// songs.forEach((song) => {
//   song.addEventListener("click", changeColor);
// });

// function changeColor() {
//   this.classList.add("song-selection");
//   console.log(this);
// }

    // const[hidden, setHidden] = useState(false)


    // const[count, setCount] = useState(0)

    // function increment(){
    //     setCount(count+1)
    //     // setCount(prevCount => prevCount+1)
    //     // setCount(prevCount => prevCount+1)
    // }
    // function decrement(){
    //     setCount(count-1)
    // }
  return (

    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> </div>
    </div>
  </div>
</div>
    // <div class="card-action">
    // <h5 id='current-list'>Current Set List</h5>
    // <h6 id="set-id-1" class="center">Set #1</h6>
    // <ul class='collection set-1' id="set-1">
    //   <li class="collection-item song-item">
    //     Live Wire (AC/DC)
    //   </li>
    //   <li class="collection-item song-item">
    //     Whole Lotta Rosie (AC/DC)
    //   </li>
    //   <li class="collection-item song-item">
    //     Sin City (AC/DC)
    //   </li>
    //   <li class="collection-item song-item">
    //     Jailbreak (AC/DC)
    //   </li>
    // </ul>
    // </div>


    // <div>
    //     <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
    // </div>
  )
}





// import React, { useState } from 'react'
// import styles from '@/styles/AppForms.module.css'
// import Asidebar from './Asidebar';


  
// export default function ModalComponents({ open, handleClose }) {
//   if (!open) {
//     return null;
//   }
//   return (
//     <div className={styles.firstdiv}>
//       <div>
//         <h1>Dialog Box</h1>
//         <h1 className={styles.heading1} onClick={handleClose}>
//           x
//         </h1>
//       </div>
//       console.log(document.location.href);
//     </div>
//   )
    
// }


