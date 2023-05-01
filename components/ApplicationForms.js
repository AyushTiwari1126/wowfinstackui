import React from 'react'
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

const ApplicationForms = () => {
    const [firstImage, setMyImg] = useState('/chevron-down.svg');
    const changeImage = () => {

        let val = firstImage;
        if(val==='/chevron-down.svg'){
            setMyImg('/chevron-up.svg')
        }else {
            setMyImg('/chevron-down.svg')
        }
        setMyImg('/chevron-up.svg')
    }
    return (
        <>
            <div>
                <h1>
                    {firstImage}
                    <button className='btn' onClick={changeImage}>Button</button>
                </h1>
            </div>
        </>
    )
}

export default ApplicationForms