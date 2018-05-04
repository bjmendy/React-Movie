import React, { Component} from 'react';
import './style.css';

class Modal extends Component {
  constructor(){
    super();

    this.state = {
      inputVal: ''
    }


  }

  handleInput = (e) => {
    this.setState({inputVal: e.currentTarget.value})
  }
  componentWillReceiveProps(nextProps){
    // THis lifecycle Hook will allow you to set State,
    // This is often used to optimize react apps, if you need extra speed

    this.setState({inputVal: nextProps.editedMovie})

  }
  render(){
    console.log(this.state, this.props, 'state and props')
    const cssClass = this.props.showEdit ? 'Modal-Open' : 'Modal-Closed';
    return (
      <div className={cssClass}>
        <input type="text" value={this.state.inputVal} onChange={this.handleInput}/>
        <button onClick={this.props.closeEdit.bind(null, this.state.inputVal)} >Done</button>
      </div>
      )
  }


}

export default Modal;
