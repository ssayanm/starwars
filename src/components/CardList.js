import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
	const { data } = props;

	return (
	    <div className='CardContainer '>	    	
	    	{ data.map((user, i) => {
			return ( 
				<Card 
					key={user.url}
					url ={user.url}
					name={user.name} 
					species={user.species}
					films={user.films}
				/>
				);
			
			})
		}
	    </div>
  );
}

export default CardList;

