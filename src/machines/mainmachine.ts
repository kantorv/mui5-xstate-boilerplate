import React from "react";
import { createMachine, assign, send, spawn } from "xstate";
import { ContextFrom, EventFrom , ActorRefFrom} from 'xstate';
import { fromEvent, EMPTY } from 'rxjs';
import {  throttleTime, map  } from 'rxjs/operators';
//import { sidebarMachine } from './sidebarmachine'

import {
    homeMachine,
    widgetAMachine,
    widgetBMachine
} from '../widgets'






type MachineContext  = { 

};



type MachineState =
| { value: "home"; context:MachineContext  }
| { value: "widgeta"; context:MachineContext  }
| { value: "widgetb"; context:MachineContext  }


type MachineEvent =  
  | { type: "EVENTS.WINDOW.RESIZE", data:any }
  | { type: "EVENTS.WIDGET.SET", name:string, callback:()=>void }
  

  const windowresize$ = fromEvent(window, 'resize').pipe(
     throttleTime(500),
  //  debounce(() => interval(300)),
     map(x=>({type : "EVENTS.WINDOW.RESIZE", data : x}))
 );
 
 




 


const mainMachine = createMachine<
    MachineContext, 
    MachineEvent,
    MachineState
>({
    id: 'mainmachine',
    initial: 'home',
    context: {
        canvas:undefined,
        viewport:{
            height:1200,
            width:1200
        },

  
    },
    on:{
        "EVENTS.WIDGET.SET":[
            {
                target:"home",
                cond:(_,e)=>e.name === 'home',
                actions:(_,e)=>e.callback() //navigate
            },
            {
                target:"widgeta",
                cond:(_,e)=>e.name === 'widgeta',
                actions:(_,e)=>e.callback() //navigate
            },
            {
                target:"widgetb",
                cond:(_,e)=>e.name === 'widgetb',
                actions:(_,e)=>e.callback() //navigate
            }
        ]
    },
    states:{
        home:{
            invoke:{
                id:"home",
                src:"home"
            },
            entry:(_,e)=> console.log("mainmachine.home entry", e, _),
            exit:(_,e)=> console.log("mainmachine.home exit", e, _),
            on:{
               
  
            }
        },

        widgeta:{
          entry:(_,e)=> console.log("mainmachine.widgeta entry", e),
          exit:(_,e)=> console.log("mainmachine.widgeta exit", e),
          invoke:{
            id:"widgeta",
            src:"widgeta"
          },
          on:{
           
      
          },


        },
        widgetb:{
            entry:(_,e)=> console.log("mainmachine.widgeta entry", e),
            exit:(_,e)=> console.log("mainmachine.widgeta exit", e),
            invoke:{
                id:"widgetb",
                src:"widgetb"
            },
            on:{
             
        
            },
  
  
          }

    }
},{
    actions:{

 

    },
    services:{
        home:homeMachine,
        widgeta:widgetAMachine,
        widgetb:widgetBMachine,
    }

  
 

});



export default mainMachine
export type MainMachineActorType = ActorRefFrom<typeof mainMachine>