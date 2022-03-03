'use strict';
import React, { useState } from 'react';

function App(){
    let mainDivClasses = "main-cred-signal-box info-box-inactive";
    let infoBoxClasses = "info-view-box info-box-inactive";
    let numCitations = Math.floor(Math.random() * 10);
    let numNegCitations = numCitations - Math.floor(Math.random() * 10);
    let infoText = "NBC News is the news division of the American broadcast television network NBC. The division operates under NBCUniversal Television and Streaming, a division of NBCUniversal, which is, in turn, a subsidiary of Comcast. The news division's various operations report to the president of NBC News, Noah Oppenheim. Wikipedia";
    const [showInfoBox, setShowInfoBox] = useState(false);

    if(numNegCitations <= 0) {
        numNegCitations = 0;
    }

    const handleInfoButton = (event) => {
        setShowInfoBox(!showInfoBox);
    }

    if(showInfoBox) {
        mainDivClasses = "main-cred-signal-box info-box-active";
        infoBoxClasses = "info-view-box info-box-active";
    } else {
        mainDivClasses = "main-cred-signal-box info-box-inactive";
        infoBoxClasses = "info-view-box info-box-inactive";
    }

    return (
        <div className={mainDivClasses}>
            <div className="header-box">
                <div className="info-button-box">
                    <button className={showInfoBox ? "info-button-active" : "info-button-inactive"}
                        onClick={handleInfoButton}>Channel Information</button>
                </div>
                <div className="citation-count-box">
                    <div className="overall-citations">
                        <p className="citation-text">Number of citations:</p>
                        <h2 className="citation-num">{numCitations}</h2>
                    </div>
                    <div className="flagged-citations">
                        <p className="citation-text">Citation flags:</p>
                        <h2 className="citation-num">{numNegCitations}</h2>
                        
                    </div>
                </div>
            </div>
            <div className={infoBoxClasses}>
                <p>{infoText}</p>
            </div>
        </div>
    )
}



export default App;