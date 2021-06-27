import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import DashboardContent from '../components/Dashboard/index';

class Dashboard extends Component {
    render() {
        return (
            <>
                <Navbar />

                <DashboardContent/>
                
                <Footer />
            </>
        );
    }
}

export default Dashboard;
