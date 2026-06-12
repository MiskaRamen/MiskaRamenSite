import { Hero, Bestsellers, Atmosphere, FindUs } from '@/src/components/shared';
import LOCATIONS from '@/src/data/locations';

export default function MalaStrana() {
    const malaStranaLocation = LOCATIONS.find((loc) => loc.id === 'mala-strana');
    return (
        <>
            <Hero address={malaStranaLocation?.address || ''} isOpen={malaStranaLocation?.isOpen || false} />
            <Bestsellers />
            <Atmosphere />
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
