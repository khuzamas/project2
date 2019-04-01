import React, { Component } from 'react'

export default class Youtube extends Component {
//https://www.googleapis.com/youtube/v3/search?part=frozen%2Ctrailer&maxResults=1&q=skateboarding+dog+&type=video&key=AIzaSyCrd3PrjkScRG1BJ_a4G6Qyy0U43ngfQpk
    
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=frozen+trailer&key={YOUR_API_KEY}
  
state= {
    link: ''
}
render() {
      const key= 'AIzaSyCrd3PrjkScRG1BJ_a4G6Qyy0U43ngfQpk';
      const url= `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=${this.props.filmTitle}+trailer&key=${key}`

      var result= '';
    
      fetch(url).then(response => {
        response.json().then(data => {
            // this.setState({current: data})
            result= data.items[0].id.videoId;
            this.setState({link: `https://www.youtube.com/embed/${result}`});
        })
      })  

    return (
      <div className="player">
        <iframe width="560" height="315" src={this.state.link} 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
      </div>
    )
  }
}
