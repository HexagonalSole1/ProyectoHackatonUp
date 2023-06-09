import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../css/Canciones.css'

export default function OutlinedCard(promp) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className='cajita' variant="outlined">
        <React.Fragment>
        <CardContent>
        <Typography variant="h5" component="div">
            {promp.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {promp.autor}
        </Typography>
        <Button className='reproducir' variant="filled" startIcon={<PlayArrowIcon />}>Reproducir</Button>
        </CardContent>
        <CardActions>
        
        </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}