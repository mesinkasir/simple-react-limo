import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import SEO from './widget/SeoHome';
import Breadcumb from './widget/Breadcumb';
import List from './List';
import Nav from './Nav';
import About from './About';
import Pro from './widget/Pro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './widget/Header';
import Top from './Top';
import './cute.css';
class App extends Component {
  render() {
    return (
      <Router>
        <SEO />
        <Top />
        <div className="container-fluid">
          <Nav />
          <div className="row">
            <Header />
            <div className="col-md-12 p-3">
              <Breadcumb />
              <Route path="/" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/about" component={About} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
            <Pro />
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
