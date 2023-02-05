import { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <>
        <img
          key={this.props.objectOfMovies.imbdId}
          src={this.props.objectOfMovies.Poster}
          alt="movie title"
          className="h-50 w-50"
        />
      </>
    );
  }
}

export default Movie;