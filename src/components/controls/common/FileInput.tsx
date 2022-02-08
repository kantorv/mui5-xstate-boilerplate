import React, { useEffect, useState, useRef } from 'react'; 
import EditIcon from '@mui/icons-material/Edit';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {Box, Button} from '@mui/material';

import { fromEvent, from, merge , interval } from 'rxjs';
import { map } from 'rxjs/operators';



 
type FileInputProps =   {
    onChange: (
      data: UploadedFile
    )=>void
}


const FileInputEl = (props:FileInputProps)=> {

  const {onChange} = props
 const ref = useRef<HTMLInputElement>(null!)

 

 useEffect(()=>{
  if(!ref.current) return


  fromEvent( ref.current as HTMLInputElement, 'change').pipe(
    map((e:any)=>e.target.files && e.target.files[0]),
    map((file:File)=> {
      console.log("[FileInputEl] inside observable, file:", file)

      const {
        name,
        size, 
        type,
        lastModified
      } = file



      const url = URL.createObjectURL(file) 

      return {
        ...{
          name,
          size, 
          type,
          lastModified
        },
        url:url
        
      }
    })
  )
  .subscribe(
    (data)=> onChange(data)
  )

},[])


 
  return (
 <Box 
    component="div"

    sx={{
      p:1,
      width:"100%",
      display: 'flex',
     
  }}>
    
   
<Button
    sx={{
      width:"100%",
    }}
    variant="contained"
    color="secondary"
    
    startIcon={<AddAPhotoIcon />}
    onClick={()=> ref.current && ref.current.click()}
    >
    Upload Image
    </Button>
    <input
        accept="image/*"
        style={{
            display:"none"
        }}
        ref={ref}
        type="file"
        //onChange={(e:any)=>onChange(e.target.files)}

    />
  
      
    </Box>
 
  );
}


export default FileInputEl



