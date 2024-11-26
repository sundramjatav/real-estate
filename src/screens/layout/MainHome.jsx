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
import SectionContainer from "../../components/UI/SectionContainer";

const MainHome = () => {
  return (
    <>
      <SectionContainer className="MainHome">
        <Header />
        <HeroSection />
        <AboutSection1/>
        <AboutSection/>
        <PlanLayoutSection />
        <OptionProperties />
        <Township name={'Taj The Paradise:'} />
        <Township name={'Highway Dream:'} className={'even'} />
        <TajParadise />
        <Masterpiece />
        <WeOffer />
        {/* <AvailableApartment /> */}
        <Footer />
      </SectionContainer>
    </>
  );
};

export default MainHome;
