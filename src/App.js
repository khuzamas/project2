import React, { Component } from 'react';
import './App.css';
import List from './List';
import TMDB from './Movies';
// import Film from './Film';
import FilmRow from './FilmRow';
import FilmDetails from './FilmDetails';

class App extends Component {

  constructor (props){
    super(props)
      this.state= {
        films: [],
        page: 'All Movies',
        details: []
    }
  }

  handleFilterClick= (page) => {

    const filmsList= TMDB.films;
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
  
      this.setState({films: allFilms})

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
          // console.log(row);
          
          return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
        }
      })
      
      this.setState({films: sorting})

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
          // console.log(row);
          
          return <FilmRow row={row} key={index} detailsHandle={this.handleDetailsClick}/>
        }
      })
      
      this.setState({films: sorting})
      
    }

    this.setState({page: page, details: []})
  }

  handleDetailsClick= (film) => {
      this.setState({page: 'details'})

      const filmDetails= <FilmDetails film={film}/>
      this.setState({details: filmDetails})
  }


  render() {
    const filmList= this.state.films;
    const allChange= (this.state.page) === 'All Movies' ? ' is-active' : ' inactive';
    const azChange= (this.state.page) === 'A-Z' ? ' is-active' : ' inactive';
    const dateChange= (this.state.page) === 'Release Date' ? ' is-active' : ' inactive';

    const filmDetails= this.state.details;
    // console.log(this.state.films);
    
    return (
      <div className="App">
        <div className="header">Disney Hub</div>
        <div className="categories">
          <div className="float-left">          
            <p>Movies</p>
            <p>Songs</p>
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
