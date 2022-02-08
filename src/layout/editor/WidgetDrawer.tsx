
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
 import SidebarWrapper from '../../sidebar/SidebarWrapper';




const drawerWidth = 240
const  WidgetDrawer = ()=>{

 


    return (
        <Drawer
        sx={{
          width: drawerWidth,
      //    overflow:"hidden" ,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            display: "flex",
            flexDirection: "column",
            mt:8,
            pb:8,
          //  boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
 
        <Box   component="div"
            sx={{
          flexGrow:1,
     //     background:"yellow",
          display: "flex",
          flexDirection: "column",
        }}>
        <SidebarWrapper   />
      </Box>
      
        
      </Drawer>
    )
}


export default WidgetDrawer