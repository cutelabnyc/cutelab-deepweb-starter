import React, { ReactNode } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../layout';
import { StyledLink } from '../styles/globals';
import { Row, Column, Container } from '../styles/grids';

interface IndexPageProps {
    children: ReactNode
}

interface ResourceData {
    allMarkdownRemark: {
        edges: Array<any> // TODO: Typify
    }
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
        flex: 1,
        padding: '20px',
        border: '1px solid black',
        margin: '10px',
    };

    return (
        <Layout>
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
