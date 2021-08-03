/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TransitionModal from './Modal';
import ErrorMessage from './ErrorMessage';
import { recoverPassword } from '../services/supabase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function RecoverPassword({
  setEmail,
  setMessage,
  message,
  email,
  setOpen,
  open,
}) {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon>password</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Recovery
        </Typography>
        <form
          className={classes.form}
          noValidate
          variant="outlined"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={({ target }) => {
              setEmail(target.value);
              setMessage('');
            }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => recoverPassword(email, setOpen, setMessage)}
          >
            Get new password
          </Button>
          <Box mt={2}>
            <Grid item xs>
              <Link to="auth">
                Back to Sign In
              </Link>
            </Grid>
          </Box>

        </form>
        {
        !open && message
          ? <ErrorMessage message={message} />
          : null
        }
      </div>

      <TransitionModal open={open} setOpen={setOpen} message={message} setMessage={setMessage} title="One more step" />
    </Container>
  );
}
