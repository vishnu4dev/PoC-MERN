import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';


import './cardDisplay.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <div className="masterStyleCard">
          <div className="bannerStyle"></div>
          <div>
                <div className="lgn-btn-style">
                    <button className="lgn-style">Login</button>
                </div>
                <div className="txtStyleCard">
                <TextField id="standard-basic" label="Email" />
                <div><TextField id="standard-basic" label="Full Name" /></div>
                <TextField id="standard-basic" label="Password" />
                <div className="btn-Stye-Card">
                    <button className="btnStyleCard">Lets Get Started</button>
                </div>
                </div>
          </div>
      </div>
    </Card>
  );
}
