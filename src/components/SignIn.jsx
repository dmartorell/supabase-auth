/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core/';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ErrorMessage from './ErrorMessage';
import { logIn } from '../services/supabase';

function LinkToGitHub() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Authorization with Supabase || Check code at '}
      <Link color="inherit" to="https://github.com/dmartorell/supabase-auth">
        GitHub
      </Link>
    </Typography>
  );
}

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

export default function SignIn({
  setEmail,
  setMessage,
  setPassword,
  message,
  email,
  password,
}) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => logIn(email, password, setMessage, history, setEmail, setPassword)}
          >
            Sign In
          </Button>
          <Box mt={2}>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  {' '}
                </Link>
              </Grid>
              <Grid item className="linkTo">
                <Link to="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
        {
        message && <ErrorMessage message={message} />
        }
      </div>
      <Box mt={8}>
        <LinkToGitHub />
      </Box>
    </Container>
  );
}
