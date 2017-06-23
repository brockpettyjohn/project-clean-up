import React, { Component } from 'react';
import AddMessage from './Message_Bar.jsx';
import SearchBar from './Search_Bar.jsx';

class MainMessageView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    this.createMessage = this.createMessage.bind( this );
  }
//creatMessage is being passed as prop into AddMessages which is later being used in the Message bar jsx
  createMessage( messageText ) {
    this.setState( { messages: [ { text: messageText, complete: false }, ...this.state.messages ] })
    console.log( this.state )
  }


  render() {

    const message = this.state.messages
        .filter( message => message )
       
       
    return (
      <div> 
          <SearchBar searchBar={this.searchBar}/>
          
                    <AddMessage createMessage={ this.createMessage } />
                    { message }
                
        
      </div>
    );
  }
}

export default MainMessageView;