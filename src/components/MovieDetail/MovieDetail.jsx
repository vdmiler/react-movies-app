import React, { Component } from 'react';
import { API_KEY } from '../constants';
import Loader from '../UI/Loader/Loader';

class MovieDetail extends Component {
   state = {
      details: {},
      loading: true,
   }

   componentDidMount() {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.location.state}`)
         .then(response => response.json())
         .then(data => {
            if (data) {
               this.setState({
                  details: data,
                  loading: false,
               })
            }
         })
   }
   render() {
      const {
         Poster,
         Title,
         Year,
         Genre,
         Director,
         Actors,
         Released,
         imdbRating,
         Plot
      } = this.state.details;
      const { loading } = this.state;
      console.log(this.state.details)
      return (
         loading ? <Loader /> :
            <div className="container">
               <div className="row">
                  <div className="col s12 m5">
                     <div className="poster">
                        <img src={Poster === 'N/A' ? 'https://via.placeholder.com/342x487?text=No+Image' : Poster} alt={Title} className="poster__img _img" />
                     </div>
                  </div>
                  <div className="col s12 m7">
                     <div className="content">
                        <h5 className="content__title">
                           {Title}
                        </h5>
                        <hr />
                        <p className="content__year">
                           <strong>Year:</strong> {Year}
                        </p>
                        <p className="content__genre">
                           <strong>Genre:</strong> {Genre}
                        </p>
                        <p className="content__actors">
                           <strong>Actors:</strong> {Actors}
                        </p>
                        <p className="content__director">
                           <strong>Director:</strong> {Director}
                        </p>
                        <p className="content__released">
                           <strong>Released:</strong> {Released}
                        </p>
                        <p className="content__imdbRating">
                           <strong>IMDB Rating:</strong> {imdbRating}
                        </p>
                     </div>
                  </div>
                  <div className="col s12">
                     <p className="plot">
                        {Plot}
                     </p>
                  </div>
               </div>
            </div>
      );
   }
}

export default MovieDetail;