import React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from "@material-ui/core/Typography";

export default function PageHeader(props) {
    const classes = useStyles();

    return <Container className={classes.headerContainer}>
        <Typography variant={"h2"} className={classes.headerTitle}>
            {props.title}
        </Typography>
    </Container>;
}

const useStyles = makeStyles(theme => ({
    headerContainer: {
        color: "#333",
        maxWidth: "100%",
        margin: "0",
        padding: "30px 20%",
        borderBottom: "solid 1px #ddd"
    },
    headerTitle: {
        fontWeight: "700",
        textAlign: "center"
    }
}));
