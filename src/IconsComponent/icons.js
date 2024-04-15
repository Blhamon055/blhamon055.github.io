import React, { useState } from 'react';

const Icons = ({text, effectType}) => {
    return (
    <button style={{ margin: "10px" }} className={`custom-button ${effectType}`}>
        {text}
    </button>
    )
};

export default Icons;