import { Navbar, Hero, Bestsellers, Atmosphere, FindUs, Footer } from '../features/landing/components';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Bestsellers />
            <Atmosphere />
            <FindUs />
            <Footer />
        </>
    );
}
