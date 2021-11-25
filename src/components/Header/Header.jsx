import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../constants';
import './Header.scss';

const Header = () => {
   return (
      <>
         <header className="header" id="header">
            <nav className="blue-grey darken-2">
               <div className="nav-wrapper">
                  <NavLink
                     to="/"
                     exact
                     className="brand-logo"
                  >
                     <i className="large material-icons">movie_filter</i> Films
                  </NavLink>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                     {
                        menuItems.map(item => {
                           return (
                              <li key={item.id}>
                                 <NavLink
                                    to={item.path}
                                 >
                                    {item.label}
                                 </NavLink>
                              </li>
                           )
                        })
                     }
                  </ul>
               </div>
            </nav>
         </header>
      </>
   );
}

export default Header;