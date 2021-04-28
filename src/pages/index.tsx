import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import 'reflect-metadata';
import Layout from '../layout';
import { StyledLink } from '../styles/globals';
import {  Column, Container, Row } from '../styles/grids';

interface IndexPageProps {
    children: ReactNode;
}

// TODO: Typify
interface ResourceData {
    allMarkdownRemark: {
        edges: any[];
    };
}

const IndexPage: React.FC<IndexPageProps> = () => {

    const { allMarkdownRemark }: ResourceData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            date
                            title
                            slug
                        }
                    }
                }
            }
        }
    `);

    const ColumnProps = {
        border: '1px solid black',
        flex: 1,
        margin: '10px',
        padding: '20px',
    };

    const GraeberQuote = `The ultimate hidden truth of the world is that it is something we make. And could just as easily make differently.`;

    return (
        <Layout>
            <h1>"{GraeberQuote}"</h1>
            <h3> — David Graeber, 1961-2020</h3>
            <hr /><br />
            <h1>Resources:</h1>
            <Container>
                <Row>
                   {allMarkdownRemark.edges.map((markdown, key) => {
                        return(
                            <Column {...ColumnProps} key={key}>
                                <StyledLink to={`/${markdown.node.frontmatter.slug}`}>
                                    <h2>{markdown.node.frontmatter.title}</h2>
                                </StyledLink>
                                <h3>{markdown.node.frontmatter.date}</h3>
                                <div dangerouslySetInnerHTML={{ __html: markdown.node.html }} />
                            </Column>
                        );
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default IndexPage;
