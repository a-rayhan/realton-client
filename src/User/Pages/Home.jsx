import AboutUs from "../Components/AboutUs";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import DiscoverFeaturedListing from "../Components/DiscoverFeaturedListing";
import ExploreApartmentTypes from "../Components/ExploreApartmentTypes";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar/Navbar";
import PopulerProperties from "../Components/PopulerProperties";
import PropertiesByCities from "../Components/PropertiesByCities";
import Review from "../Components/Review";
import Services from "../Components/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <ExploreApartmentTypes />
            <Services />
            <DiscoverFeaturedListing />
            <PropertiesByCities />
            <AboutUs />
            <PopulerProperties />
            <Review />
            <Blog />
            <Logo />
            <Contact />
        </div>
    );
};

export default Home;