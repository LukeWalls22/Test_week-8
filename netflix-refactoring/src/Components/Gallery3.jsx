import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';

let url = "http://www.omdbapi.com/?apikey=e4b55854&s=avengers"

export default class Gallery3 extends Component {

    state = {
        movies: [],
        isLoading: true
    }

    async componentDidMount () {
        await fetch (url)
        .then(response => response.json())
        .then(json =>
            setTimeout(() => {
                this.setState({movies: json.Search, isLoading: false})
            },1500))
        .catch(err => console.error(err))
    }


  render() {

    return (
      <>
      <h4 className="text-start">Trending Now</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {this.state.isLoading && 
        <>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        <div className="col mb-2 px-1">
        <Spinner animation="border" variant="danger" />
        </div>
        </>
        }
        {this.state.movies.slice(0,6).map(i => (
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