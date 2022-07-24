import React from 'react';
import Data from '../data/Creativitas';
const Breadcumb = () => (
  <>
    {Data.map((Data, key) => (
      <div className="col-md-12 p-3">
        <div class="ratio ratio-16x9">
          <iframe src={Data.name} title={Data.title}></iframe>
        </div>
      </div>
    ))}
  </>
);

export default Breadcumb;
