import React, { Component } from 'react'
import Youtube from './Youtube';
import Spotify from './Spotify';

export default class FilmDetails extends Component {
  render() {
      // console.log('in details.js');
      var date= new Date (this.props.film.release_date);
      // console.log(date);
      
    return (
      <div className="detailsCard">
        <div className="float-left"> 
            <img className="poster" src={"https://image.tmdb.org/t/p/w500/"+this.props.film.backdrop_path} alt="" />
        </div>
        <div className="float-right">        
            <h2 className="title">{this.props.film.title}</h2>
            <br></br>
            <div className="date">Release Date: {this.props.film.release_date}</div>
            <br></br>
            <div className="overview">Overview: {this.props.film.overview}</div>
        </div>
        <div className="clear"></div>
        <div className="video">
          Watch Trailer Below
            {/* <Youtube filmTitle={this.props.film.title}/> */}
        </div>
        <div className="Album">
          Listen to Album tracks
          <Spotify filmTitle={this.props.film.title}/>
        </div>
        

      </div>
    )
  }
}
