import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import DashboardContent from '../components/Dashboard/index';
import styled from 'styled-components';


let spaces = [
    {name:'Zoomer', thumbnail:'#'},
    {name:'Apples', thumbnail:'#'}
]
class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Navbar />

                <InnerContainer>

                </InnerContainer>
                
                
            </Container>
        );
    }
}

export default Dashboard;

const Container = styled.div``;

const InnerContainer = styled.div`

`;
