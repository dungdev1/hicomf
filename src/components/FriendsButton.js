import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: 'none',
  },
}));

function FriendsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label>
        <IconButton component="span">
          <PermIdentityOutlinedIcon />
        </IconButton>
      </label>
    </div>
  )
}

export default FriendsButton;
