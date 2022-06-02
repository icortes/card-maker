import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Container, CssBaseline, Typography } from '@mui/material';
import { FormEvent } from 'react';

export default function SigninPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container component={'main'} maxWidth={'xs'}>
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
          Sign in
        </Typography>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}>
          
          </Box>
      </Box>
    </Container>
  );
}
