import React from 'react';

const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#047d95',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    };

    const currentYear: number = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            Made by Karthik &copy; {currentYear}
        </footer>
    );
};

export default Footer;
