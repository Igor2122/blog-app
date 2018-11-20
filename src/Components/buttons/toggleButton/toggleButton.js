import React from 'react';
import classes from './toggleButton.scss'

const button = (props) => {
return (
   <button 
   onClick={props.showContent}
   className={classes.DrawBorder}>Show Resulst</button>
);
}



export default button;