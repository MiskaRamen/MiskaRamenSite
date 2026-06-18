import type { Location } from '../types/types';

const getPragueDateTime = () => {
    const now = new Date();

    const time = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Prague',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    const day = now.toLocaleString('en-US', {
        timeZone: 'Europe/Prague',
        weekday: 'short',
    });

    return { time, day };
};

const checkMalaStranaOpen = () => {
    const { time, day } = getPragueDateTime();

    if (day === 'Mon') {
        return time >= '11:00' && time <= '20:30';
    } else {
        return time >= '11:00' && time <= '21:30';
    }
};

const LOCATIONS: Location[] = [
    {
        id: 'vinohrady',
        name: 'Vinohrady',
        address: 'Španělská 2, 120 00 Praha 2',
        imageBg: 'bg-[url("/vinohrady/Atmosphere/MainAtmosphere.png")]',
        isOpen: getPragueDateTime().time >= '11:00' && getPragueDateTime().time <= '22:00',
        phone: '+420 776 357 984',
        imageSrc: '/vinohrady/vinohrady_outdoor.jpg',
        workingHours: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00',
        },
        directLink:
            'https://www.google.com/maps/place/Miska+Ramen+Bar-za+muzeem/@50.0791697,14.4333444,19z/data=!3m1!4b1!4m6!3m5!1s0x470b95a500bd6be5:0x284edcbe70b6397b!8m2!3d50.0791688!4d14.4339881!16s%2Fg%2F11h2ycnt9_?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        id: 'mala-strana',
        name: 'Malá Strana',
        address: 'Míšeňská 70/4, 118 00 Malá Strana',
        imageBg: 'bg-[url("/images/mala-strana-bg.jpg")]',
        isOpen: checkMalaStranaOpen(),
        phone: '+420 608 605 185',
        imageSrc: '/mala-strana/mala-strana_outdoor.jpg',
        workingHours: {
            mon: '11:00 - 20:30',
            tue: '11:00 - 21:30',
            wed: '11:00 - 21:30',
            thu: '11:00 - 21:30',
            fri: '11:00 - 21:30',
            sat: '11:00 - 21:30',
            sun: '11:00 - 21:30',
        },
        directLink:
            'https://www.google.com/maps/place/Miska+Ramen+%26+Sushi-+bl%C3%ADzko+Karlova+mostu/@50.0878598,14.4081942,21z/data=!4m6!3m5!1s0x470b9593e261f28f:0x4023f87ee727bb2a!8m2!3d50.0878142!4d14.4082777!16s%2Fg%2F11vwfnndmj?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
    },
];

export default LOCATIONS;
