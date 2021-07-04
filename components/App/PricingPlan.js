import React from 'react';
import Link from 'next/link';


let tiers = [
  {
    name:'Free',
    price:'0',
    link:'/#',

    style:{
      container:''
    },
    fetures:[
      <li><b>Free</b> Security Service</li>,
      <li><b>1x</b> Security Service</li>,
      <li><b>Unlimited</b> Security Service</li>,
      <li><b>1x</b> Dashboard Access</li>,
      <li><b>3x</b> Job Listings</li>,
      <li><b>5x</b> invoices and quotes</li>,
    ]
  },
  {
    name:'Personal',
    price:'4',
    style:{
      container:''
    },
    link:'/#',
    fetures:[
      <li><b>Everything from Free</b> +</li>,
      <li><b>1x</b> Security Service</li>,
      <li><b>Unlimited</b> Security Service</li>,
      <li><b>1x</b> Dashboard Access</li>,
      <li><b>3x</b> Job Listings</li>,
      <li><b>5x</b> invoices and quotes</li>,
    ]
  },
  {
    name:'Team',
    price:'6',
    link:'/#',
    style:{
      container:'offset-lg-0 offset-md-3'
    },
    fetures:[
      <li><b>Everything from Personal</b> +</li>,
      <li><b>1x</b> Security Service</li>,
      <li><b>Unlimited</b> Security Service</li>,
      <li><b>1x</b> Dashboard Access</li>,
      <li><b>3x</b> Job Listings</li>,
      <li><b>5x</b> invoices and quotes</li>,
    ]
  }
];
class PricingPlan extends React.Component {
    render() {
        return (
            <section className="pricing-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Easy Pricing Plans</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                      {tiers.map((TierItem => (
                        <div className={`col-lg-4 col-md-6 ${TierItem.style.container}`} key={`tier-${TierItem.name}`}>
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">{TierItem.name}</h3>
                                    <div className="price"><span className="dollar">$</span>{TierItem.price}<span className="month">/Mo</span></div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        {TierItem.fetures}
                                    </ul>
                                </div>

                                <div className="price-footer">
                                    <Link href={TierItem.link}>
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                      )))}
                    </div>
                </div>

                <canvas id="canvas"></canvas>
            </section>
        );
    }
}

export default PricingPlan;
