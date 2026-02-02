import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    componentDidMount() {
        console.log('componentDidMount: Just after the first render');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count === 4) {
            console.log(this.state.count);
            console.log('making an API call because current value is 5')
        }
        // console.log('componentDidUpdate: component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>++</button>
                <button onClick={this.handleDecrement}>--</button>
            </div>
        )
  }
}

export default Counter;
