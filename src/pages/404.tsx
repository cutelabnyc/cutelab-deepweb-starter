import * as React from 'react';
import Layout from '../layout';

interface Props404 {
    props: any;
}

const PageNotFound: React.FC<Props404> = () => {
    return (
        <Layout>
            <h1>404</h1>
            <p>Not Found</p>
        </Layout>
    );
};

export default PageNotFound;
