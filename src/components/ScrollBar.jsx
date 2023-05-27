import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        color="secondary"
      />
    </Box>
  );
}