import { Hero, Bestsellers, Atmosphere, FindUs } from '@/src/components/shared';
import LOCATIONS from '@/src/data/locations';

export default function Vinohrady() {
    const vinohradyLocation = LOCATIONS.find((loc) => loc.id === 'vinohrady');
    return (
        <>
            <Hero address={vinohradyLocation?.address || ''} />
            <Bestsellers />
            <Atmosphere />
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
