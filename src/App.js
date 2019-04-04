import React, { Component } from 'react';
import './App.css';
import List from './List';
import FilmRow from './FilmRow';
import FilmDetails from './FilmDetails';
import TMDB from './Movies'
import AlbumRow from './AlbumRow';
import AlbumDetails from './AlbumDetails';
import Albums from './Albums';
import FilterRow from './FilterRow';
import Film from './Film';
import FilterAlbum from './FilterAlbum';
import { all } from 'q';

class App extends Component {

  constructor (props){
    super(props)
      this.state= {
        films: [],
        filteredFilms: [],
        page: '',
        details: [],
        songs: [],
        albums: [],
        category: '',
        filteredAlbums: [],
        favs: [],
        displayedFavs: []
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
      // console.log(filmsList);
      
      if (page==='All') {
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
      
      if(page==='All') {
        const allAlbums= this.state.albums.map((film, index) => {
          if (index%3===0) {
            var row=[];
            for (var j= index; j < index+3; j++) {
              row.push(this.state.albums[j]);
            }
            return <FilterRow row={row} key={index} handler={this.handleAlbumClick}/>
          }
        })

        this.setState({filteredFilms: allAlbums})

      } else if (page==='A-Z') {

        console.log('in az');
        console.log(this.state.albums);
        
        const allAlbums= this.state.albums.map(album => {
          return album.title;
        });
        allAlbums.sort()
        
        var sortedAlbums=[];

        for (var i=0; i < allAlbums.length; i++) {
          for (var j=0; j < this.state.albums.length; j++) {
            if (allAlbums[i]===this.state.albums[j].title) {
              sortedAlbums.push(this.state.albums[j]);
            }
          }
          
        }

        const sorting= sortedAlbums.map((album, index) => {
          if (index%3===0) {
            var row=[];
            for (var j= index; j < index+3; j++) {
              row.push(sortedAlbums[j]);
            }
            return <FilterRow row={row} key={index} handler={this.handleAlbumClick}/>
          }
        })
        
        this.setState({filteredFilms: sorting})

      } else if (page==='Release Date') {

        const allAlbums= this.state.albums.map(album => {
          return album.release_date;
        });

        allAlbums.sort()

        var sortedAlbums=[];

        for (var i=0; i < allAlbums.length; i++) {
          for (var j=0; j < this.state.albums.length; j++) {
            if (allAlbums[i]===this.state.albums[j].release_date) {
              sortedAlbums.push(this.state.albums[j]);
            }
          }
          
        }

        const sorting= sortedAlbums.map((album, index) => {
          if (index%3===0) {
            var row=[];
            for (var j= index; j < index+3; j++) {
              row.push(sortedAlbums[j]);
            }
            return <FilterRow row={row} key={index} handler={this.handleAlbumClick}/>
          }
        })
        
        this.setState({filteredFilms: sorting})
      }
    }

    this.setState({page: page, details: []})
  }

  handleDetailsClick= (film) => {
    // console.log('in film details');
    
    this.setState({category: 'movies', page: 'details'})
    this.setState({details: []})
    const filmDetails= <FilmDetails film={film} handler={this.addToFav} detailsHandler={this.handleFilterClick}/>
    this.setState({details: filmDetails})
  }

  handleAlbumClick= (album) => {

    //album is album object
    this.setState({category: 'songs', page: 'details'})
    this.setState({details: []})
    const albumDetails= <AlbumDetails album={album} handler={this.addToFav}/>
    this.setState({details: albumDetails})
  }

  getFilms= () => {    
    const url= 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/list/108712?api_key=47e2a8458de32a33b1c2de69766fb6f2&language=en-US';
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

    this.setState({category: 'movies', page: ''})    
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

    this.setState({category: 'songs', page: ''})   
  }

  addToFav= (film) => {    
    var curr= {...this.state};

    if (this.state.favs.includes(film)) {
      var index= curr.favs.indexOf(film)
      curr.favs.splice(index, 1);
    } else {
      curr.favs.push(film)
    }
    
    this.setState(curr)
    // console.log(this.state);
    
  }

  componentDidMount() {
    var songsList= []

    TMDB.forEach(id => {
      fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`).then(response => {
          response.json().then(data => {
              songsList.push(data);
              this.setState({albums: songsList});
          })
      })
    })
  }

  showFavorites= () => {
    this.setState({filteredFilms: [], category: 'favs'})
    if (this.state.favs.length===0) {
      const allFavs= [<div style={{color: "white"}}>no favorites added yet</div>]
      this.setState({displayedFavs: allFavs})
    } else {
      const allFavs= this.state.favs.map( item => {

        //if film
        if(item.type==="album") {
            return <div className="album" onClick={() => this.handleAlbumClick(item)}>
            <img src={item.cover_medium} alt="" />
            <p>{item.title}</p>
            <p>________________________</p>
            <br></br>
          </div>
        
        } else {
          return <div className="film" onClick={() => this.handleDetailsClick(item)}>
              <img src={"https://image.tmdb.org/t/p/w200/"+item.poster_path} alt=""/>
              <p>{item.title}</p>
              <p>________________________</p>
              <br></br>
            </div>
        }
      })
      this.setState({displayedFavs: allFavs})
    }



    // this.setState({displayedFavs: allFavs})
  }

  showHome= () => {
    this.setState({category: '', page: '', details: []})
  }

  render() {
    
    const allChange= (this.state.page) === 'All' ? ' is-active' : ' inactive';
    const azChange= (this.state.page) === 'A-Z' ? ' is-active' : ' inactive';
    const dateChange= (this.state.page) === 'Release Date' ? ' is-active' : ' inactive';
    const homeChange= ((this.state.category) === 'movies') && (this.state.page) === '' ? ' is-active' : ' inactive';
    const songChange= ((this.state.category) === 'songs') && (this.state.page) === '' ? ' is-active' : ' inactive';
    const favChange= (this.state.category) === 'favs' ?  ' is-active' : ' inactive';
    // const filtersChange= ((this.state.category) === 'favs') ? ' inactive' : '';
    const filtersChange= ((this.state.page) === 'details') ? ' inactive' : '';
    const navChange= ((this.state.page) !== 'details') ? ' inactive' : '';
    const mainChange= (this.state.category) === 'favs'? ' inactive' : ' is-active';
    const test= (this.state.category) === '' || ((this.state.page) === 'details') ? ' inactive' : '';
    const filmDetails= this.state.details;
    const filmList= this.state.filteredFilms;
    const favList= this.state.displayedFavs;
    // console.log(favList);
    
    return (
      
      <div className="App">
        <div className={"main"+filtersChange}>
          <div className="header">Disney Hub</div>
          <div className="categories">
            <div className="float-left">          
              <p className="options" onClick= {() => this.getFilms()}>Movies</p>
              <p className="options" onClick= {() => this.getSongs()}>Songs</p>
              {/* <p>To-watch</p> */}
              {/* className="options" onClick={() => this.showFavorites()} */}
              <p className="options" onClick={() => this.showFavorites()}>Favs</p>
            </div>
          </div>
        </div>

        <div className={"navbar"+navChange}>
          <img src="https://cdn2.iconfinder.com/data/icons/basic-4/512/home-512.png" alt="" onClick={() => this.showHome()}/>
          <img src="https://i.pinimg.com/originals/3d/65/db/3d65dbcecc72931a3b7a45a70d291892.png" alt="" onClick={() => this.showFavorites()}/>
        </div>
        <div className={"filters"+test}>
          <List filter= "All" handler={this.handleFilterClick}/>
          <List filter= "A-Z" handler={this.handleFilterClick}/>
          <List filter= "Release Date" handler={this.handleFilterClick}/>
        </div>
        <div className={homeChange}>{this.state.films}</div>
        <div className={songChange}>{this.state.songs}</div>
        <div className={"list"+allChange+azChange+dateChange}>
          {filmList} 
        </div>
        <div className={"favs"+favChange}>
          {favList}
        </div>
        <div className={"details"+mainChange}>
          {filmDetails}
        </div>
      </div>
    );
  }
}

export default App;
