import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import DashboardContent from '../components/Dashboard/index';
import styled from 'styled-components';

const DynamicBoard = dynamic(
  () => import('../components/Layouts/AppBoard'),
  {ssr: false}
  );
  
class Dashboard extends Component {
    render() {
        return (
            <>
                {/* <Navbar /> */}

                {/* <DashboardContent/> */}
                
                {/* <Footer /> */}
                <BoardContainer data-comp="asd">
                  <DynamicBoard/>
                </BoardContainer>
            </>
        );
    }
}

export default Dashboard;

const BoardContainer = styled.div`
display: flex;
height:100%;
height:100%;
position: absolute;
top:0px;
left:0px;
right:0px;
background-color:rgb(60, 60, 60);
background-size:50px 50px;
background-image:linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent);

`