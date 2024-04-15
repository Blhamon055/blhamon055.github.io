import React, { useState } from 'react';
import acidBaseImage from "./acidbase.png"
import preciptationImage from "./preciptation.png"

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
            <div id="1">
            {hover && <p>Acid Base Game</p>}
            <img 
                onMouseEnter={(x) => onHover(x)}
                onMouseLeave={(x) => onHoverOver(x)}
                src = {acidBaseImage}
                style={{width: 300}, {height: 300}}
            />
            </div>
        <div id="2">
            {hover && <p>Preciptation Game</p>}
            <img
                onMouseEnter={(x) => onHover(x)}
                onMouseLeave={(x) => onHoverOver(x)}
                src = {preciptationImage}
                style={{width: 300}, {height: 300}}
            />
        </div>
        </div>
    )
};

export default Icons;