import React, { Component } from 'react';
import classes from './App.css';
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';

class App extends Component {

  state = {
    name: 'assets/cheese.png',
  }

  showImages = (props) => {
    const images = this.state;
    console.log(images);
  }

  

  render() {
    return(

      <div>
        <Layout>
          <Component1 name={this.state.name} />
          {/* <img
            className={classes.Image} 
            src={require(`${this.state.name}`)} alt="image"/> */}
        </Layout>
        
      </div>
    );
    
  }
}

export default App;
