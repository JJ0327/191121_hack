import React from 'react';
import './FestivalBox.css'

const FestivalBox = ({children}) => {
    return (
        <frameElement>
            <div className = "Festival-Img-Background"></div>   
            <div className = "Festival-Img-info">{children}</div>
        </frameElement>

    );
};

export default FestivalBox;