import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import './AddingStory.css';

const useStyles = makeStyles((theme) => ({
  addingStory: {
    borderRadius: '50%',
    backgroundColor: '#5085E8',
    '&:hover': {
      backgroundColor: '#5085E8'
    },
    width: 'fit-content',
  },
  root: {
    padding: "15px",
  }
}));

function AddingStory(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.addingStory}>
      <IconButton className={classes.root}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default AddingStory;
