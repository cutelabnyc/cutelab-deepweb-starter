import * as React from 'react';

interface HeaderProps {
    name: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({name, description}) => {
    return (
        <header>
            <h1>{name}</h1>
            <p>{description}</p>
        </header>
    );
};

export default Header;
