import React from 'react';
import {Link} from 'react-router-dom'
import './JoinBox.css'

const JoinBox = ({children}) => {
    return (
            <div className="Join-Choice-Background">
                <div className = "Join-Choice-Background-Text">{children}</div>
                <Link to="/Join/info"  className = "Join-Choice-Btn">회원가입</Link>
            </div>
    );
};

export default JoinBox;