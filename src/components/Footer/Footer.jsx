import React from 'react';
import './Footer.scss';

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear();
   return (
      <footer className="page-footer blue-grey darken-2">
         <div className="container">
            <div className="row">
               <div className="col l6 s12">
                  <h5 className="white-text">Film Review</h5>
                  <p className="grey-text text-lighten-4">All our Movie Reviews, in one place.</p>
               </div>
            </div>
         </div>
         <div className="footer-copyright">
            <div className="container">
               © {year} Copyright Text
            </div>
         </div>
      </footer>
   );
}

export default Footer;