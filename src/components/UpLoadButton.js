import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';

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

function UpLoadButton({ onFileChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="icon-button-file" 
        type="file"
        onChange={handleChange} />
      <label htmlFor="icon-button-file">
        <IconButton aria-label="upload picture" component="span">
          <InsertPhotoOutlinedIcon />
        </IconButton>
      </label>
    </div>
  )
}

export default UpLoadButton;
