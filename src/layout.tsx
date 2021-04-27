import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './components/footer';
import Header from './components/header';
import { GlobalStyle } from './styles/globals';
import { MainWrapper } from './styles/grids';

interface LayoutProps {
    children: ReactNode;
}

interface LayoutData {
    site: {
        siteMetadata: {
            name: string,
            description: string,
            copyright: string,
        },
    };
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    const { site }: LayoutData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    name
                    description
                    copyright
                }
            }
        }
    `);

    const {
        name,
        description,
        copyright,
    } = site.siteMetadata;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DeepWeb Starter</title>
            </Helmet>
            <GlobalStyle />
            <MainWrapper>
                <Header name={name} description={description} />
                    <main>{children}</main>
                <Footer copyright={copyright}/>
            </MainWrapper>
        </>
    );
};

export default Layout;
