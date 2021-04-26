import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { GlobalStyle } from './styles/globals';
import { MainWrapper } from './styles/grids';
import Footer from './components/footer'
import Header from './components/header'

interface LayoutProps {
    children: ReactNode;
}

interface LayoutData {
    site: {
        siteMetadata: {
            name: string,
            description: string,
            copyright: string,
        }
    }
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    const data: LayoutData = useStaticQuery(graphql`
        query myQuery {
            site {
                siteMetadata {
                    name
                    description
                    copyright
                }
            }
        }
    `)

    const {
        name,
        description,
        copyright,
    } = data.site.siteMetadata;

    return (
        <>
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
