import React from 'react';
import classes from './componentOne.css';

const comp1 = (props) => {
   
   let result = Object.values(props)
   console.log(result);
   

   let image = result.map(img => {
      console.log(img.name);
      console.log(typeof(img));
      return <img className={classes.Cheese} 
      src={require(`../../assets/${img.name}`)} alt="image"/>
      
   });
         return (
         <div>   
      {/* <div>Componet {props.name}</div> */}
      {image}
      {/* <img
         className={classes.Cheese} 
         src={require(`../../assets/${props.name}`)} alt="image"/> */}
   </div>
         
);
}



export default comp1;