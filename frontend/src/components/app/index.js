import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Nav from '../nav';
import PostList from '../post/list';
import PostNew from '../post/new';
import PostDetails from '../post/details';
import { getAll } from '../utils/ReadableAPI';


class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    getAll()
    .then(data => {
      const { categories } = data;
      if (categories) this.setState({ categories });
    })
    .catch(err => console.log(err));
  }
  
  render(){
    const { categories } = this.state;

    return (
      <div>
        <Header />
        <Nav items={categories} />
        <Route exact path="/" component={PostList} />
        <Route path="/posts/category/:category" component={PostList} />
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id/details" component={PostDetails} />
        <Route path="/posts/:id/edit" render={() => (<h1>Editar</h1>)} />
        <Route path="/posts/:id/delete" render={() => (<h1>Deletar</h1>)} />
        <Footer />
      </div>
    );
  }
}


export default App;