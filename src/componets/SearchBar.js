import React, { Component } from 'react';

class SearchBar extends Component {
    

 state = { term : ''}

   onFormSubmit = event =>{
       event.preventDefault();

       this.props.onSubmit(this.state.term);
   }



    render() {
        return (
            <div className='container text-center'>
                <h3>Image Search</h3>
                <form onSubmit={this.onFormSubmit}>
                    
                    <input type= 'text' 
                    value={this.state.term} 
                   
                    onChange={e => this.setState({term:e.target.value})}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;