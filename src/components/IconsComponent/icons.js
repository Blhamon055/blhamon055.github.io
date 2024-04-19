import React from 'react';
import acidBaseImage from "./acidbase.png"
import preciptationImage from "./preciptation.png"
import eapImage from "./eap.png"
import "./styles.css"

const Icons = () => {

    const handleGameClick = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div>
            <h2 className='titles'>Select Your Game!</h2>
            <div className="gameselectionwrapper">
                <div className='gamewrapper'>
                    <h4 className='titles'>Acid Base</h4>
                    <img
                        src={acidBaseImage}
                        onClick={() => handleGameClick("https://lhollandnw.itch.io/acid-base")}
                        alt=''
                        style={{ width: 400, height: 400 }}
                    />
                </div>
                <div className='gamewrapper'>
                <h4 className='titles'>Precipitation Reactions</h4>
                    <img
                        src={preciptationImage}
                        onClick={() => handleGameClick("https://precipitationgame.itch.io/precipitation-game")}
                        alt=''
                        style={{ width: 400, height: 400 }}
                    />
                </div>
                <div className='gamewrapper'>
                <h4 className='titles'>Redox Reactions</h4>
                    <img
                        src={eapImage}
                        onClick={() => handleGameClick("https://jkelley14.itch.io/software-practice")}
                        alt=''
                        style={{ width: 400, height: 400 }}
                    />
                </div>

            </div>
        </div>
    )
};

export default Icons;