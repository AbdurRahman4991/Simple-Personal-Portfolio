import React from 'react';


const TopBanner = ({title}) => {
   
    return (
        <div className="top-banner">
            <h1>{title}</h1>
            <p>Your go-to place for awesome content!</p>
        </div>
    );
};

export default TopBanner;
