import React from 'react';
import Filter from '../Filter/Filter';
import './Sort.scss';

const Sort = ({ searchMovies, filterMovies, pressToApply, search, filter }) => {
   return (
      <div className="row">
         <div className="col s12">
            <div className="input-field">
               <input
                  id="email_inline"
                  type="search"
                  className="validate"
                  placeholder="Search"
                  value={search}
                  onChange={searchMovies}
                  onKeyPress={pressToApply}
               />
            </div>
            <Filter filterMovies={filterMovies} filter={filter} />
         </div>
      </div>
   );
}

export default Sort;