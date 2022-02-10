import React, { Component } from 'react';
import Showinfo from './Showinfo';
import axios from 'axios'


export default class Pinfo extends Component {
    constructor(props){
        super(props);
        this.state={
           clicked : false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.makecall = this.makecall.bind(this);

    }
    handleChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }

    handleClick(){
        this.setState({clicked : !this.state.clicked})
    }

    async makecall(){
        let responce = await axios.get("https://gateway.marvel.com:443/v1/public/comics?title=Hulk&apikey=05db2c7e0f88fc3c2c94cf3a1673a213",)
        console.log(responce.data.data.results[0].title)
    }

    render() {
        const clicker = this.state.clicked
        return (
            <div>
                <input type='text' onChange={this.handleChange} placeholder='Enter your name' name="uname"></input>
                <input type='text' onChange={this.handleChange} placeholder='Enter your name' name="phno"></input>
                <input type='text' onChange={this.handleChange} placeholder='Enter your name' name="address"></input>
                <input type='text' onChange={this.handleChange} placeholder='Enter your name' name="linkid_in"></input>
                <button onClick={this.handleClick} className={clicker ? 'show' :'notshow'}>Click me</button>
                <button onClick={this.makecall} >Marvel</button>
                
                {
                    clicker ? <Showinfo data = {this.state}/>:""
                }
            </div>
        )
    }
}
