
import { IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CropIcon from '@mui/icons-material/Crop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import BackupIcon from '@mui/icons-material/Backup';
import PrintIcon from '@mui/icons-material/Print';

import  {useLocation, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
type WidgetMenuButtonsProps = {
    showList:()=>void,
    changeEditorView:(path:string)=>void,
    disableConvert:boolean,
    disablePrint:boolean
}



const WidgetMenuButtons  = (props:WidgetMenuButtonsProps)=>{

const {showList, changeEditorView, disableConvert, disablePrint} = props;

const location = useLocation()
let navigate = useNavigate();

useEffect(()=>{
    console.log("[WidgetMenuButtons] location",location)

},[])

return (

    <Box
        component="div"
        sx={{
            display:"flex",
            flexDirection:"row",
            width:"100%"
        }}
    >



            <IconButton
                size="small"
               
                color="inherit"
                onClick={showList}
            
               // sx={{ mr: 2 }}
                
            >
                <ArrowBackIosIcon />
            </IconButton>

            <Box
                component="div" 
                sx={{flexGrow:1}}
            ></Box>


            <IconButton
                size="small"
                sx={{mr:0.5}}
                onClick={()=>changeEditorView('cone')}
                color={location.pathname !== '/cone'?"primary":"secondary"}
                disabled={location.pathname === '/cone'}
                
                
            >
                <ModelTrainingIcon />
            </IconButton>



            <IconButton
                size="small"
                sx={{mr:0.5}}
                color={location.pathname !== '/image'?"primary":"secondary"}
                onClick={()=>changeEditorView('image')}
                disabled={location.pathname === '/image'}
                
            >
                <CameraAltIcon />
            </IconButton>

            <IconButton
               sx={{mr:0.5}}
                size="small"
                edge="end"
                color={location.pathname !== '/convert'?"primary":"secondary"}
                
                disabled={disableConvert || location.pathname === '/convert'}
                onClick={()=>changeEditorView('convert')}
                
                
            >
                <BackupIcon />
            </IconButton>


            <IconButton
                size="small"
                edge="end"
                color={location.pathname !== '/print'?"primary":"secondary"}
                
                disabled={disablePrint || location.pathname === '/print'}
                onClick={()=>changeEditorView('print')}
                
                
            >
                <PrintIcon />
            </IconButton>


            

    </Box>
    )
}


export default WidgetMenuButtons

