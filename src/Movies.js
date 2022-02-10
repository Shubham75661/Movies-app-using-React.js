import axios from 'axios'
import { MoviesData } from './MoviesData';
import "./css/Movies.css"
import React, { Component } from 'react'

export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
            mname : '',
            mdata :[],
            click : false
        }
       this.sendreq = this.sendreq.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
    async sendreq(){
      let movie_data = []
      let mname = this.state.mname
      let responce = await axios.get(`http://www.omdbapi.com/?t=${mname}&apikey=21263809`)
      console.log(responce.data)
      movie_data.push(responce.data)
      this.setState({mdata : responce.data, click : true})
    }
    
    handleChange(e) {
      this.setState({mname : e.target.value})
    }
   
    render() {
        return (
          <div>
            <div className ={this.state.click? "Maindata_start":''}>
              <input 
              type='text' 
              onChange={this.handleChange} 
              placeholder='Enter your name' 
              name="mname"></input>
              <button onClick={this.sendreq}>Find</button>
              {this.state.click? <MoviesData state={this.state}></MoviesData> : '' }
              
            </div>
          </div>
        );
    }
}
