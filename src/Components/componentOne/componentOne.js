import React from 'react';
import classes from './componentOne.css';

const comp1 = (props) => {
return (
   <div>   
      <div>Componet {props.name}</div>
      <img
         className={classes.Cheese} 
         src={require(`../../assets/${props.name}`)} alt="image"/>
   </div>
         
);
}



export default comp1;