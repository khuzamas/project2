import React, { Component } from 'react';
import './App.css';
import List from './List';
import FilmRow from './FilmRow';
import FilmDetails from './FilmDetails';
import TMDB from './Movies'
import AlbumRow from './AlbumRow';
import AlbumDetails from './AlbumDetails';
import Albums from './Albums';

class App extends Component {

  constructor (props){
    super(props)
      this.state= {
        films: [],
        filteredFilms: [],
        page: '',
        details: [],
        songs: [],
        category: ''
    }
  }

  handleFilterClick= (page) => {

    if (this.state.category==='movies') {
      const filmsList=[];

      for (var x= 0; x < this.state.films.length; x+=3) {
        for (var r= 0; r < this.state.films[x].props.row.length; r++) {
          filmsList.push(this.state.films[x].props.row[r])
        }
      }
      console.log(filmsList);
      
      if (page==='All Movies') {
          const allFilms= filmsList.map((film, index) => {
                if (index%3===0) {
                  var row=[];
                  for (var j= index; j < index+3; j++) {
                    row.push(filmsList[j]);
                  }
                  return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
                }
          })

          this.setState({filteredFilms: allFilms})

      } else if(page==='A-Z') {
        const allFilms= filmsList.map(film => {
          return film.title;
        });
        allFilms.sort()

        var sortedFilms=[];

        for (var i=0; i < allFilms.length; i++) {
          for (var j=0; j < filmsList.length; j++) {
            if (allFilms[i]===filmsList[j].title) {
              sortedFilms.push(filmsList[j]);
            }
          }
          
        }

        const sorting= sortedFilms.map((film, index) => {
          if (index%3===0) {
            var row=[];
            for (var j= index; j < index+3; j++) {
              row.push(sortedFilms[j]);
            }
            return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
          }
        })
        
        this.setState({filteredFilms: sorting})

      } else if (page==='Release Date') {
        console.log('Release Date');

        const allFilms= filmsList.map(film => {
          return film.release_date;
        });
        allFilms.sort()

        var sortedFilms=[];

        for (var i=0; i < allFilms.length; i++) {
          for (var j=0; j < filmsList.length; j++) {
            if (allFilms[i]===filmsList[j].release_date) {
              sortedFilms.push(filmsList[j]);
            }
          }
          
        }

        const sorting= sortedFilms.map((film, index) => {
          if (index%3===0) {
            var row=[];
            for (var j= index; j < index+3; j++) {
              row.push(sortedFilms[j]);
            }
            return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
          }
        })
        
        this.setState({filteredFilms: sorting})
        
      }

    } else if (this.state.category==='songs') {

      var songsList= []
      TMDB.forEach(id => {
        
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`).then(response => {
            response.json().then(data => {
              // console.log(data);
              
                songsList.push(data);
            })
            console.log(songsList);
        })
      })

      
      
      // for (var x= 0; x < TMDB.length; x+=3) {
        
      // }
      // console.log(songsList);

    }

    this.setState({page: page, details: []})
  }

  handleDetailsClick= (film) => {
    this.setState({page: 'details'})
    this.setState({details: []})
    const filmDetails= <FilmDetails film={film}/>
    this.setState({details: filmDetails})
  }

  handleAlbumClick= (album) => {

    //album is album object
    this.setState({page: 'details'})
    this.setState({details: []})
    const albumDetails= <AlbumDetails album={album}/>
    this.setState({details: albumDetails})
  }

  getFilms= () => {

    const url= 'https://api.themoviedb.org/3/list/108712?api_key=47e2a8458de32a33b1c2de69766fb6f2&language=en-US';
    fetch(url).then(response => {
      response.json().then(data => {

        const allFilms= data.items.map((film, index) => {
              if (index%3===0) {
                var row=[];
                for (var j= index; j < index+3; j++) {
                  row.push(data.items[j]);
                }
                return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
              }
        })
        this.setState({films: allFilms})
      })    
    }) 

    this.setState({category: 'movies', details: [], page: ''})    
  }

  getSongs= () => {

    const albums= TMDB.map((id, index) => {
      if (index%3===0) {
        var row=[];
        for (var j= index; j < index+3; j++) {
          row.push(TMDB[j]);
        }
        return <AlbumRow row={row} key={index} handler={this.handleAlbumClick}/>
      }
    })

    this.setState({songs: albums})

    this.setState({category: 'songs', details: [], page: ''})   
  }

  render() {
    
    const allChange= (this.state.page) === 'All Movies' ? ' is-active' : ' inactive';
    const azChange= (this.state.page) === 'A-Z' ? ' is-active' : ' inactive';
    const dateChange= (this.state.page) === 'Release Date' ? ' is-active' : ' inactive';
    const homeChange= ((this.state.category) === 'movies') && (this.state.page) === ''? ' is-active' : ' inactive';
    const songChange= ((this.state.category) === 'songs') && (this.state.page) === ''? ' is-active' : ' inactive';
    const filmDetails= this.state.details;
    const filmList= this.state.filteredFilms;
    // console.log(this.state.songs);
    
    return (
      <div className="App">
        <div className="header">Disney Hub</div>
        <div className="categories">
          <div className="float-left">          
            <p onClick= {() => this.getFilms()}>Movies</p>
            <p onClick= {() => this.getSongs()}>Songs</p>
            <p>To-watch</p>
            <p>|</p>
            <p>Favs</p>
          </div>
          <div className="float-right">          
            <input></input>
          </div>
        </div>
        <div className="filters">
          <List filter= "All Movies" handler={this.handleFilterClick}/>
          <List filter= "A-Z" handler={this.handleFilterClick}/>
          <List filter= "Release Date" handler={this.handleFilterClick}/>
        </div>
        <div className={homeChange}>{this.state.films}</div>
        <div className={songChange}>{this.state.songs}</div>
        <div className={"list"+allChange+azChange+dateChange}>
          {filmList} 
        </div>
        <div className={"details"}>
          {filmDetails}
        </div>
      </div>
    );
  }
}

export default App;
