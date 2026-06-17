import { Hero, Bestsellers, Atmosphere, FindUs } from '@/src/components/shared';
import LOCATIONS from '@/src/data/locations';
import imagesPath from '@/src/data/imagesPath';
import { products } from '@/src/data/menus/menu-vinohrady';

export default function Vinohrady() {
    const vinohradyLocation = LOCATIONS.find((loc) => loc.id === 'vinohrady');
    const vihohradyPhotosPath = imagesPath.find((loc) => loc.id === 'vinohrady');
    return (
        <>
            <Hero
                address={vinohradyLocation?.address || ''}
                isOpen={vinohradyLocation?.isOpen || false}
                heroPhoto={vihohradyPhotosPath?.inDoorImg || ''}
            />
            <Bestsellers dishes={[products[0], products[1], products[2]]} />
            <Atmosphere
                Photos={{
                    MainAtmoPhoto: vihohradyPhotosPath?.outDoorImg || '',
                    atmo1: vihohradyPhotosPath?.AtmosphereImg.atmosphere2 || '',
                    atmo2: vihohradyPhotosPath?.AtmosphereImg.atmosphere3 || '',
                    atmo3: vihohradyPhotosPath?.AtmosphereImg.atmosphere4 || '',
                    atmo4: vihohradyPhotosPath?.AtmosphereImg.atmosphere1 || '',
                }}
            />
            <FindUs
                address={vinohradyLocation?.address || ''}
                phone={vinohradyLocation?.phone || ''}
                directLink={vinohradyLocation?.directLink || ''}
                workingHours={
                    vinohradyLocation?.workingHours || {
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
