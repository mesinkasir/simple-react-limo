import React from 'react';
import Data from './data/Creativitas';
const Nav = () => (
  <>
    {Data.map((Data, key) => (
      <nav className="navbar fixed-top justify-content-end">
        <a className="nav-link btn btn-dark text-white" href={Data.link}>
          {Data.create}
        </a>
      </nav>
    ))}
  </>
);

export default Nav;
