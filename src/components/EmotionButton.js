import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

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

function EmotionButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label>
        <IconButton color="#D3D8E0" component="span">
          <SentimentSatisfiedOutlinedIcon />
        </IconButton>
      </label>
    </div>
  )
}

export default EmotionButton
