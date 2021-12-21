// Styles
import styles from '../../styles/CardContainer.module.css'

// Components
import Cards from '../Cards/Cards'

function CardsContainer({ setSelectedId, punkDataList }) {
    return (
        <div className={styles.cardContainer}>
            {punkDataList.map(
                ({ cardId, img, cardTitle, cardPrice, ethImg }) => (
                    <Cards
                        key={cardId}
                        cardId={cardId}
                        img={img}
                        cardEthImg={ethImg}
                        cardTitle={cardTitle}
                        cardPrice={cardPrice}
                        setSelectedId={setSelectedId}
                    />
                )
            )}
        </div>
    )
}
// Components

export default CardsContainer
