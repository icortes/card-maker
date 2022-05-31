import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material/';
import { FormEvent, useState } from 'react';
import { useUser } from '../lib/hooks';

export default function SignupPage() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');
  const [errorProp, setErrorProp] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let body = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      userName: data.get('userName'),
      email: data.get('email'),
      password: data.get('password'),
      rpassword: data.get('rpassword')
    };

    if (body.password !== body.rpassword) {
      setErrorMsg(`The passwords don't match.`);
      setErrorProp(true);
      return;
    }

    console.log(body);
  };
  return (
    <Container component={'main'} maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component={'h1'} variant={'h5'}>
          Sign up
        </Typography>
        <Box
          component={'form'}
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='username'
                label='User Name'
                name='userName'
                autoComplete='user-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errorProp}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                helperText={errorMsg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errorProp}
                required
                fullWidth
                name='rpassword'
                label='Repeat Password'
                type='password'
                id='rpassword'
                helperText={errorMsg}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
