import React from 'react'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/UI/SectionContainer";
import HeroSection from '../../components/detailPage/HeroSection';

const DetailPage = () => {
    return (
        <>
            <SectionContainer className="MainHome">
                <Header />
                <HeroSection />
                <Footer />
            </SectionContainer>
        </>
    )
}

export default DetailPage