import React, { Component } from 'react';
import classes from './App.css';
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';

class App extends Component {

  state = [
    {name: './assets/cheese.png'}
  ]

  render() {
    return(
      <div>
        <Layout>
          {/* <Component1 name={this.state[0].name}/> */}
          <img
         className={classes.Cheese} 
         src={require(`${this.state[0].name}`)} alt="image"/>
        </Layout>
        
      </div>
    );
    
  }
}

export default App;// higher order component 
