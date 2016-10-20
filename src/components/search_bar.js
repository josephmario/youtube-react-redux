//Componets in import like
//const Component = React.Component
import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends Component{
  constructor(props){
    super(props);
    //this.state = object
    this.state = { term: ''};
  }
  render(){
    return(
    <div>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
    </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  // onInputChange(event){
  //   //checking if onChange called or get the value of textbox
  //   console.log(event.target.input)
  // }
}

export default SearchBar;
