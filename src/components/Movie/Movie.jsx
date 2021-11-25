import React from 'react';
import { withRouter } from 'react-router';
import './Movie.scss';

const Movie = ({ imdbID, Poster, Title, Year, history }) => {
   return (
      <div className="card" onClick={() => history.push('/movies/' + Title.toLowerCase().replace(/\s/g, '-'), imdbID)}>
         <div className="card-image waves-effect waves-block waves-light">
            <img className="activator _img" alt={Title} src={Poster === 'N/A' ? 'https://via.placeholder.com/342x487?text=No+Image' : Poster} />
         </div>
         <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>Year: {Year}</p>
         </div>
      </div>
   );
}

export default withRouter(Movie);