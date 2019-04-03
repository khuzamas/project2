import React, { Component } from 'react'

export default class Albums extends Component {
    state= {
        title: "",
        cover: "",
        album: {}
    }

    componentDidMount() {
        console.log('in album');
        
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${this.props.id}`).then(response => {
            response.json().then(data => {
                this.setState({title: data.title, cover: data.cover_medium, album:data})
            })
        }).catch(err => {
            console.log(err);
        })
    }



  render() {

    return (
      <div className="album" onClick={() => this.props.handler(this.state.album)}>
        <img src={this.state.cover} alt=""/>
        <p>{this.state.title}</p>
      </div>
    )
  }
}
