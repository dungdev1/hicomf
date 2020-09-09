import React from 'react';
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

function UpLoadButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="#D3D8E0" aria-label="upload picture" component="span">
          <InsertPhotoOutlinedIcon />
        </IconButton>
      </label>
    </div>
  )
}

export default UpLoadButton;
