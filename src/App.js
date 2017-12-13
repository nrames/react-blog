import React, { Component } from 'react';
import BlogForm from './components/BlogForm';
import BlogFeed from './components/BlogFeed';
import './App.css';

class App extends Component {
 render() {
 return (
   <div className="App">
     <BlogForm />
     <BlogFeed />
    </div>
   );
  }
}

export default App;
