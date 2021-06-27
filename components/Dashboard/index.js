import React, { Component } from 'react';
import Link from 'next/link';

class Dashboard extends Component {
    render() {
        return (
          <>
            <h1>df</h1>
            <Link href='/board-view'>
              <a> Go to boardview</a>
              </Link>
          </>
        );
    }
}

export default Dashboard;
