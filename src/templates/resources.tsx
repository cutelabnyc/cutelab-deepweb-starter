import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layout';

// TODO: TS this shit up
export const resources = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date
                slug
                title
            }
        }
    }
`;

interface ResourceProps {
    data: any;
}

const Resource: React.FC<ResourceProps> = ({data}) => {

    const { frontmatter, html } = data.markdownRemark;

    return (
            <Layout>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Layout>
    );
};

export default Resource;
