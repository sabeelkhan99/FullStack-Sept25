import React, { useState } from 'react'

const useToggle = (initialVal = true) => {
    
    const [value, setValue] = useState(initialVal);

    const toggleVal = () => {
        setValue(() => !value);
    }

    return [value, toggleVal]
}

export default useToggle;
