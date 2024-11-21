import React from 'react'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/UI/SectionContainer";
import HeroSection from '../../components/detailPage/HeroSection';
import AllContent from '../../components/detailPage/AllContent';

const DetailPage = () => {
    return (
        <>
            <SectionContainer className="MainHome">
                <Header />
                <HeroSection />
                <AllContent />
                <Footer />
            </SectionContainer>
        </>
    )
}

export default DetailPage