import React from 'react';
import Data from '../data/Data';
import { Link } from 'react-router-dom';
const Breadcumb = () => (
  <>
    {Data.map((Data, key) => (
      <nav key={Data.id} aria-label="breadcrumb col-12">
        <ol className="breadcrumb border-bottom">
          <li className="breadcrumb-item bg-dark p-3">
            <Link className="text-light" to={Data.menu1url}>
              {Data.menu1}
            </Link>
          </li>
          <li className="breadcrumb-item bg-dark p-3">
            <Link className="text-light" to={Data.menu2url}>
              {Data.menu2}
            </Link>
          </li>
          <li className="breadcrumb-item bg-dark p-3">
            <a className="text-light" href={Data.menu3url}>
              {Data.menu3}
            </a>
          </li>
        </ol>
      </nav>
    ))}
  </>
);

export default Breadcumb;
