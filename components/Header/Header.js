// imports
import Image from 'next/image'
import { useState } from 'react'

// Styles
import styles from '../../styles/Header.module.css'

function Header({ headerData }) {
    const { icon, searchIcon, utilities, themeSwitchIcon } = headerData

    // Local State
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className={styles.header}>
            <Image
                src={icon}
                className={styles.headerLogo}
                width={100}
                height={100}
                alt="header-logo"
            />
            <div className={styles.searchDiv}>
                <Image
                    src={searchIcon}
                    width={20}
                    height={20}
                    alt="search-img"
                />
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className={styles.utilityDiv}>
                {utilities.map(({ id, title }) => (
                    <span key={id} className={styles.utilityTitle}>
                        {title}
                    </span>
                ))}
            </div>
            <div className={styles.themeSwitch}>
                <Image
                    src={themeSwitchIcon}
                    alt="theme-switch-img"
                    width={25}
                    height={25}
                />
            </div>
            <button className={styles.accessBtn}>Get Access</button>
        </div>
    )
}

export default Header
