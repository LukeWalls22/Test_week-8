import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';

let url = "http://www.omdbapi.com/?apikey=e4b55854&s=star%20wars"

export default class Gallery1 extends Component {

    state = {
        movies: []
    }

    componentDidMount () {
        fetch ("http://www.omdbapi.com/?apikey=e4b55854&s=star%20wars")
        .then(response => response.json())
        .then(json => this.setState({movies: json.Search}))
        .catch(err => console.error(err))
    }


  render() {

    return (
      <>
      <h4 className="text-start">Trending Now</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {this.state.movies.slice(3,9).map(i => (
          <div className="col mb-2 px-1"> 
            <img className="img-fluid" src={i.Poster} alt="movie picture" /> 
          </div>
        ))
        }
      </Row>
      </>
    )
  }
}