import {useEffect,useState} from 'react';
import {Card, Divider,CardHeader, CardContent }from '@mui/material';
import { styled } from '@mui/material/styles';

import Collapse from '@mui/material/Collapse';
import IconButton,  { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
 
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(-90deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

type ControlsWrapperProps = {
    children?:React.ReactNode
    title:string
    subheader?:string
    icon:any
    expanded:boolean
    expand: ()=>void,
    sxstyles?:SxPropsMap

}

const _sxmappdefaults:SxPropsMap= {
  card:{},
  header:{},
  content:{}
}

const ControlsWrapper = (props:ControlsWrapperProps) => {
 
  const {children,title, subheader,icon, expanded, expand, sxstyles={}} = props;


  const [styles, setStyles] = useState<SxPropsMap>(_sxmappdefaults)

 const _title = <Typography variant="subtitle2"   component="div" sx={{ fontSize:"12px" }}>{title}</Typography>
 const _subheader = <Typography variant="body2" gutterBottom component="div"  sx={{ fontSize:"12px" }}>{subheader}</Typography>


 useEffect(()=>{

  setStyles({
    ..._sxmappdefaults,
    ...sxstyles
  })

 },[])


  return (
    <Card sx={{ borderRadius: 0,py:0,px:1,  boxShadow:0, ...styles.card }}>
      <CardHeader
        avatar={icon}
        action={
        //   <IconButton aria-label="settings" onClick={expand} sx={{ mt:1}}>
        //       <ExpandMoreIcon />
        //   </IconButton>


        <ExpandMore
          sx={{ mt:1}}
          expand={expanded}
          onClick={expand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>


        }
        sx={{
            py:1,
            px:1,
            ...styles.header
          
        }}
        title={_title}
        subheader={_subheader}
      />
          <Divider />
    
      <Collapse in={expanded} timeout="auto" unmountOnExit>
         
 
        <CardContent  sx={{
            py:1,
            px:0.2,
            ...styles.content

        }}>
        
             {children}
        </CardContent>
        <Divider />
      </Collapse>
    </Card>
  );
}



export default ControlsWrapper