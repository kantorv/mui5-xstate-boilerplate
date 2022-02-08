import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function WidthHeightInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="Width"
          label="Width"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

        <TextField
          id="Height"
          label="Height"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
   
      </div>
    </Box>
  );
}