import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export default function ContainedButtons() {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <h2>Search Jobs</h2>
                <Button variant="contained">Search</Button>
            </div>
        );
    }