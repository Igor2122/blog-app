import React, { Component } from 'react';
import classes from './App.css'; // eslint-disable-line no-unused-vars
import Layout from './layout/layout'
import Component1 from './Components/componentOne/componentOne';
import Button from './Components/buttons/toggleButton/toggleButton';
class App extends Component {

  state = {
    showContent: false,
  }

  showContent = () => {
    this.setState({showContent: true});
    console.log(this.state.showContent);
    console.log('clicked');
  }


  render() {
    return(
      <div>
      <Button 
      showContent={this.showContent}/>
        <Layout>
          <Component1  state={this.state.showContent}/> 
        </Layout>
      </div>
    );
    
  }
}

export default App;
