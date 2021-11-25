import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.scss';

const Movies = ({ movies }) => {
   return (
      <div className="list">
         {
            movies ? movies.map(item => {
               return (
                  <Movie key={item.imdbID} {...item} />
               )
            }) : <h4>Nothing found</h4>
         }
      </div>
   );
}

export default Movies;