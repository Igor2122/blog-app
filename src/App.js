import React, { Component } from 'react';
import classes from './App.css';
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';

class App extends Component {

  state = {
   
    images: [
      'cheese.png',
      'tomato.png'
    ],

    imag: {
      name: 'cheese.png',
      name: 'cheese.png',
      name: 'cheese.png',
      name: 'cheese.png',
      name: 'cheese.png',
    }
  }

  

  

  render() {
    return(

      <div>
        <Layout>
          <Component1 name={this.state.imag} /> 
        </Layout>
        
      </div>
    );
    
  }
}

export default App;
