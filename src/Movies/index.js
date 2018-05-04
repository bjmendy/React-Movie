import React from 'react';


const Movies = ({movies, deleteMovie, editMovie}) => {

  // var a = {
  //   b: 'c',
  //   reuben: 'hungry'
  // }

  // const {d, rueeeee} = a
  // const b = [1, 3, 4]

  // const [one, two , three] = b

  const movieList = movies.map((movie, i ) => {
    return (
      <li key={i}>{movie}
        <button id={i} onClick={deleteMovie}>Delete</button>
        <button onClick={editMovie}>Edit</button>
    </li>)
  })

  return (
    <ul>
      {movieList}
    </ul>
    )

}






export default Movies;
