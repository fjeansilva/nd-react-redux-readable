import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../header';
import Menu from '../menu';
import NavContainer from '../nav/NavContainer';
import PostContainer from '../post/PostContainer';
import Footer from '../footer';

const App = () => (
  <div className="wrapper">
    <Header />
    <Menu />
    <NavContainer />
    <Route exact path="/" component={PostContainer} />
    <Route
      exact
      path="/:category"
      render={() => (
        <h1>List posts of category</h1>
      )}
    />
    <Route
      exact
      path="/:category/:post_id"
      render={() => (
        <h1>Detalhes do post</h1>
      )}
    />
    <Footer />
  </div>
);

export default App;
