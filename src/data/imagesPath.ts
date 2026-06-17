interface IImagesPath {
    id: 'vinohrady' | 'mala-strana';
    outDoorImg: string;
    inDoorImg: string;
    AtmosphereImg: {
        atmosphere1: string;
        atmosphere2: string;
        atmosphere3: string;
        atmosphere4: string;
    };
}

const imagesPath: IImagesPath[] = [
    {
        id: 'vinohrady',
        outDoorImg: '/vinohrady/vinohrady_outdoor.jpg',
        inDoorImg: '/vinohrady/vinohrady_indoor.jpg',
        AtmosphereImg: {
            atmosphere1: '/vinohrady/Atmosphere/AtmosphereFood.png',
            atmosphere2: '/vinohrady/Atmosphere/AtmosphereFood2.png',
            atmosphere3: '/vinohrady/Atmosphere/AtmosphereFood3.png',
            atmosphere4: '/vinohrady/Atmosphere/Rolls.png',
        },
    },
    {
        id: 'mala-strana',
        outDoorImg: '/mala-strana/mala-strana_outdoor.jpg',
        inDoorImg: '/mala-strana/mala-strana_indoor.jpg',
        AtmosphereImg: {
            atmosphere1: '/mala-strana/Atmosphere/atmo1.jpg',
            atmosphere2: '/mala-strana/Atmosphere/atmo2.jpg',
            atmosphere3: '/mala-strana/Atmosphere/atmo3.jpg',
            atmosphere4: '/mala-strana/Atmosphere/atmo4.jpg',
        },
    },
];

export default imagesPath;
