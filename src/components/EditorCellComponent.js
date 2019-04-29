import React, { Component } from 'react';


export default class EditorCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formattedText: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({formattedText: event.target.value});
  }

  render() {
    return(
      <input type="textarea" 
             value={this.state.formattedText}
             onChange={this.handleTextChange}
      />
    );

  }

}
