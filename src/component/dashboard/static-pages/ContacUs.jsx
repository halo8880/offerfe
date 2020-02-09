import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import LandingPage from "./LandingPage";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PageHeader from "./PageHeader";

const contactTypes = [
    {
        value: 'User Helpline',
        label: 'User Helpline'
    },
    {
        value: 'Business Proposal',
        label: 'Business Proposal'
    },
    {
        value: 'Press Coverage',
        label: 'Press Coverage'
    },
    {
        value: 'Job Opportunities',
        label: 'Job Opportunities'
    },
    {
        value: 'Other',
        label: 'Other'
    }
];

export default function ContactUs(props) {
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [contactType, setContactType] = useState("User Helpline");
    return (
        <LandingPage>
            <PageHeader title={"Contact Us"}/>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Send us a message</h1>
                <p className={classes.paragraphContent}>
                    We welcome you to contact us at any time. A ticket will be created and we aim to respond within 1 business day.
                </p>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            required
                            id="firstName"
                            label="First Name"
                            placeholder="John"
                            className={classes.formField}
                            variant="outlined"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            required
                            id="lastName"
                            label="Last name"
                            placeholder="Smith"
                            className={classes.formField}
                            variant="outlined"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            placeholder="name@email.com"
                            className={classes.formField}
                            variant="outlined"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            required
                            select
                            id="contactType"
                            label="Contact Type"
                            className={classes.formField}
                            variant="outlined"
                            value={contactType}
                            onChange={e => setContactType(e.target.value)}
                        >
                            {contactTypes.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            required
                            id="message"
                            label="Message"
                            placeholder="Type your message here"
                            multiline
                            rows="4"
                            className={classes.formField}
                            variant="outlined"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Button variant="contained" className={classes.submitBtn} onClick={() => {}}>
                        Submit message
                    </Button>
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
    },
    submitBtn: {
        background: "#5cb85c",
        margin: "12px"
    },
    formField: {
        width: "100%"
    }
}));