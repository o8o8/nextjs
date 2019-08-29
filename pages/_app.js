import React from 'react'
import App, {Container} from 'next/app'
import {Provider} from 'react-redux';
import Default from '../layouts/default'
import store from "../store";
import '../assets/scss/main.scss';

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Provider store={store}>
                <Default>
                    <Component {...pageProps} />
                </Default>
            </Provider>
        )
    }
}

export default MyApp
