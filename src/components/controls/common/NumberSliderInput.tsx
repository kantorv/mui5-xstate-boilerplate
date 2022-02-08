import React, { useEffect } from 'react';

import { Grid,Typography , Slider, Input, Box} from "@mui/material"



type InputProps = {
    title:string,
    value:number,
    min:number
    max:number,
    update: (value:number)=>void,
    icon: React.ReactNode, //OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    tabIndex:number,
    
}

// const useStyles = makeStyles({
//   root: {
// //    width: 250,
//   },
//   input: {
//     width: 42,
//   },
// });
const InputSlider = (props:InputProps)=> {

  const {title, value,min, max,  update, icon, tabIndex} = props;
 
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
    }}>
      <Typography id="input-slider" gutterBottom variant='body2'> 
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {icon}
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            value={typeof _value === 'number' ? _value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{
              width: 42,
              fontSize:"14px"
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}



export default InputSlider