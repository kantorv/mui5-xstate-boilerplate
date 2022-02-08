import React, { useEffect } from 'react';

import { Grid,Typography , Slider, Input, Box, InputAdornment} from "@mui/material"
import {SxProps} from "@mui/material"


type InputProps = {
    title:string,
    value:number,
    min:number
    max:number,
    update: (value:number)=>void,
    tabIndex:number,
    unit:"mm" | "inch" | "deg"
    sx?:SxProps
    
}

// const useStyles = makeStyles({
//   root: {
// //    width: 250,
//   },
//   input: {
//     width: 42,
//   },
// });
const InputNoIcon = (props:InputProps)=> {

  const {title, value,min, max,  update,  tabIndex, unit,sx} = props;
 
  const [_value, setValue] = React.useState<number | string | Array<number | string>>(value);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (_value < 0) {
      setValue(0);
    } else if (_value > max) {
      setValue(max);
    }
  };



  useEffect(()=>{
    update(_value as number)
  },[_value])



  return (
    <Box component="div" sx={{
      width: "100%",
      pb:3,
      ...sx
    }}>
      <Typography id="input-slider" gutterBottom variant='body2' sx={{  fontSize:"10px", whiteSpace:"nowrap"}}> 
        {title}
      </Typography>
      <Grid container spacing={1} alignItems="center">

        <Grid item>
          <Input
            sx={{
            width: "60px",
              fontSize:"14px",
              "& .MuiInputAdornment-root .MuiTypography-root":{
                fontSize:"12px",
              }
            }}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.1,
              min: min,
              max:  max,
              type: 'number',
              'aria-labelledby': 'input-slider',
              tabIndex:tabIndex
            }}
            endAdornment={<InputAdornment position="end"  >{unit}</InputAdornment>}
          />
        </Grid>
      </Grid>
    </Box>
  );
}



export default InputNoIcon