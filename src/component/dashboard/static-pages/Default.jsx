import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Link } from "react-router-dom";
import * as util from "../../Util";
import * as Axios from "../../../config/axios";

export default function Term(props) {
    const classes = useStyles();

    const [username, setUserName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const refBy = util.getRefByFromQueryString() ? util.getRefByFromQueryString() : util.getCookie("refBy");
        Axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
            username: username,
            password: "123",
            refBy
        }).then(response => {
            util.setAccessToken(response.data.token);
            window.location.href = "/in/dashboard";
        }).catch(err => {
            console.log(err);
        });
    }

    const handleLogout = e => {
        util.clearAccessToken();
        window.location.href = "/";
    }

    const handleGoToDashboard = e => {
        window.location.href = "/in/dashboard";
    }

    Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
        .then(response => {
            setLoggedIn(true);
        }).catch(err => {
        util.clearAccessToken();
        setLoggedIn(false);
    })

    return (
        <React.Fragment>
            <div className={classes.staticPageContainer}>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={false} sm={false} md={3} lg={3}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant={"h3"} paragraph component={"p"} className={classes.introText}>
                            Earn Points,
                            Get Rewarded!
                        </Typography>
                        <div className={classes.formGroup}>
                            {loggedIn ?
                                <>
                                    <button onClick={handleGoToDashboard} type="button"
                                            className={clsx(classes.submitBtn, classes.goToDashBoardBtn)}>
                                        <Link to={"/in/dashboard"}>Go To Dashboard</Link>
                                    </button>
                                    <button onClick={handleLogout} type="button"
                                            className={clsx(classes.submitBtn, classes.logoutBtn)}>Logout
                                    </button>
                                </>
                                :
                                <form onSubmit={handleLogin}>
                                    <input
                                        autoComplete={"email"}
                                        name={"email"}
                                        type={"email"}
                                        placeholder={"Email address"}
                                        className={classes.input}
                                        value={username}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                    <button type={"submit"} className={classes.submitBtn}>Login Or Create Account</button>
                                </form>}
                        </div>
                        <Typography variant={"h5"} component={"p"} className={classes.introText}>
                            Earn Money Everyday & Get $10 Free Bonus Monthly!
                        </Typography>
                        <Typography variant={"h6"} paragraph component={"p"} className={classes.introText}>
                            You don't need to manage your password, we manage everything through your email address.
                            Just enter your email address and start earning with us!
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

const useStyles = makeStyles(theme => ({
    staticPageContainer: {
        position: "relative",
        backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro-react/static/media/office2.d57fa885.jpg)",
        backgroundSize: "cover",
        height: "700px",
        minWidth: "100%",
        alignItems: "center",
        display: "flex",
        // justifyContent: "center",
        color: "#FFF",
        "&::before": {
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            content: `''`,
            display: "block",
            zIndex: 1,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)"
        },
        "& >div": {
            zIndex: 1,
            margin: "0"
        }
    },
    textGrid: {
        // zIndex: 1,
    },
    inputGrid: {
        // background: "white",
        // borderRadius: "6px",
    },
    introText: {
        textAlign: "center"
    },
    submitBtn: {
        background: "#9c27b0",
        border: 0,
        height: "2.5rem",
        borderRadius: "0 6px 6px 0",
        width: "15em",
        color: "white",
        fontWeight: 600,
        "& a": {
            textDecoration: "none",
            color: "inherit"
        },
        "&:hover": {
            boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)",
            backgroundColor: "#9c27b0"
        },
        "&:focus": {
            outline: "none"
        },
        "&:active": {
            background: "#9c27f0"
        }
    },
    input: {
        width: "20em",
        height: "2.5rem",
        border: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: "1em",
        marginTop: 0,
        marginBottom: 0,
        borderRadius: "6px 0 0 6px",
        "&:focus": {
            outline: "none"
        }
    },
    formGroup: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1em",
        marginBottom: "1em",
    },
    goToDashBoardBtn: {
        borderRadius: "6px",
    },
    logoutBtn: {
        background: "#f50057",
        borderRadius: "6px",
        marginLeft: "1em",
        "&:hover": {
            boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)",
            backgroundColor: "#f50057"
        },
        "&:focus": {
            outline: "none"
        },
        "&:active": {
            background: "red"
        }
    }
}));
