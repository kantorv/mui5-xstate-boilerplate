import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';

 
type WidgetsMap = Record<number, string>

const _tabs_map:WidgetsMap = {
    0: "list",
    1: "settings",
  

}


type TabNumberKey = keyof typeof _tabs_map



export default function IconTabs(props:{
    changeWidget:(name:string)=>void
}) {


    const {changeWidget} = props
  const [value, setValue] = React.useState<TabNumberKey|null>(0);

  


  // React.useEffect(()=>{
  //   setValue(0)
  // },[])

  React.useEffect(()=>{
    value!==null && changeWidget(_tabs_map[value]) 
  },[value])
 // const [parentState, parentTransition, parentInterpreter] = machine
//   const [state, transition, interpreter] = useService(parentInterpreter.children.get('productMachine'))




  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

   console.log("value selected",newValue,_tabs_map[newValue]  )
  };
 
  return (value===null?null:
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
       <Tab icon={<ViewListIcon />} aria-label="list"  sx={{ minWidth:"65px"}}/>

      <Tab icon={<SettingsIcon />} aria-label="settings"  sx={{ minWidth:"65px"}}/>
     


    </Tabs>)
  
}