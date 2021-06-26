import React, { Component } from 'react';
import Link from 'next/link';

const companyShortDescript = `
Plan ahead by day, week, or month, and see project status at a glance. 
Search and filter to focus in on anything form a single project individual.
`.trim();

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/saas">
                                    <a className="logo">
                                        <img src='/images/logo-alt2.png' alt="logo2" />
                                    </a>
                                </Link>
                                <p>{companyShortDescript}</p>

                                <ul className="social-list">
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-twitter"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a>Affiliates</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright &copy; 2021 PearlBoard. All rights reserved</p>
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/#">
                                            <a>Terms</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Privacy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
