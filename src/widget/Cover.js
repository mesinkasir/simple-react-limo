import React from 'react';
import Data from '../data/Data';
import Limo from '../cover/limousine.svg';
const Cover = () => (
  <div className="col-md-12 p-3">
    {Data.map((data) => (
      <img className="img-fluid" alt={data.title} src={Limo} />
    ))}
  </div>
);

export default Cover;
