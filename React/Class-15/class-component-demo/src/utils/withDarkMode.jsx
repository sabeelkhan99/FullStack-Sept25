import React from 'react'

const withDarkMode = (Component) => {

    const style = {
        backgroundColor: 'gray',
        color: "white",
        height: '100vh'
    }

    return function () {
        return <Component style={ style } />
    }
}

export default withDarkMode
