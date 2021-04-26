import * as React from 'react';
import Layout from '../layout';
import { Row, Column, Container } from '../styles/grids';

interface IndexPageProps {
    props: any;
}

const LoremIpsum: Array<string> = [`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit`,
                    `aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
                    `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`];

const IndexPage: React.FC<IndexPageProps> = () => {

    const ColumnParams = {
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
                   {LoremIpsum.map((text, id) => {
                        return(
                            <Column {...ColumnParams} key={id}>
                                <h2>Yo</h2>
                                <p>{text}</p>
                            </Column>
                        )
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default IndexPage;
