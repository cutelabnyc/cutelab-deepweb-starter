import React, { ReactNode } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { StyledLink } from '../styles/globals';
import {  Column, Container, Row } from '../styles/grids';
import Layout from '../layout';

interface IndexPageProps {
    children: ReactNode;
};

interface ResourceData {
    allMarkdownRemark: {
        edges: Array<any> // TODO: Typify
    };
};

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
        flex: 1,
        padding: '20px',
        border: '1px solid black',
        margin: '10px',
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
                        )
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default IndexPage;
