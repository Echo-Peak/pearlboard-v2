import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/App/Banner';
import Features from '../components/App/Features';
import Overview from '../components/App/Overview';


import SaasTools from '../components/App/SaasTools';
import Funfact from '../components/Saas/Funfact';
import PricingPlan from '../components/App/PricingPlan';
import Feedback from '../components/App/Feedback';
import Partner from '../components/App/Partner';

class Index extends React.Component {
    render() {
        return (
            <>
               <Navbar />
               <Banner />
               <Features />
               <Overview />
               
               <SaasTools />
               <Funfact />
               <PricingPlan />
               
               <Feedback />
               <Partner />
               <Footer />
            </>
        );
    }
}

export default Index;
