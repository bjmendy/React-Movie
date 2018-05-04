import React, { Component } from 'react';


class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      movie: ''
    }
  }
  updateMovie = (e) => {

    const movie = e.currentTarget.value;

    this.setState({movie: movie});

  }
  hanldeSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state.movie)
  }
  render(){

    console.log(this.state, ' state in createMovie', this.props)
  return (
    <form onSubmit={this.hanldeSubmit}>
      <label>
        Movie:
        <input type="text" name="movie" onChange={this.updateMovie}/>
      </label>
      <input type='Submit'/>
    </form>

    )
  }
}

export default CreateMovie;
