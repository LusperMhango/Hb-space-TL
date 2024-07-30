import React from "react";
import './Middle_Section.css';

const Middle_part = () =>{
    return(
        <div className="container">
            <button className="heading">
            MEET YOUR BIGGEST EXPECTATIONS
            </button>
            <h2>CONNECT WITH <br /> HB SPACE TL</h2>
            <p>
                HB SPACE TL is a collaborative space where tech enthusiasts come 
                together to build,<br /> experiment and improve.
            </p>

            <div className="button">
                <button className="member-button">
                    BECOME A MEMBER
                </button>
                <button className="explore-button">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};
export default Middle_part;