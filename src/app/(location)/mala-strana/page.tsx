import { Hero, Bestsellers, Atmosphere, FindUs } from '@/src/components/shared';
import imagesPath from '@/src/data/imagesPath';
import LOCATIONS from '@/src/data/locations';
import { products } from '@/src/data/menus/menu-mala-strana';

export default function MalaStrana() {
    const malaStranaLocation = LOCATIONS.find((loc) => loc.id === 'mala-strana');
    const malaStranaPhotosPath = imagesPath.find((loc) => loc.id === 'mala-strana');

    return (
        <>
            <Hero address={malaStranaLocation?.address || ''} heroPhoto={malaStranaPhotosPath?.inDoorImg || ''} />
            <Bestsellers dishes={[products[0], products[1], products[2]]} />
            <Atmosphere
                Photos={{
                    MainAtmoPhoto: malaStranaPhotosPath?.outDoorImg || '',
                    atmo1: malaStranaPhotosPath?.AtmosphereImg.atmosphere2 || '',
                    atmo2: malaStranaPhotosPath?.AtmosphereImg.atmosphere3 || '',
                    atmo3: malaStranaPhotosPath?.AtmosphereImg.atmosphere4 || '',
                    atmo4: malaStranaPhotosPath?.AtmosphereImg.atmosphere1 || '',
                }}
            />
            <FindUs
                address={malaStranaLocation?.address || ''}
                phone={malaStranaLocation?.phone || ''}
                directLink={malaStranaLocation?.directLink || ''}
                workingHours={
                    malaStranaLocation?.workingHours || {
                        mon: '',
                        tue: '',
                        wed: '',
                        thu: '',
                        fri: '',
                        sat: '',
                        sun: '',
                    }
                }
            />
        </>
    );
}
