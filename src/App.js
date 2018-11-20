import React, { Component } from 'react';
import classes from './App.css';
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';

class App extends Component {

  state = {
   
    imag: {
      name: 'cheese.png'
    }
  }

  

  

  render(
   
    // showImages = (props) => {
    //   const images = this.state;
    //   console.log(images);
    // }

  ) {
    return(

      <div>
        <Layout>
          <Component1 name={this.state.imag.name} />
          
        </Layout>
        
      </div>
    );
    
  }
}

export default App;
