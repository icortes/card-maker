import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';
import { supabase } from '../lib/initSupabase';
import useSWR from 'swr';
import { Auth } from '@supabase/ui';

export default function Home(props: any) {
  const { user } = Auth.useUser();

  console.log(user);
  return (
    <Container component={'main'} maxWidth={'md'}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {user ? (
          <>
            <Typography>signed in</Typography>
            <Button
              type='button'
              variant='contained'
              onClick={async () => {
                const { error } = await supabase.auth.signOut();
                if (error) {
                  console.log(error);
                }
              }}>
              sign out
            </Button>
          </>
        ) : (
          'not signed in'
        )}
      </Box>
    </Container>
  );
}
