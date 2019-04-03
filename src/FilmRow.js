import React, { Component } from 'react'
import Film from './Film';

export default class FilmRow extends Component {
  render() {
    
    const filmsInRow= this.props.row.map((film, index) => {
      if(film!==undefined)
        return <Film film={film} key={index} detailsHandle={this.props.detailsHandle}/>
    })

    return (
      <div className= "row">
        {filmsInRow}
      </div>
    )
  }
}
