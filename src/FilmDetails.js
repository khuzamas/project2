import React, { Component } from 'react'
import Youtube from './Youtube';
import Spotify from './Spotify';
import List from './List';
import { Url } from 'url';

export default class FilmDetails extends Component {
  state= {
    info: [],
    trailer: [],
    album: [],
    page: ''
  }



  handleInfoClick= () => {
    const result= <div className="float-right">        
        <div className="date">Release Date:</div> <div>{this.props.film.release_date}</div>
        <br></br>
        <div className="overview">Overview:</div> <div>{this.props.film.overview}</div>
        </div>

    this.setState({page: 'info', info: result})
  }

  handleTrailerClick= () => {
    const result= <div className="video">
          Watch Trailer Below
          <br></br>
            <Youtube filmTitle={this.props.film.title}/>
        </div>

    this.setState({page: 'trailer', trailer: result});
  }

  handleAlbumClick= () => {
    const result= <div className="Album">
        Listen to Album tracks
        <br></br>
        <Spotify filmTitle={this.props.film.title}/>
      </div>

    this.setState({page: 'album', album: result})
  }
  render() {

      var image= "https://image.tmdb.org/t/p/w500/"+this.props.film.backdrop_path;
      const info= this.state.info;
      const trailer= this.state.trailer;
      const album= this.state.album;
      const infoChange= (this.state.page) === 'info' ? ' is-active' : ' inactive';
      const trailerChange= (this.state.page) === 'trailer' ? ' is-active' : ' inactive';
      const albumChange= (this.state.page) === 'album' ? ' is-active' : ' inactive';

    return (
      <div className="detailsCard">
        <div className="detailsheader" style={{backgroundImage: `url(${image})`}}>
        {this.props.film.title}
        </div>
        {/* <div className="filters">
          <List filter= "All" handler={this.props.detailsHandler}/>
          <List filter= "A-Z" handler={this.props.detailsHandler}/>
          <List filter= "Release Date" handler={this.props.detailsHandler}/>
        </div> */}
        <div className="details-options">
          <div filter= "Info" onClick={() => this.handleInfoClick()}>Info</div>
          <div filter= "Trailer" onClick={() => this.handleTrailerClick()}>Trailer</div>
          <div filter= "Album" onClick={() => this.handleAlbumClick()}>Albums</div>
          <div className="Add-fav" onClick={() => this.props.handler(this.props.film)}>
            <img src="https://cdn1.iconfinder.com/data/icons/web-page-and-iternet/90/Web_page_and_internet_icons-06-512.png" alt=""/>
          </div>
        </div>
        
        <div className={"info"+infoChange}>
        {info}
        </div>
        <div className={"trailer"+trailerChange}>
        {trailer}
        </div>
        <div className={"deatilsalbum"+albumChange}>
        {album}
        </div>

      </div>
    )
  }
}
