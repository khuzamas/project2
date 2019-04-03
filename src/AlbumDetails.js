import React, { Component } from 'react'

export default class AlbumDetails extends Component {
  render() {
    return (
      <div className="album-details">
        <div className="float-left">
            <img src={this.props.album.cover_big} alt=""/>
        </div>
        <div className="float-right">
        <h2 className="title">{this.props.album.title}</h2>
        <br></br>
            <iframe scrolling="no" frameBorder="0" allowtransparency="true" 
        src={"https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id="+this.props.album.id+"&app_id=340402"}
        width="700" height="350">Songs</iframe>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}
