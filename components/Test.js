import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

export default function Test() {

    const[hidden, setHidden] = useState(false)


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
    <div className='App'>
        <OutsideClickHandler onOutsideClick={()=>{setHidden(false)}}>
            <button onClick={()=> setHidden(true)}>Open</button>
        </OutsideClickHandler>
        {hidden && 
        (<div>
            <h1>Hello World</h1>
        </div>
        
        )}
    </div>


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


