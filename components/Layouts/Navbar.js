import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SideDrawer from './SideDrawer';
import SearchForm from './SearchForm';
import styled from 'styled-components';

class Navbar extends React.Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    goto(e, path){
      
      this.props.router.history.push(path);
    }
    render() {
        let { pathname } = this.props.router;
        let { products } = this.props;

        let layOutCls = '';
        let logo = '/images/logo-alt1.png';

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <>
                <header id="header">
                    <div id="navbar" className={`crake-nav ${layOutCls}`}>
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/saas">
                                    <a className="navbar-brand">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav nav ms-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#" onClick={e => e.preventDefault()}>About</a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a href="/#" className="nav-link" onClick={e => e.preventDefault()}>Pricing</a>
                            
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/#" onClick={e => e.preventDefault()}>Blog</a>
                                        </li>

                                        <GotoApp className="nav-item">
                                          <a className="nav-link" href="/app" onClick={this.goto.bind(this, 'app')}>Go to app</a>
                                        </GotoApp>

                                    </ul>
                                </div>

                                <div className="ms-auto others-option">

                                </div>
                            </nav>
                        </div> 
                    </div>
                </header>

                {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ''}
                {this.state.searchForm ? <SearchForm onClick={this.handleSearchForm} /> : ''}
            </>
        );
    }
}

export default withRouter(Navbar);


const GotoApp = styled.li`
border-left: 1px solid white;
`;