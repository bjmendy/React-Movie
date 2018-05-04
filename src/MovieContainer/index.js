import React, { Component } from 'react';
import Movies from '../Movies';
import CreateMovie from '../CreateMovie';
import Modal from '../EditModal';

class MovieContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: ['Forrest Gump', 'Dogma', 'Toy Story', 'Lion King'],
      showEdit: false,
      editedMovie: ''
    }
  }
  addMovie = (movie, e) => {
    e.preventDefault();

    console.log(movie, ' this is the movie');
    console.log(e.currentTarget.value, ' this is the currentTarget');
    console.log(e.target.value, ' this is e.target');

    this.setState({movies: [...this.state.movies, movie]});

  }
  deleteMovie = (e) => {

    const id = e.currentTarget.id;

    this.setState({movies: this.state.movies.filter((movie, i) => i != id)});
  }
  closeEdit = (movie) => {
    const index = this.state.movies.indexOf(this.state.editedMovie);

    const movies = this.state.movies;
    movies[index] = movie;

    this.setState({
      showEdit: false,
      movies: movies
    })

  }
  editMovie = (e) => {
    const id = e.currentTarget.previousSibling.id;
    console.log(id);

    this.setState({
      showEdit: true,
      editedMovie: this.state.movies[id]
    })


  }
  render(){
    return (
      <div>
        <span>Hi {this.props.username} </span>
        <Movies movies={this.state.movies} deleteMovie={this.deleteMovie} editMovie={this.editMovie}/>
        <CreateMovie addMovie={this.addMovie}/>
        <Modal showEdit={this.state.showEdit} editedMovie={this.state.editedMovie} closeEdit={this.closeEdit}/>
      </div>
      )
  }
}

export default MovieContainer;
