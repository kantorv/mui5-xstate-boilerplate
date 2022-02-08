import React from "react";
import { createMachine, assign, send, spawn } from "xstate";
import { ContextFrom, EventFrom , ActorRefFrom} from 'xstate';
import { fromEvent, EMPTY } from 'rxjs';
import {  throttleTime, map  } from 'rxjs/operators';
//import { sidebarMachine } from './sidebarmachine'








type MachineContext  = { 
    value:string
};  



type MachineState =
| { value: "idle"; context:MachineContext  }



type MachineEvent =  

  | { type: "EVENTS.MACHINE.INIT" }
  

 




 


const widgetMachine = createMachine<
    MachineContext, 
    MachineEvent,
    MachineState
>({
    id: 'widgetmachine',
    initial: 'idle',
    context: {
        value:"some string"
  
    },
    on:{
        "EVENTS.MACHINE.INIT": {
            actions:(_,e)=>console.log(e)
        }
    },
    states:{
        idle:{
            entry:(_,e)=> console.log("mainmachine.home entry", e, _),
            exit:(_,e)=> console.log("mainmachine.home exit", e, _),
            on:{
               
  
            }
        },



    }
},{
    actions:{

 

    },
    services:{
       
    }


 

});



export default widgetMachine
export type WidgetMachineActorType = ActorRefFrom<typeof widgetMachine>