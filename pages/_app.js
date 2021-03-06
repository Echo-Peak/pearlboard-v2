import '../public/css/bootstrap.min.css';
import '../public/css/icofont.min.css';
import '../public/css/animate.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import Head from "next/head";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';

import GoTop from '../components/Shared/GoTop';
import Loader from '../components/Shared/Loader';
import {APIProvider} from '../contexts/api';
import {BillingProvider} from '../contexts/billing';

export default class MyApp extends App {
    render () {
      const { Component, pageProps, store } = this.props

      return (
          <>
              <Head>
                  <title>Mojosa - React Next Landing Page Templates</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                  <meta name="description" content="Mojosa - React Next Landing Page Templates" />
                  <meta name="og:title" property="og:title" content="Mojosa - React Next Landing Page Templates"></meta>
                  <meta name="twitter:card" content="Mojosa - React Next Landing Page Templates"></meta>
                  <link rel="canonical" href="https://mojosa-react.envytheme.com/"></link>
              </Head>

              <Preloader>

                      <APIProvider>
                        <BillingProvider>
                          <Component {...pageProps} />
                        </BillingProvider>
                      </APIProvider>

                  <GoTop scrollStepInPx="50" delayInMs="16.66" />

                  <Placeholder>
                      <Loader />
                  </Placeholder>
              </Preloader>
          </>
      );
    }
}
