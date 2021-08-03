/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TransitionModal from './Modal';
import { signUp } from '../services/supabase';
import ErrorMessage from './ErrorMessage';

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
  messageAvatar: {
    margin: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function SignUp({
  setEmail,
  setMessage,
  setPassword,
  message,
  email,
  password,
  setOpen,
  open,
  match,
}) {
  const classes = useStyles();
  console.log(match);

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={({ target }) => {
              setPassword(target.value);
              setMessage('');
            }}

          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              signUp(email, password, setOpen, setMessage);
              setPassword('default');
            }}
          >
            Sign up
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

      <TransitionModal open={open} setOpen={setOpen} message={message} setMessage={setMessage} title="Account created successfully!" />
    </Container>
  );
}
