import React, { Component } from 'react';
import './card.css';

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
    const fetchPromises = this.props.films.map((filmUrl, i) => { 
      return fetch(filmUrl) 
        .then(response => response.json()
        )
    })

    Promise.all(fetchPromises).then(results => {
      this.setState({films: results.map(film => { return [film.episode_id, ' ' ,'-',' ',film.title] })})
    });

}
  render(){ 
  	const { species, films } = this.state;
    const { name } = this.props;
  	return(
  		 <div className="card bg-yellow tc dib br1 pa1 ma4 grow bw1 shadow-1 w-25 br4">
	    	<div className="pa2">
	      		<h2>{name} ({species})</h2>
            <hr/>

            <h4>Featured Movies</h4>
	      		<ul className="ul-style">
              		{films.map((film,name, i) => (
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


