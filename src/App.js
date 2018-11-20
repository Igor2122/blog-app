import React, { Component } from 'react';
import classes from './App.css'; // eslint-disable-line no-unused-vars
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';

class App extends Component {

  state = {
   
    images: [
      'cheese.png',
      'tomato.png'
    ],
  }



  render() {
    return(

      <div>
        <Layout>
          <Component1 name={this.state.images} /> 
        </Layout>
        
      </div>
    );
    
  }
}

export default App;
