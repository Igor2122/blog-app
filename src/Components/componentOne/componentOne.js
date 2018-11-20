import React from 'react'; // eslint-disable-line no-unused-vars
import classes from './componentOne.css';// eslint-disable-line no-unused-vars

let images = [
  'cheese.png',
  'tomato.png',
  'cheese.png',
  'tomato.png',
  'cheese.png',
  'tomato.png',
]
const comp1 = (props) => {
   

   
   let output = images.map((key, i) => {
         return (
            <div className={classes.Card} key={key + i}>
               <img 
                  className={classes.CardImage} 
                  key={key + i}
                  src={require(`../../assets/${key}`)} alt={key}/> 
               <div className={classes.Container}>
                  <h4><b>John Doe</b></h4> 
                  <p>Architect & Engineer</p> 
               </div>
            </div>
         );
   });

   if(props.state == false){
      output = '';
   }
   
   
   return (
      <div className={classes.Wrapper}>     
         {output}
      </div>
         
);
}



export default comp1;