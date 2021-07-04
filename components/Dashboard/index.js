import React, { Component } from 'react';
import Link from 'next/link';
import DashboardWrapper from '../../components/Dashboard/Wrapper';
import Navbar from '../../components/Dashboard/Navbar';
import Space from '../../components/Dashboard/Space';
import Spaces from '../../components/Dashboard/Spaces';

let spaces = [
  {
    name:'falcon',
    id:'288273',
    created:19982837,
    lastModified:283874,
    members:[]
  },
  {
    name: 'Ignor',
    id:'288273',
    created:19982837,
    lastModified:283874,
    members:[]
  }
]
class Dashboard extends Component {
    render() {
        return (
          <DashboardWrapper>
            <Navbar></Navbar>
            <Spaces>
              {spaces.map(_space => <Space {..._space}></Space>)}
            </Spaces>
          </DashboardWrapper>
            
        );
    }
}

export default Dashboard;
