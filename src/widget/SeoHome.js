import React from 'react';
import { Helmet } from 'react-helmet';
let title = 'Limousine Website';
let description =
  'New limousine and car service website template free download source code full built with react.';
const SEO = () => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta content={description} name="description" />
    <meta content={title} property="og:title" />
    <meta content={description} property="og:description" />
    <meta
      content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
      property="og:image"
    />
    <meta content="Axcora" property="og:author" />
    <meta content={title} name="facebook:title" />
    <meta content="website" property="og:type" />
    <meta
      content="https://www.facebook.com/mesinkasircomplete"
      property="facebook:author"
    />
    <meta
      content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
      name="facebook:image"
    />
    <meta content="Cuteblog for react" property="og:site_name" />
    <meta content={description} property="facebook:description" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="https://twitter.com/hockeycomp" property="twitter:author" />

    <link
      href="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
      rel="icon"
      type="image/x-icon"
    />
    <meta content="@hockeycomp" name="twitter:site" />
    <meta
      content="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
      name="twitter:image"
    />
    <meta content={description} name="twitter:description" />
    <link
      rel="apple-touch-icon"
      href="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
    />
    <meta content={title} name="twitter:title" />
  </Helmet>
);

export default SEO;
