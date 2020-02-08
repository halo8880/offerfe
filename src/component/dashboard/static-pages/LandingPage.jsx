import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Term from "./Term";
import Footer from "../Footer";
import Privacy from "./Privacy";

function LandingPage(props) {
    const classes = useStyles();
    const staticUrl = "static";

    return <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h" color="inherit" noWrap className={classes.title}>
                    <Link to="/">OffRewards</Link>
                </Typography>
                <div className={classes.appBarRight}>
                    <Button color="inherit">Login</Button>
                    <Typography component="p" variant="body1" color="inherit" noWrap className={classes.title}>
                        <Link to="/">Blog</Link>
                    </Typography>
                    <Typography component="p" variant="body1" color="inherit" noWrap className={classes.title}>
                        <Link to="/">About us</Link>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
        <div className={classes.middlePart}>
            {props.children}
        </div>
        <Footer/>
    </>
}

export default withRouter(LandingPage);
const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        fontFamily: "'Courgette', cursive"
    },
    appBar: {
        boxShadow: "none",
        background: "#e7e7e7",
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        padding: "0 40px"
    },
    middlePart: {
        maxWidth: "100%",
        margin: "60px 0 0 0",
        padding: "0"
    },
    appBarRight: {
        display: "flex",
        color: "black",
        alignItems: "center",
        "& button": {
            background: "#5cb85c",
            marginRight: "8px"
        },
        "& p": {
            marginRight: "8px",
            "&:hover": {
                color: "#fff"
            }
        }
    }
}));
