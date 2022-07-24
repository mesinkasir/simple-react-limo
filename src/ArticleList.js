import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './widget/Cover';
const ArticleList = ({ articles }) => (
  <div className="row">
    <Cover />
    {articles.map((article, key) => (
      <div className="col-md-12 p-1" key={article.id}>
        <Link to={`/article/${article.name}`}>
          <div className="border row ms-3 me-3">
            <div className="col-md-4 p-3">
              <img
                className="img-fluid"
                alt="{article.title}"
                src={article.img}
              />
            </div>
            <section className="col-md-8 p-3 p-md-5">
              <h3>{article.title}</h3>
              <p>
                <a href={article.authorlink}>{article.author}</a> -
                {article.date}
              </p>
              <p>{article.content[0].substring(0, 180)}...</p>
            </section>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default ArticleList;
