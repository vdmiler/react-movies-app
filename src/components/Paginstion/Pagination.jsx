import React from 'react';
import './Pagination.scss';

const Pagination = ({ paginstionMovies, activePage, items }) => {
   const totalPages = Math.floor(items / 10);
   const pageNumbers = [];
   for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(i);
   }
   return (
      <ul className="pagination">
         <li className={`${activePage == (pageNumbers[0] + 1) ? 'disabled' : 'waves-effect'}`}>
            <a href="!#" onClick={e => { e.preventDefault(); paginstionMovies(pageNumbers[0] + 1); }}>
               <i className="material-icons">chevron_left</i>
            </a>
         </li>
         {
            pageNumbers.map(page => {
               return (
                  <li className={`${activePage == (page + 1) ? 'active blue-grey lighten-1' : 'waves-effect'}`} key={page}>
                     <a href="!#" data-page={page + 1} onClick={e => { e.preventDefault(); paginstionMovies(e); }}>{page + 1}</a>
                  </li>
               )
            })
         }
         <li className={`${activePage == pageNumbers.length ? 'disabled' : 'waves-effect'}`}>
            <a href="!#" onClick={e => { e.preventDefault(); paginstionMovies(pageNumbers.length); }}>
               <i className="material-icons">chevron_right</i>
            </a>
         </li>
      </ul>
   );
}

export default Pagination;