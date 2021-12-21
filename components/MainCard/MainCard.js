import Image from 'next/image'
import { useState, useEffect } from 'react'

// Styles
import styles from '../../styles/MainCard.module.css'
import wethImg from '../../images/assets/weth.png'

function MainCard({ selectedId, punkDataList }) {
    const [activePunk, setActivePunk] = useState(punkDataList[0])

    useEffect(() => {
        setActivePunk(punkDataList[selectedId])
    }, [activePunk, selectedId])
    const { img, cardTitle, cardId, cardPrice } = activePunk
    return (
        <div className={styles.mainCard}>
            <div className={styles.imgDiv}>
                <Image
                    src={img}
                    width={200}
                    height={200}
                    alt="main-img"
                    objectFit="contain"
                />
            </div>
            <div className={styles.headingDiv}>
                <h4 className={styles.mainHeading}>{cardTitle}</h4>
                <div className={styles.paraDiv}>
                    <p>.#{cardId}</p>
                    <div style={styles.lastDiv}>
                        <span className={styles.price}>
                            <i>{cardPrice}</i>
                        </span>
                        <Image
                            src={wethImg}
                            width={20}
                            height={20}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard
