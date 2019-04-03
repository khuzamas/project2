import React, { Component } from 'react'

export default class Spotify extends Component {

    state= {
      id:0
    }

  render() {
    
    
    //https://api.deezer.com/search/album?q=moana
    //https://api.deezer.com/album/302127 >> data[0].id

    // console.log('in spotify');
    
    const url= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${(this.props.filmTitle).trim()}-original-soundtrack`;
    // console.log(url);
    
    var albumId= 0;
    fetch(url).then(response => {
      response.json().then(data => {
        if (data.data[0]!==undefined) {
          albumId= data.data[0].id;
          // console.log(data);
          
          fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`).then(response => {
            response.json().then(data => {
              // console.log(data.tracks.data);
              this.setState({id: albumId})
            })
          })
        }
        
      })    
    })


    return (
      <div className="tracks">
        <iframe scrolling="no" frameBorder="0" allowtransparency="true" 
        src={"https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id="+this.state.id+"&app_id=340402"}
        width="700" height="350"></iframe>
      </div>
    )
  }
}

