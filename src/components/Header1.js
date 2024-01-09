import {AppBar, Grid, Typography, Button} from '@mui/material';

export default function Header1(){
    return(
        <AppBar position='fixed' sx={{ height: '80px', backgroundColor: '#123B37', opacity: 0.9 }}>
            <Grid container alignItems="center" maxWidth='xl'>
            <Grid item xs={8} sx={{ml:16}}>
                <Typography variant='h4' color='#FFE598' sx={{fontWeight: 400, fontSize: '28px', letterSpacing: '2px'}}>DiJen Foods</Typography>
            </Grid>
            <Grid item>
                <Button href='/' sx={{textTransform:'none'}}><Typography variant='body1' color='#FFE598' sx={{letterSpacing: '2px', fontWeight: 300, fontSize: '20px'}}>Home</Typography></Button>
            </Grid>
            </Grid>
        </AppBar>
    );
};