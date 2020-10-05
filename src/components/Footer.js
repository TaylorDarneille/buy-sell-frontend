import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className="footer">
            <AppBar position="static">
                <Toolbar>
                    <Typography align="right" className={classes.title}>
                        {' Shané ' + new Date().getFullYear() + ' A MERN App'}  
                    </Typography>
                </Toolbar>
            </AppBar>
        </footer>
    )
}

export default Footer;