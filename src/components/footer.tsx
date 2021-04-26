import * as React from 'react';

interface FooterProps {
    copyright: string;
}

const disclaimer: string = 'ABOLISH INTELLECTUAL PROPERTY';

const Footer: React.FC<FooterProps> = ({copyright}) => {
    return (
        <footer>
            <s>{copyright}</s>{' '}
            {disclaimer}
        </footer>
    );
};

export default Footer;
