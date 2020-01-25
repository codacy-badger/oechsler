import React from 'react';
import { Hero } from '../../components/hero/Hero';

import { Navigation } from '../../components/navigation/Navigation';
import { Elevator } from '../../components/elevator/Elevator';

import thumbOverview from '../../images/thumb-overview.jpg';
import { Page } from '../../components/page/Page';

const Home = () => {
    return (
        <>
            <Hero background={thumbOverview} blur={8} opacity={0.1}>
                <Navigation>
                    <Navigation.Item href='#' text='About me.' />
                    <Navigation.Item href='#' text='Recent Projects.' />
                </Navigation>
                <Elevator />
            </Hero>
            <Page></Page>
        </>
    );
};

export { Home };
