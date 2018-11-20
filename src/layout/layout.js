import React from "react";
import classes from './layout.css';
import Aux from '../hoc/Aux';
const layout = (props) => {
   return (
      <Aux>
         <div>Home About Us Cosntacts</div>
         <div className={classes.Base}>
            {props.children}
         </div>
      </Aux>
   );
}

export default layout;