import React from 'react'

const JSXDemo = () => {

    const luckNum = Math.floor(Math.random() * 10 + 1);

    let element = null;

    if (luckNum === 10) {
        element = <p>You just hit the number 10</p>
    } else {
        element = <p>Try again!</p>
    }

    return (
        <div>
            <h2>JSX DEMO</h2>
            <h3>Sum of 1, 2 and 3 : {1 + 2 + 3}</h3>
            <h3>Current Num : {luckNum}</h3>
            { luckNum === 7 ? <img src='https://media.baamboozle.com/uploads/images/137568/1645714885_1840018_gif-url.gif' alt=''/> : <p>Not a lucky Number ☹️</p>}
            {element}

            { luckNum === 7 && <img src='https://media.baamboozle.com/uploads/images/137568/1645714885_1840018_gif-url.gif' alt=''/>}
        </div>
    )
}

export default JSXDemo
