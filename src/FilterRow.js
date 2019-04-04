import React, { Component } from 'react'
import FilterAlbum from './FilterAlbum';

export default class FilterRow extends Component {
  render() {
    const albumsInRow= this.props.row.map((album, index) => {
        if(album!==undefined)
          return <FilterAlbum album={album} key={index} handler={this.props.handler}/>
      })
  
      return (
        <div className= "row">
          {albumsInRow}
        </div>
      )
  }
}
