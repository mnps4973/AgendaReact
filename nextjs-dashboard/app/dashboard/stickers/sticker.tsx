import styles from '@/app/ui/dashboard/stickers/sticker.module.css';

interface Props {
    sticker: {
        id: string,
        name: string,
        image: string,
        price: string,
        collection: string,
    }
}

export default function Sticker({sticker} : Props){

    return(
        <div className={styles.sticker}>
            <p className={styles.stickerName}>{sticker.name}</p>
            <p className={styles.stickerCollection}>{sticker.collection} Collection</p>
            <img 
                src={sticker.image}
                alt={sticker.name}
                width = "150px"
                height= "150px"
                className={styles.stickerImage}
            />
            <p>Price: {sticker.price}€</p>
        </div>
    );
}