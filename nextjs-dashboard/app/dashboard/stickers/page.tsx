import Sticker from '@/app/dashboard/stickers/sticker';
import { fetchStickers } from '@/app/lib/data';

export default async function Page() {
    const stickers = await fetchStickers();

    

    return (
        <div>
            {stickers.map((sticker) => (
                <div key={sticker.id}>
                    <Sticker sticker={sticker} />
                </div>
            ))}
        </div>
    );
}