import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

 

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box 
    component="div"
    sx={{ flexGrow: 0, overflow:"hidden" }}>
 
      <AppBar position="static" color='secondary'>
        <Toolbar sx={{
          overflow:"hidden",
          display:"flex",
          flexDirection:"row"
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          //  href={"/cone"}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow:0   }}>
            Canvas editor
          </Typography>
          <Box  component="div" sx={{ flexGrow:1   }}>
           
        </Box>

        <Box component="div"  sx={{ flexGrow:0   }}>
           {/* <Stepper /> */}
        </Box>
        
         
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}