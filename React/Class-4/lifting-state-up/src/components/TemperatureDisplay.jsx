import React from 'react'

const TemperatureDisplay = (props) => {

    const tempInCel = props.tempInp;

    const tempInF = tempInCel * (9 / 5) + 32;

  return (
    <div>
      {tempInF}
    </div>
  )
}

export default TemperatureDisplay
