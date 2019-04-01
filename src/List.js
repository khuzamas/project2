import React, { Component } from 'react'
// import TMDB from './Movies';
// import Film from './Film';

export default class List extends Component {

    //on clicking this> fetch all movies and call Component film with prop film
    // constructor (props){
    //     super(props)
    //     this.state= {
    //         films: []
    //     }
    // }

    // handleFilterClick= () => {
    //     const filmsList= TMDB.films;
    //     const allFilms= filmsList.map((film, index) => {
    //         return <Film filmObj={film} key={index}/>
    //     })

    //     this.setState({films: allFilms})
    // }

    render() {
        // const filmList= this.state.films;
        return (
        <div onClick= {() => this.props.handler(this.props.filter)}>
            <div className="filter">
                {this.props.filter}
            </div>
            
            {/* <div className="list">
               {filmList} 
            </div> */}
            
        </div>
        
        )
    }
}
