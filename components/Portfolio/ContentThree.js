import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
const images = [
    '/images/work-img1.jpg',
    '/images/work-img2.jpg',
    '/images/work-img3.jpg',
    '/images/work-img4.jpg',
    '/images/work-img5.jpg',
    '/images/work-img6.jpg'
]

class ContentThree extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="project-area four-columns-wide ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img1.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img2.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img3.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img4.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img5.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img6.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img1.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img2.jpg' alt="work" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3><Link href="/project-details"><a>Network Marketing</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="icofont-double-left"></i>
                                            </a>
                                        </li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="icofont-double-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentThree;
