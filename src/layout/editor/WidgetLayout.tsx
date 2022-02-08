import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import WidgetDrawer from './WidgetDrawer';
import WidgetAppBar from './WidgetAppBar';


export default function PermanentDrawerRight() {
  return (
    <Box   component="div"  sx={{ height: '100%',  display: 'flex',  flexDirection:"column" }}>
        <WidgetAppBar  />

        <Box   component="div" sx={{ display: 'flex', flexDirection:"row", flexGrow: 1  }}>
            <Box
                component="main"
                sx={{ flexGrow: 1  }}
            >
                <Outlet />
            </Box>
            <WidgetDrawer />
        </Box>
    </Box>
  );
}