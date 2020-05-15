import React, { Component } from 'react';

import SearchBar from './componets/SearchBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import unsplash from './componets/unsplash';
import ImageList from './componets/ImageList'


class App extends Component{

  state = { images: [] };

  onSearchSubmit = async (term)=> {
  
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
    
    params:{query: term },

    });
   this.setState({ images: response.data.results });
  }

  render(){
  return (
    <div className="App text-center">
       
       <SearchBar onSubmit={this.onSearchSubmit}/>
       <hr></hr>
       <ImageList images={this.state.images}/>
    </div>
  );
}}

export default App;
