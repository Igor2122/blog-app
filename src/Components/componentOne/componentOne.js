import React from 'react'; // eslint-disable-line no-unused-vars
import classes from './componentOne.css';// eslint-disable-line no-unused-vars

const comp1 = (props) => {
   

     let img = props, chunk;
     let result = Object.keys(img).map(key => {
        return (img[key]);
            //   return [key, img[key]];
     });

     console.log(result);
     while (result.length > 0) {
      chunk = result.splice(0,10)
      return chunk
    
    }

    console.log(chunk);
    

     let output = chunk.forEach(key => {
        console.log(key);
        
         return <img className={classes.Cheese} 
         src={require(`../../assets/${key}`)} alt={key}/>  
     });

     console.log(output);
     

   
      
   
         return (
         <div>   
      {/* <div>Componet {props.name}</div> */}
      {output}
      {/* <img
         className={classes.Cheese} 
         src={require(`../../assets/${props.name}`)} alt="image"/> */}
   </div>
         
);
}



export default comp1;