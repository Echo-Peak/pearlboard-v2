import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/App/Banner';
import Features from '../components/App/Features';
import PricingPlan from '../components/App/PricingPlan';
import {APIConsumer} from '../contexts/api';

class Index extends React.Component {
    constructor(){
        super();
        fetch('/api/test/set').then(console.log).catch(console.log)
        console.log('--------1111')
    }
    render() {
        return (
            
            <APIConsumer>
                {APIContext => {
                    console.log('_______>>>>>>', APIContext)
                    return (
                        <>
                        <Navbar />
                        <Banner />
                        <Features />
                        <PricingPlan />
                        <Footer />
                        </>
                    )
                }}
            </APIConsumer>
            
        );
    }
}

export default Index;
