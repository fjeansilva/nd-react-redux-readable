import React from 'react';
import Header from '../header';
import MenuActions from '../header/MenuActions';
import Nav from '../nav';
import Post from '../post';
import Footer from '../footer';

const App = () => (
  <div className="wrapper">
    <Header />
    <MenuActions />
    <Nav />
    <Post />
    <Footer />
  </div>
);

export default App;
