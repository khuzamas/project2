import React, { Component } from 'react'

export default class FilterAlbum extends Component {
    constructor(props) {
        super(props)
        this.state= {
    
        }
      }
      render() {
        // console.log(this.props.filmObj.title);
        // console.log(this.props.film);
        
        return (
        <div className="album" onClick={() => this.props.handler(this.props.album)}>
            <img src={this.props.album.cover_medium} alt=""/>
            <p>{this.props.album.title}</p>
          </div>
        )
      }
}
