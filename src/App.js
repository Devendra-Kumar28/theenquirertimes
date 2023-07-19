
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 9;


  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div style= {{backgroundImage: "linear-gradient( to right, #9FE7F5,#429EBD)"}}>
       
        <Navbar />

        <LoadingBar
        color='#ff0000'
        progress = {this.state.progress}
        height = {3}
        loaderSpeed= {50}
        
        
      />
      
        <Routes>


          <Route exact path="/general" element ={< News setProgress = {this.setProgress}  key="general" pageSize = {this.pageSize} country = "in" category="general" />} />
          <Route  path="/business" element ={< News setProgress = {this.setProgress}  key="business" pageSize = {this.pageSize} country = "in" category="business" />} />
          <Route  path="/entertainment" element ={< News setProgress = {this.setProgress}  key="entertainment" pageSize = {this.pageSize} country = "in" category="entertainment" />} />
          <Route  path="/health"  element ={< News setProgress = {this.setProgress}  key="health" pageSize = {this.pageSize} country = "in" category="health" />} />
          <Route  path="/science"   element ={< News setProgress = {this.setProgress}  key="science" pageSize = {this.pageSize} country = "in" category="science" />} />
          <Route  path="/sports"   element ={< News setProgress = {this.setProgress}  key="sports" pageSize = {this.pageSize} country = "in" category="sports" />} />
          <Route  path="/technology"   element ={< News setProgress = {this.setProgress}  key="technology" pageSize = {this.pageSize} country = "in" category="technology" />} />
        </Routes>
       

      </div>
      </Router>
    );
  }
}

