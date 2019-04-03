import React, { Component } from 'react'
import Albums from './Albums';

export default class AlbumRow extends Component {
  render() {
    const filmsInRow= this.props.row.map((id, index) => {
          return <Albums id={id} key={index} handler={this.props.handler}/>
      })
  
      return (
        <div className= "album-row">
          {filmsInRow}
        </div>
      )
  }
}
