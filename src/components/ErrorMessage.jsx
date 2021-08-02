/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  messageAvatar: {
    margin: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const ErrorMesage = ({ message }) => {
  const classes = useStyles();
  return (
    <Box mt={4} className={classes.message}>
      <ReportProblemRoundedIcon color="secondary" className={classes.messageAvatar} fontSize="medium" />
      <Typography variant="subtitle2" color="secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMesage;
