import * as React from 'react';

interface FooterProps {
    copyright: string;
}

const disclaimer: string = 'NO MORE INTELLECTUAL PROPERTY';

const Footer: React.FC<FooterProps> = ({copyright}) => {
    return (
        <footer>
            <s>{copyright}</s>{' '}
            {disclaimer}
        </footer>
    );
};

export default Footer;
