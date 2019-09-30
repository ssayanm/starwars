import React, { Component } from 'react';
import CardList from '../components/CardList';
//import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// const urls = [
//   'https://swapi.co/api/people',
//   'https://swapi.co/api/films',
//   'https://swapi.co/api/species'
// ]


class App extends Component {
  constructor(){
    super();
    this.state = {
        people: [],
        films:[],
        data:[],
        species:[],
        searchfield:''
    }
  }

// componentDidMount() {
//     async function asyncData() {
//     const [people, films, species] = await Promise.all(urls.map(async function(url) {
//           const response = await fetch(url);
//           return response.json();
//       }));
//     return [people.results, films.results, species.results];
//   }
//     const result = asyncData();
//     result.then(data => this.setState({people: data[0], films: data[1], species: data[1]}));
//  } 

componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(response => response.json())
      .then(people => this.setState({ data: people.results }))   
    }

  render(){  
    const { people, films, species, data } = this.state;
    return (
        <div className="App tc">
          <h1 className="f1">Star Wars Api</h1>
          {/*<SearchBox searchChange={this.onSearchChange}/>*/}
          <Scroll>
            <ErrorBoundary>
              <CardList data={data} people={people} films={films} species={species}/>
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
  }
}

export default App;
