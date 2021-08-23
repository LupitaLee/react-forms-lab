import React from "react";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }


  handleChange =(e)=>{
    // console.log(e.target.value)
    this.setState({
      message:e.target.value
    })
  }

  render() {
  console.log(this.props)
  let charNumber = this.props.maxChars - this.state.message.length
  console.log(charNumber)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message} 
        onChange={this.handleChange}/>
        {charNumber}
       
      </div>
    );
  }
}

export default TwitterMessage;


