import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import LandingPage from "./LandingPage";
import PrivacyTable from "./PrivacyTable";
import PageHeader from "./PageHeader";

export default function Privacy(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    return (
        <LandingPage>
            <PageHeader title="Privacy Policy"/>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Things we never do</h1>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h2 className={classes.paragraphTitle}>Send spam emails, or sell email addresses</h2>
                        <p className={classes.paragraphContent}>
                            We're strictly complaint with the CAN-SPAM Act 2003 and other applicable anti-spam regulations.
                            When you sign up you can specify what types of emails you want to receive. You can change your settings or
                            unsubscribe from our mailing lists at any time.
                        </p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h2 className={classes.paragraphTitle}>Collect personal data via offers</h2>
                        <p className={classes.paragraphContent}>
                            When you complete surveys and other offers from our advertisers, we don't receive that information.
                            We are only sent a simple notification when an offer has been completed successfully.
                        </p>
                    </Grid>
                </Grid>
                <Grid component={"div"} container spacing={3} className={classes.textGrid}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h2 className={classes.paragraphTitle}>Sell personal data</h2>
                        <p className={classes.paragraphContent}>
                            We never sell personal information about you to third parties.
                            We're compliant with data protection regulations and try to minimise the data we store wherever possible.
                        </p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <h2 className={classes.paragraphTitle}>Require passwords</h2>
                        <p className={classes.paragraphContent}>
                            We don't require you to supply a password when creating your account. This actually protects your privacy,
                            since many casual users use the same password on multiple websites. Instead all changes to your account are
                            confirmed via a confirmation email.
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>GDPR Compliance</h1>
                <p className={classes.paragraphContent}>
                    As a European company, we are bound by the General Data Protection Regulation (GDPR).
                </p>
                <p className={classes.paragraphContent}>
                    This policy describes in detail how your personal data is stored, processed and shared. It also describes the control you have over your data .
                </p>
                <p className={classes.paragraphContent}>
                    We last updated this Privacy Policy to Version 3, on the 12th October 2018.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Email Addresses</h1>
                <p className={classes.paragraphContent}>
                    Your Email Address is a unique address, which can be used to send you electronic mail.
                </p>
                <PrivacyTable columns={UsageColumns} data={EmailAddressData} />
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Passwords</h1>
                <p className={classes.paragraphContent}>
                    Your Password is a secret string of characters, which can be used to prevent others from accessing your account.
                </p>
                <PrivacyTable columns={UsageColumns} data={PasswordData} />
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>IP Addresses</h1>
                <p className={classes.paragraphContent}>
                    Your IP Address is a unique return address, which is transmitted whenever you access our website or apps.
                    We can use this data to determine which country you are in with around a 99% level of accuracy.
                    Towns and cities can be identified with around an 80% level of accuracy, depending on the country you are in.
                </p>
                <p className={classes.paragraphContent}>
                    However, only your Internet Service Provider (ISP) knows your exact location.
                    They manage the connection between your local internet exchange and your household.
                </p>
                <PrivacyTable columns={UsageColumns} data={IPAddressData} />
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Device IDs</h1>
                <p className={classes.paragraphContent}>
                    When you use any of our apps we may receive your Device ID. This is a unique code, which can be used to identify your device.
                </p>
                <PrivacyTable columns={UsageColumns} data={DeviceData} />
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>User Agents</h1>
                <p className={classes.paragraphContent}>
                    When you connect to a website using a web browser a User Agent field is also usually transmitted.
                    This contains information about what type of device you are using, your operating system type and version,
                    your browser type and version, and other metadata which can be used to identify your device.
                </p>
                <PrivacyTable columns={UsageColumns} data={UserAgentData} />
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Account IDs</h1>
                <p className={classes.paragraphContent}>
                    When you create an account we will assign it a unique integer value, called your Account ID. We may then use this to
                    identify your account with third parties, without having to expose any of your personal data.
                </p>
                <PrivacyTable columns={UsageColumns} data={AccountData} />
                <p className={classes.paragraphContent}>
                    Additionally, we provide you with a third party verification code. This is similar to your Account ID,
                    and you can use it to verify non-personal statistics about your account via our API, with non-trusted third parties.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Your Consent</h1>
                <p className={classes.paragraphContent}>
                    Article 9 of the GDPR identifies certain special categories of data that require explicit consent.
                    These concern highly sensitive data such as sexual orientation and political affiliations.
                </p>
                <p className={classes.strongParagraph}>
                    We do not store, process or share any data categories that might be considered highly sensitive.
                </p>
                <p className={classes.paragraphContent}>
                    By registering an account you grant implicit consent for us to collect and use your data, as described in this Privacy Policy.
                </p>
                <PrivacyTable columns={ConsentColumns} data={ConsentData} />
                <p className={classes.paragraphContent}>
                    This Privacy Policy does not extend your consent to third parties, with the exception of the Responsible Parties described elsewhere.
                </p>
                <p className={classes.paragraphContent}>
                    Please note that you may be asked highly sensitive questions, as part of offers or surveys on third party sites, which we may link to.
                    We urge you to exercise caution and to read third party privacy policies carefully, before deciding to share your data.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Your right to view your personal data</h1>
                <p className={classes.paragraphContent}>
                    You have the right to view all the personal data we have about you. This can be
                    achieved simply, by typing the email address you used to register your account and pressing the 'Email My Data' button below.
                </p>
                <p className={classes.paragraphContent}>
                    We will then send you an email, containing all the personal data we have about you including:
                    Email Addresses, IP addresses, Device IDs, User Agents and your Account ID.
                </p>
                <p className={classes.paragraphContent}>
                    Please note that if you failed to register using a valid email address, or have since deleted your account, then we will be unable to confirm your identity.
                    Therefore, in order to protect your privacy, it will not be possible for us to grant you access to your data.
                </p>
                <p className={classes.paragraphContent}>
                    Please note that you may be asked highly sensitive questions, as part of offers or surveys on third party sites, which we may link to.
                    We urge you to exercise caution and to read third party privacy policies carefully, before deciding to share your data.
                </p>
                <form onSubmit={() => {}} className={classes.emailForm}>
                    <input
                        autoComplete={"email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"Email address"}
                        className={classes.input}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button type={"submit"} className={classes.submitBtn}>Email my data</button>
                </form>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Your right to be forgotten</h1>
                <p className={classes.paragraphContent}>
                    If your account remains completely inactive for an extensive period of time (greater than 3 months)
                    we may delete it, in order to protect your privacy and ensure you are eventually forgotten.
                </p>
                <p className={classes.paragraphContent}>
                    Additionally, at any time you may delete your account yourself, by typing the word 'DELETE' in the settings tab and then updating your settings.
                    Note that it may take several weeks for us to completely purge your personally identifiable data from all of our servers and backups.
                </p>
                <p className={classes.paragraphContent}>
                    Please note that, in order for us to monitor and prevent future fraud, we must continue to store some anonymous metadata such as IP Addresses.
                    However, any data retained will no longer be associated with any personally identifiable data, such as email addresses or payment information.
                </p>
                <p className={classes.paragraphContent}>
                    If you delete your account you will lose all the points you have earned. Therefore you should consider this carefully before choosing to delete your account.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Your right to control your data</h1>
                <p className={classes.paragraphContent}>
                    You have further rights, such as the right to amend your personal data and the right to request that we stop processing your data.
                </p>
                <p className={classes.paragraphContent}>
                    Wherever possible we allow you to change your privacy settings, in order to control how your data is used.
                </p>
                <p className={classes.paragraphContent}>
                    However, peventing fraud is essential to the operation of our service. We cannot allow users to amend their data or block processing,
                    as it would inhibit our ability to combat fraud. Therefore, in order to exercise these additional rights, you may delete your account.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Responsible Parties</h1>
                <p className={classes.paragraphContent}>
                    Here is a list of parties which handle your sensitive personal data and a description of their role:
                </p>
                <PrivacyTable columns={ResponsibleColumns} data={ResponsibleData}/>
                <p className={classes.paragraphContent}>
                    Additionally, some personal data such as payment records may be disclosed with other trusted third parties in order to ensure our compliance with taxation,
                    as a mandatory requirement for necessary auditing, or if legally obliged to do so by an empowered government agency.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Cookie Policy</h1>
                <p className={classes.paragraphContent}>
                    Our use of cookies has been limited to functions that are absolutely essential to the operation of our service.
                    When we need to identify you, your Account ID is used instead of more sensitive data.
                </p>
                <PrivacyTable columns={CookieColumns} data={CookieData}/>
                <p className={classes.paragraphContent}>
                    Additionally, insecure cookies may be saved by trusted third party scripts, such as Google Analytics.
                    By using our website with cookies enabled, you consent to all cookies.
                </p>
            </Container>
            <Container className={classes.paragraphContainer}>
                <h1 className={classes.paragraphTitle}>Pixel Policy</h1>
                <p className={classes.paragraphContent}>
                    Our use of cookies has been limited to functions that are absolutely essential to the operation of our service.
                    When we need to identify you, your Account ID is used instead of more sensitive data.
                </p>
                <PrivacyTable columns={CookieColumns} data={CookieData}/>
                <p className={classes.paragraphContent}>
                    Affiliates of PointsPrizes may embed our Pixels into third party websites. These Pixels contain the cookie 'pp_ref'.
                    We do not use Pixels to store or process any data regarding your activity on third party websites.
                </p>
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
    strongParagraph: {
        fontSize: "18px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
    submitBtn: {
        background: "#9c27b0",
        border: 0,
        height: "2.5rem",
        borderRadius: "0 6px 6px 0",
        width: "15em",
        color: "white",
        fontWeight: 600,
        fontSize: "13px",
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
        width: "100%",
        height: "inherit",
        border: "1px solid #ddd",
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: "1em",
        marginTop: 0,
        marginBottom: 0,
        fontSize: "13px",
        borderRadius: "6px 0 0 6px",
        "&:focus": {
            outline: "none"
        }
    },
    emailForm: {
        width: "100%",
        display: "flex"
    }
}));

const UsageColumns = [
    {
        title: "Usage",
        align: "left",
        property: "usage"
    },
    {
        title: "Description",
        align: "left",
        property: "description"
    },
    {
        title: "Default",
        align: "left",
        property: "default"
    },
    {
        title: "Optional",
        align: "left",
        property: "optional"
    }
]

const ConsentColumns = [
    {
        title: "Data Category",
        align: "left",
        property: "dataCategory"
    },
    {
        title: "Level of Consent",
        align: "left",
        property: "levelOfConsent"
    }
]

const ResponsibleColumns = [
    {
        title: "Type",
        align: "left",
        property: "type"
    },
    {
        title: "Entity",
        align: "left",
        property: "entity"
    },
    {
        title: "Responsibility",
        align: "left",
        property: "responsibility"
    }
]

const CookieColumns = [
    {
        title: "Cookie",
        align: "left",
        property: "cookie"
    },
    {
        title: "Description",
        align: "left",
        property: "description"
    },
    {
        title: "Trigger",
        align: "left",
        property: "trigger"
    },
    {
        title: "Expiry",
        align: "left",
        property: "expiry"
    },
    {
        title: "Secure?",
        align: "left",
        property: "secure"
    }
]

const EmailAddressData = [
    {
        usage: "Storage",
        description: "We need to store your email address, so we can identity or contact you.\n" +
            "\n" +
            "Furthermore, may need to store additional email addresses, if you provide them to us as payment settings.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Processing",
        description: "We need to process your email address, so we can identity or contact you.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Sharing",
        description: "We may need to display a partially obfuscated version of your email address to other users, as part of our social proof. For example, we might display johnsmith@gmail.com as john*****@gmail.com.\n" +
            "\n" +
            "Additionally, in order to ensure you cannot be identified, we only share the domain names of widely used mailbox providers. For example, we might display johnsmith@johnsbakery.com as john****@****.com.\n" +
            "\n" +
            "We may need to share your email address with trusted third parties such as Google and Facebook, in order to link your account, or target you with relevant advertisements in the future.\n" +
            "\n" +
            "We do not, under any circumstances, sell your email address to any third parties.",
        default: "Enabled",
        optional: "No"
    }
]

const PasswordData = [
    {
        usage: "Storage",
        description: "We never store a raw version of your password. Instead it is converted into a cryptographically secure hash before storage. A hashed password" +
            "is almost impossible to convert back into its raw version, particularly if you use a difficult enough password, containing a broad range of characters.",
        default: "Disabled",
        optional: "Yes"
    },
    {
        usage: "Processing",
        description: "We need to process your raw password, so we can convert it into a cryptographically secure hash.\n" +
            "\n" +
            "This takes place on secure servers operated by our Primary Data Processor.",
        default: "Disabled",
        optional: "Yes"
    },
    {
        usage: "Sharing",
        description: "We never share your password with any third party.",
        default: "Disabled",
        optional: "No"
    }
]

const IPAddressData = [
    {
        usage: "Storage",
        description: "We need to store your IP Addresses, in order to detect fraudulent activity.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Processing",
        description: "We need to process your IP Addresses, in order to detect fraudulent activity.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Sharing",
        description: "We never share your historical IP Addresses with any third parties," +
            "although they may choose to share your current IP Address with us.",
        default: "Disabled",
        optional: "No"
    }
]

const UserAgentData = [
    {
        usage: "Storage",
        description: "We need to store your Device IDs, in order to detect fraudulent activity and to allow conversions to be tracked.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Processing",
        description: "We need to process your Device IDs, in order to detect fraudulent activity.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Sharing",
        description: "We may need to share your Device IDs with any third parties, in order to allow conversions to be tracked.",
        default: "Enabled",
        optional: "No"
    }
]

const DeviceData = [
    {
        usage: "Storage",
        description: "We need to store your User Agents, in order to detect fraudulent activity.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Processing",
        description: "We need to process your User Agents, in order to detect fraudulent activity.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Sharing",
        description: "We never share your User Agents with any third parties.",
        default: "Disabled",
        optional: "No"
    }
]

const AccountData = [
    {
        usage: "Storage",
        description: "We need to store your Account ID, in order to identify your account.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Processing",
        description: "We need to process your Account ID, in order to identify your account.",
        default: "Enabled",
        optional: "No"
    },
    {
        usage: "Sharing",
        description: "We need to share your Account ID, in order to identify your account.",
        default: "Enabled",
        optional: "No"
    }
]

const ConsentData = [
    {
        dataCategory: "Email Addresses",
        levelOfConsent: "Implicit"
    },
    {
        dataCategory: "Passwords",
        levelOfConsent: "Implicit"
    },
    {
        dataCategory: "IP Addresses",
        levelOfConsent: "Implicit"
    },
    {
        dataCategory: "Device IDs",
        levelOfConsent: "Implicit"
    },
    {
        dataCategory: "User Agents",
        levelOfConsent: "Implicit"
    },
    {
        dataCategory: "Account IDs",
        levelOfConsent: "Implicit"
    }
]

const ResponsibleData = [
    {
        type: "Data Controller",
        entity: "SAS POINTSPRIZES",
        responsibility: "Overall control over data."
    },
    {
        type: "Primary Data Processor",
        entity: "AMAZON WEB SERVICES, INC",
        responsibility: "Secure storage and processing of relational data in the cloud."
    },
    {
        type: "Secondary Data Processor",
        entity: "SENDGRID, INC",
        responsibility: "Secure storage and processing of email data."
    },
    {
        type: "Secondary Data Processor",
        entity: "MAILGUN TECHNOLOGIES, INC",
        responsibility: "Secure storage and processing of email data."
    },
    {
        type: "Secondary Data Processor",
        entity: "ZENDESK, INC",
        responsibility: "Secure storage and processing of customer support data."
    },
    {
        type: "Secondary Data Processor",
        entity: "MAXMIND, INC",
        responsibility: "Secure storage and processing of data."
    },
    {
        type: "Secondary Data Processor",
        entity: "PAYPAL HOLDINGS, INC",
        responsibility: "Secure storage and processing of payment transaction data."
    }
]

const CookieData = [
    {
        cookie: "pp_ref",
        description: "This cookie is essential to the operation of our referral program." +
            "It cannot be used to identify you personally. Instead it merely identifies the account which referred you, using their Account ID.",
        trigger: "Clicking a referral link",
        expiry: "1 Year",
        secure: "Yes"
    },
    {
        cookie: "pp_ldr",
        description: "This cookie is essential to the operation of our referral program." +
            "It cannot be used to identify you personally. Instead it merely identifies the type of referral link you clicked on.",
        trigger: "Clicking a referral link",
        expiry: "1 Year",
        secure: "Yes"
    },
    {
        cookie: "pp_cpa",
        description: "This cookie is essential to the operation of our marketing. It cannot be used to identify you personally." +
            "Instead it merely identifies the marketer which told you about us.",
        trigger: "Clicking a marketing link",
        expiry: "1 Month",
        secure: "Yes"
    },
    {
        cookie: "pp_act",
        description: "This cookie is essential to the operation of account sessions on our website. This cookie identifies you by your Account ID.",
        trigger: "Logging in or registering",
        expiry: "1 Week",
        secure: "Yes"
    }
]