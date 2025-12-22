import React, { useState } from 'react'

const TempratureInp = (props) => {

    return (
        <div>
            <input
                onChange={(e) => props.setTempInp(e.target.value)}
                type='text'
                placeholder='Enter temperature in Celcius'
            />
        </div>
    )
}

export default TempratureInp
