import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link, withRouter } from 'react-router-dom';
import Copyright from "../Copyright";

function Footer({ match }) {
    const classes = useStyles();
    const staticUrl = "/static";

    return <React.Fragment>
        <Container className={classes.footerContainer}>
            <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography variant={"h5"} gutterBottom>
                        Company
                    </Typography>
                    <div className={classes.footerInfoContainer}>
                        <div className={classes.companyInfo}>
                            <div>SAS POINTSPRIZES</div>
                            <div>8 Rue Des Remparts</div>
                            <div>Le Boulou</div>
                            <div>66160</div>
                            <div>France</div>
                        </div>
                        <div className={classes.registrationInfo}>
                            <div>Company Registration Number:</div>
                            <div>830 646 766 R.C.S. Perpignan</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography variant={"h5"} gutterBottom>
                        Learn More
                    </Typography>
                    <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className={classes.footerInfoContainer}>
                                <Link to={`${staticUrl}/term`} className={classes.footerLink}>Term Of Use</Link>
                                <Link to={`${staticUrl}/privacy`} className={classes.footerLink}>Privacy Policy</Link>
                                <Link to={`${staticUrl}/offers`} className={classes.footerLink}>Contact Us</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Help Center</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Video Tutorials</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Earnings Disclaimer</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Brand Guidelines</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Press Coverage</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Advertise Here</Link>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className={classes.footerInfoContainer}>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Affiliate Program</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Paid Surveys</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Newsletter</Link>
                                <Link to={`${match.url}/offers`} className={classes.footerLink}>Payment Proof</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography variant={"h5"} gutterBottom>
                        Latest Article
                    </Typography>
                    <div className={classes.footerInfoContainer}>
                        <div className={classes.articleContainer}>
                            <div className={classes.articleName}>
                                Tax Planning: Optimize And Reduce Your Taxes
                            </div>
                            <div className={classes.articleDate}>7th February 2020</div>
                        </div>
                        <div className={classes.articleContainer}>
                            <div className={classes.articleName}>
                                Tax Planning For Business Owners
                            </div>
                            <div className={classes.articleDate}>7th February 2020</div>
                        </div>
                        <div className={classes.articleContainer}>
                            <div className={classes.articleName}>
                                Final Fantasy Brave Exvius Guide
                            </div>
                            <div className={classes.articleDate}>7th February 2020</div>
                        </div>
                    </div>
                    <div className={classes.copyRight}>
                        <Copyright/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
}

export default withRouter(Footer);
const useStyles = makeStyles(theme => ({
    footerContainer: {
        background: "#f8f8f8",
        color: "#333",
        maxWidth: "100%",
        margin: "0",
        padding: "50px 30%"
    },
    footerInfoContainer: {
        display: "grid"
    },
    footerLink: {
        color: "#337ab7",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline"
        },
        fontSize: "14px"
    },
    copyRight: {
        "& p": {
            position: "unset",
            textAlign: "left"
        }
    },
    companyInfo: {
        fontSize: "14px",
        fontWeight: "bold"
    },
    registrationInfo: {
        fontSize: "13px",
        paddingTop: "8px"
    },
    articleContainer: {
        marginBottom: "12px",
        fontSize: "14px"
    },
    articleName: {
        color: "#337ab7",
        fontWeight: "bold"
    },
    articleDate: {
        color: "#888888"
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
