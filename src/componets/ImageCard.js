import React, { Component } from 'react';


class ImageCard extends Component {
    constructor (props){
        super(props);

        this.imageRef = React.createRef();
    }

    
    render(){
        const {description,urls} = this.props.image;
        return (
           
       
          <div className="card-group">
          <div className="card">
          <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}/>
            </div>
          </div>
         
          
  
        );
    }

}

export default ImageCard;