import React from 'react';
import classes from './toggleButton.scss'

const button = (props) => {
return (
   <button 
   onClick={props.showContent}
   className={classes.Button}>Show Resulst</button>
);
}



export default button;