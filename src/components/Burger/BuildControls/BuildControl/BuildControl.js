import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Button}
      onClick={props.remove}
      disabled={props.disabled}>Less</button>
    <button
      className={classes.Button}
      onClick={props.add}>More</button>
  </div>
);

export default buildControl;
