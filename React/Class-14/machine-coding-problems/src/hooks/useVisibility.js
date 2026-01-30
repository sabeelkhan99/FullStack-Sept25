import React, { useState } from 'react'

const useVisibility = (initialVal = false) => {
    
    const [visibility, setVisibility] = useState(initialVal);

    // show
    const show = () => {
        setVisibility(true);
    }

    // hide
    const hide = () => {
        setVisibility(false);
    }

    // toggle
    const toggle = () => {
        setVisibility((prevState) => !prevState);    
    }

    return { visibility, show, hide, toggle };
}

export default useVisibility
