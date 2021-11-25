import React from 'react';
import './Filter.scss';

const Filter = ({ filter, filterMovies }) => {
   return (
      <div className="filters col s12">
         <div className="filters-title">Filters:</div>
         <div className="filters-item">
            <label>
               <input
                  className="with-gap"
                  name="filters"
                  type="radio"
                  defaultChecked={filter === ''}
                  value=""
                  onChange={filterMovies}
               />
               <span>All</span>
            </label>
         </div>
         <div className="filters-item">
            <label>
               <input
                  className="with-gap"
                  name="filters"
                  type="radio"
                  defaultChecked={filter === 'movies'}
                  value="movies"
                  onChange={filterMovies}
               />
               <span>Movies</span>
            </label>
         </div>
         <div className="filters-item">
            <label>
               <input
                  className="with-gap"
                  name="filters"
                  type="radio"
                  defaultChecked={filter === 'series'}
                  value="series"
                  onChange={filterMovies}
               />
               <span>Series</span>
            </label>
         </div>
      </div>
   );


}

export default Filter;