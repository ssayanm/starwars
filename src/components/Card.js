import React, { Component } from 'react';
	

class Card extends Component {
  constructor(){
    super();
    this.state = {
        films:[],
        species:[]
    }
  }
  
  componentDidMount() {
  	//fetching species
    fetch(this.props.species)
      .then(response => response.json())
      .then(species => this.setState({ species: species.name }))

    //films
    const filmsArray = [];
    const fetchFilms = this.props.films.map((filmUrl, i) => { 
      fetch(filmUrl) 
    	.then(response => response.json())
    	.then(data => {filmsArray.push(data.title)
      this.setState({films: filmsArray})}
    	)
    })
}
  render(){ 
  	const { species, films } = this.state;
    const { name } = this.props;
  	return(
  		 <div className="bg-yellow tc dib br1 pa1 ma4 grow bw1 shadow-1 w-25">
	    	<div className="pa2">
	      		<h2>{name}</h2>
	      		<h4>{species}</h4>
	      		<ul className="ul-style">
              		{films.map((film, i) => (
	                <li key={i}>
	   					{film}
	                </li>
              		))}
           		 </ul>
	      	</div>
      </div>
  	);
  } 
}  


export default Card;


