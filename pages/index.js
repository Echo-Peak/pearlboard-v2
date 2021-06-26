import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/App/Banner';
import Features from '../components/App/Features';
import PricingPlan from '../components/App/PricingPlan';

class Index extends React.Component {
    render() {
        return (
            <>
               <Navbar />
               <Banner />
               <Features />
               <PricingPlan />
               <Footer />
            </>
        );
    }
}

export default Index;
