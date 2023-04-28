import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';



const Asidebar = () => {
    return (
        <>
            <div className={styles.aside}>
                <Image
                    className={styles.ayush}
                    src="/wowlogo.svg"
                    alt="Welcome to WOW Card"
                    width={200}
                    height={100} />
                <ul>
                    <li className={styles.systemsetup}>
                        <Link href="#">System Setup<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                    </li>
                    <li className={styles.usermgmt}>
                        <Link href="#">User Management<Image src="/caret-down-fill.svg" width={20} height={20} /></Link>
                    </li>

                    {/*                     
                    <div>
                        <DropdownMenu.root>
                            <DropdownMenu.Trigger>Cards Management</DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Card Product Setup</DropdownMenu.Item>
                                <DropdownMenu.Item>Card Product Rules</DropdownMenu.Item>
                                <DropdownMenu.Item>Credit Scoring</DropdownMenu.Item>
                            </DropdownMenu.Content>

                        </DropdownMenu.root>
                    </div>
 */}


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

                </ul>
            </div>

        </>
    )
}

export default Asidebar