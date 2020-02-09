import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import LandingPage from "./LandingPage";
import PageHeader from "./PageHeader";
import Typography from "@material-ui/core/Typography";

export default function AboutUs(props) {
    const classes = useStyles();
    return (
        <LandingPage>
            <PageHeader title={"Earn Points, Get Rewarded!"}/>
            <Container className={classes.paragraphContainer}>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <h1 className={classes.paragraphTitle}>Who we are</h1>
                        <p className={classes.paragraphContent}>
                            We are a small team that focuses on helping our users earn free prizes,
                            in return for points. We have been building long lasting relationships and delivering real prizes to our users since 2016.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <h1 className={classes.paragraphTitle}>What we do</h1>
                        <p className={classes.paragraphContent}>
                            We build tools that help our users maximize their commercial value to advertisers.
                            We believe everyone should be able to earn free prizes online, regardless of which country they live in.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <h1 className={classes.paragraphTitle}>Why we do it</h1>
                        <p className={classes.paragraphContent}>
                            There are thousands of scam sites that deceive users, with the promise of free gift cards and other rewards.
                            We want to eliminate this harmful practice, by providing safe and easy ways to earn prizes online.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </LandingPage>
    );
}

const useStyles = makeStyles(theme => ({
    paragraphContainer: {
        background: "#fff",
        padding: "50px",
        borderBottom: "1px solid #e7e7e7"
    },
    paragraphTitle: {
        marginTop: "0"
    },
    paragraphContent: {
        fontSize: "18px",
        fontWeight: "400"
    }
}));