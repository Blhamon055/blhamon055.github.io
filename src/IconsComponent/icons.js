import React, { useState } from 'react';
import acidBaseImage from "./acidbase.png"
import preciptationImage from "./preciptation.png"
import eapImage from "./eap.png"

const Icons = ({text, effectType}) => {

    const [hover, setHover] = useState(false);

    const onHover = (x) => {
        x.preventDefault();
        setHover(true);
    };

    const onHoverOver = (x) => {
        x.preventDefault();
        setHover(false);
    };

    return (
        <div>
            <div>
            {hover && <p>Acid Base&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preciptation Game&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EAP Game</p>}
           <img
                onMouseEnter={(x) => onHover(x)}
                onMouseLeave={(x) => onHoverOver(x)}
                src = {acidBaseImage}
                style={{width: 300, height: 300, marginRight: 15}}
            />
            
            <img
                onMouseEnter={(x) => onHover(x)}
                onMouseLeave={(x) => onHoverOver(x)}
                src = {preciptationImage}
                style={{width: 300, height: 300, marginRight: 15}}
            />

            <img
                onMouseEnter={(x) => onHover(x)}
                onMouseLeave={(x) => onHoverOver(x)}
                src = {eapImage}
                style={{width: 300, height: 300}}
            />

            </div>
        </div>
    )
};

export default Icons;