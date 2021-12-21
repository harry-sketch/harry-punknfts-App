// Imports
import Image from 'next/image'

// Styles
import styles from '../../styles/Cards.module.css'

function Cards({
    img,
    cardTitle,
    cardId,
    cardEthImg,
    cardPrice,
    setSelectedId,
}) {
    return (
        <div
            className={styles.cards}
            key={cardId}
            onClick={() => setSelectedId(cardId)}
        >
            <Image src={img} width={200} height={200} alt="punk-images" />
            <div className={styles.title}>{cardTitle}</div>
            <div className={styles.cardId}>.#{cardId}</div>
            <div className={styles.cardPrice}>
                <Image
                    src={cardEthImg}
                    width={20}
                    height={20}
                    alt="punk-images"
                />
                <div className={styles.cardPriceTitle}>{cardPrice}</div>
            </div>
        </div>
    )
}

export default Cards
