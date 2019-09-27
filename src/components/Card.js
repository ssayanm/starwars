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
    // const filmsArray = [];
   

    // const fetchFilms = this.props.films.map((filmUrl, i) => { fetch(filmUrl) 
    // 	.then(response => response.json())
    // 	.then(data => {
    // 		return filmsArray.push(data.title)
    // 		// filmsArray.push(`${data.episode_id} - ${data.title}`)
    // 		// filmsArray.sort();
    // 	})
    // })
     

    // Promise.all(fetchFilms)
    // 	.then(promisesArray => {this.setState({films: filmsArray}) 
    // 		console.log(filmsArray);})
    // 	.catch(err => console.log(err))



    // fetch(this.props.films)
    // 	.then(response => response.json())
    // 	.then(data => this.setState({films: data.title}))

 //    Promise.all(filmsArray.map(url => {
	// return fetch(url).then(response => response.json)
	// 	})).then(data => {
	// 		this.setState({films:data.title})
	// 	}).catch (error => console.log('error'));
  	// }
}
  render(){ 
  	const { species, films, data } = this.state;
  	return(
  		 <div className="bg-yellow tc dib br1 pa1 ma4 grow bw1 shadow-1 w-25">
	    	<div className="pa2">
	      		<h2>{this.props.name}</h2>
	      		<h4>{species}</h4>
	      		<ul className="ul-style">
              		{this.props.films.map((film, i) => (
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

//const Card = ({ name, url, species, films }) => {
	

// 	return (
	   

//   );
// }

export default Card;


