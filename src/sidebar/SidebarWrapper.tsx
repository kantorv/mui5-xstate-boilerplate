
import {useEffect} from 'react'
import  {useActor} from '@xstate/react'
import Toolbar from '@mui/material/Toolbar';
import { Button, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeSidebar, WidgetASidebar, WidgetBSidebar } from '../widgets';
import IconTabs from './components/TopTabs';
import WidgetMenuButtons from './components/WidgetMenuButtons'
import {service as mainService} from '../machines/mainservice'

 
const SidebarWrapper = ()=>{
    const navigate = useNavigate();
    const location = useLocation();


    const [current, _send] = useActor(mainService)
    
    

    useEffect(()=>{
        console.log("SidebarWrapper location update", location, current.value)
        const {pathname} = location
        if(pathname === '/widgeta' && !current.matches('widgeta')) changeWidgetNoNav('widgeta') 
        if(pathname === '/widgetb' && !current.matches('widgetb')) changeWidgetNoNav('widgetb') 
        if(pathname === '/' && !current.matches('home')) changeWidgetNoNav('home') 
    },[location])
    


 
    const changeWidget = (name:string)=>_send({type:"EVENTS.WIDGET.SET",name:name, callback:()=>navigate(`/${name === 'home'?'':name}`)    })
    const changeWidgetNoNav = (name:string)=>_send({type:"EVENTS.WIDGET.SET",name:name, callback:()=>{}   })


   // const showList = ()=>_send({type:"EVENTS.SIDEBARWIDGETS.SHOWLIST" , callback:()=>navigate("/")   })


   const changeEditorView = (path:string)=>{
    //    _send({type:"EVENTS.SIDEBARWIDGETS.SET", path:path  } )
    //     navigate(`/${path}`)
    }
  //  const changeEditorView = (path:string)=>navigate("/") 

    

 

    return (
    <Box  
        component="div"
        sx={{
            flexGrow:1,
        
            display: "flex",
            flexDirection: "column"
        }}
    >

        <Toolbar >
          {
          current.matches("home")?    <IconTabs changeWidget={()=>{}}  />:
          current.matches("widgeta") || current.matches("widgetb")?      
          
            <WidgetMenuButtons 
                showList={()=>changeWidget('home')} 
                changeEditorView={changeEditorView} 
                disableConvert={false} 
                disablePrint={false} 
            
            />
          
          :null}

        </Toolbar>
        <Divider />
        <Box
            component="div"
            sx={{
                display:"flex",
                flexDirection:"column",
                flexGrow:1
            }}
        >
            <Box
                component="div"
                sx={{
                    flexGrow:1
                }}
            >

                    {current.matches("home")?           <HomeSidebar changeWidget={changeWidget}  />         :null}
                    {current.matches("widgeta")?    <WidgetASidebar   />  :null}
                    {current.matches("widgetb")?    <WidgetBSidebar   />  :null}
                        {/* 
                    {current.matches("widget.cone")?           <ConeWidgetControls service={current.children.cone} />:null}
                    {current.matches("widget.convert")?        <ConvertWidgetControls service={current.children.convert} />:null}
                    {current.matches("widget.print")?          <PrintWidgetControls service={current.children.print} />:null} */}

            </Box>

            
        </Box>
    </Box>
    )
}

export default SidebarWrapper