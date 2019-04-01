import React, { Component } from 'react'

export default class Film extends Component {

  constructor(props) {
    super(props)
    this.state= {

    }
  }
  render() {
    // console.log(this.props.filmObj.title);
    
    return (
      <div className="film" onClick={() => this.props.detailsHandle(this.props.film)}>
        <img src={"https://image.tmdb.org/t/p/w200/"+this.props.film.poster_path} alt=""/>
        <p>{this.props.film.title}</p>
      </div>
    )
  }
}
