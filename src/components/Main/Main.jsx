import React, { Component } from 'react';
import { API_KEY } from '../constants';
import Movies from '../Movies/Movies';
import Pagination from '../Paginstion/Pagination';
import Sort from '../Sort/Sort';
import Loader from '../UI/Loader/Loader';
import './Main.scss';

class Main extends Component {
   state = {
      data: {
         movies: [],
         totalItems: 0,
         loading: true,
      },
      sorting: {
         search: 'matrix',
         filter: '',
         page: 1
      }
   }

   fetchMovies = (search, filter = '', page = 1) => {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${filter !== '' ? '&type=' + filter : ''}&page=${page}`)
         .then(response => response.json())
         .then(data => {
            if (data) {
               this.setState({
                  data: {
                     movies: data.Search,
                     totalItems: data.totalResults,
                     loading: false
                  }
               })
            }
         })
         .catch(err => {
            console.error(err);
            this.setState({
               data: {
                  loading: false
               }
            });
         })
   }

   componentDidMount() {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
         .then(response => response.json())
         .then(data => {
            if (data) {
               this.setState({
                  data: {
                     movies: data.Search,
                     totalItems: data.totalResults,
                     loading: false
                  }
               })
            }
         })
         .catch(err => {
            console.error(err);
            this.setState({
               data: {
                  loading: false
               }
            });
         })
   }

   handleSearch = e => {
      this.setState({
         sorting: {
            search: e.target.value,
            filter: this.state.sorting.filter,
            page: 1
         }
      })
   }

   handlePressToApply = e => {
      if (e.key === 'Enter') {
         this.fetchMovies(this.state.sorting.search, this.state.sorting.filter, this.state.sorting.page)
      }
   }

   handleFilter = e => {
      this.setState(() => ({
         sorting: {
            search: this.state.sorting.search,
            filter: e.target.value,
            page: 1
         }
      }), () => {
         this.fetchMovies(this.state.sorting.search, this.state.sorting.filter, this.state.sorting.page)
      })
   }

   handlePagination = e => {
      let number = null;
      typeof e == 'object' ? number = e.target.dataset.page : number = e
      this.setState(() => ({
         sorting: {
            search: this.state.sorting.search,
            filter: this.state.sorting.filter,
            page: number
         }
      }), () => {
         this.fetchMovies(this.state.sorting.search, this.state.sorting.filter, this.state.sorting.page)
      })
   }

   render() {
      const { movies, totalItems, loading } = this.state.data;
      const { search, filter, page } = this.state.sorting
      return (
         <>
            <Sort
               searchMovies={this.handleSearch}
               filterMovies={this.handleFilter}
               pressToApply={this.handlePressToApply}
               filter={filter}
               search={search}
            />
            {
               loading ? <Loader /> : <Movies movies={movies} />
            }
            {
               movies && totalItems > 10 ? <Pagination paginstionMovies={this.handlePagination} activePage={page} items={totalItems} /> : null
            }
         </>
      );
   }

}

export default Main;