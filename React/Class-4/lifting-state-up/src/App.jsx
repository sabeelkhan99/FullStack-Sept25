import React,{useState} from 'react'
import TempratureInp from './components/TempratureInp'
import TemperatureDisplay from './components/TemperatureDisplay'

const App = () => {

    const [tempInp, setTempInp] = useState(0);

    return (
        <div>
            <h1>Lifting the state up</h1>
            <TempratureInp setTempInp={ setTempInp } />
            <TemperatureDisplay tempInp={ tempInp } />
        </div>
    )
}

export default App
