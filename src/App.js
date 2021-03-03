import React, { Component } from 'react';
import './App.css';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            value: 0
        }
    }

    handlePlus = () => {
        this.setState({count: this.state.count + 1});
    }

    handleMinus = () => {
        this.setState({count: this.state.count - 1});
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        
    }

    render() {
        console.log('render', this.state.count);
        return (
            <div className="App">

                <div className="wrapper">
                    <div className="clicker">
                        <h2>Clicker</h2>
                        <button onClick={this.handlePlus}>+</button>
                        <span className="number">{ this.state.count }</span>
                        <button onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.count >= 0 ? '"positive number"' : '"negative number"'} readOnly/>
                    </div>
                </div>

            </div>
        );
    }

}

export { App };