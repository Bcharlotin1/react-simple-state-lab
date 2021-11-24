import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(value){
        super();
        this.state = {
            color: Object.values(value)[0]
        }
    }
    
    handleClick = ()=>{
        this.setState({
            color: '#333'
        })

    }
    
    
    render() {
        return (
        
        <div onClick={this.handleClick } className="cell" style={{backgroundColor: this.state.color}}></div>
            
            )
    
    }
}
