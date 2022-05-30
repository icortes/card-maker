import { Avatar, Box, Container, CssBaseline, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material/';
import { FormEvent } from 'react';

export default function SignupPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          sx={{ mt: 3 }}></Box>
      </Box>
    </Container>
  );
}
