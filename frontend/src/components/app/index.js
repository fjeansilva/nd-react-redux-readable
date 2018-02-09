import React from 'react';
import Header from '../header';
import MenuActions from '../header/MenuActions';
import NavContainer from '../nav/NavContainer';
import Post from '../post';
import Footer from '../footer';

const App = () => (
  <div className="wrapper">
    <Header />
    <MenuActions />
    <NavContainer />
    <Post />
    <Footer />
  </div>
);

export default App;
