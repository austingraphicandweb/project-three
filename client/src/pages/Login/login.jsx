import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import API from '../utils/API';
import './login.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// instead of email, position_level, zip_code i am going to switch it up to save jobs to database and the input fields need to be email, password, url, date_found.
export default function ContainedButtons() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => {
        // console.log(email)
        // API.getJob(email).then(response => {
        //     console.log(response.data);
        // })
    }
    const classes = useStyles();
    return (
        <div className="wrapper">
            <div className={classes.root}>
                <h2>Hello and welcome</h2>
                {/**
             * input form
             */}

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-secondary" value={email} label="Email" color="secondary" onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="standard-secondary" value={password} label="Password" color="secondary" onChange={(e) => setPassword(e.target.value)} />
                </form>
                {/*submit button*/}
                <Button variant="contained" onClick={handleClick}>Login</Button>
            </div>
        </div>
    );
}
