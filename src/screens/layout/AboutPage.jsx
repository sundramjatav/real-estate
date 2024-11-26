import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AboutSection from "../../components/main/AboutSection";
import AboutSection1 from "../../components/main/AboutSection1";
import AvailableApartment from "../../components/main/AvailableApartment";
import HeroSection from "../../components/main/HeroSection";
import Masterpiece from "../../components/main/Masterpiece";
import OptionProperties from "../../components/main/OptionProperties";
import TajParadise from "../../components/main/TajParadise";
import Township from "../../components/main/Township";
import WeOffer from "../../components/main/WeOffer";
import PlanLayoutSection from "../../components/planLayout/PlanLayoutSection";
import crown from "../../assets/main/crown.png";
import SectionContainer from "../../components/UI/SectionContainer";

const AboutPage = () => {
    return (
        <>
            <SectionContainer className="AboutPage">
                <Header />
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="max-w-7xl m-auto space-y-10">
                        <img src={crown} className="w-[400px] m-auto" alt="" />
                        <p className="para">
                            Welcome to A&D Ventures, a trusted name in real estate in Bhopal for over a decade. With a commitment to quality, innovation, and customer satisfaction, we specialize in crafting exceptional living spaces and commercial properties.
                        </p>
                        {/* <h1 className="text-8xl text-center"> Coming Soon.....</h1> */}
                    </div>
                </div>
                <Footer />
            </SectionContainer>
        </>
    );
};

export default AboutPage;
