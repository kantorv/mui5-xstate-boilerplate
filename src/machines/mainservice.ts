
 import mainMachine from './mainmachine'
import { interpret  } from "xstate";
import { inspect } from "@xstate/inspect";
  

let isProd = process.env.REACT_APP_STAGE === 'prod' 



// !isProd &&  inspect({
//   url: "https://statecharts.io/inspect",
//   iframe: false
// }) 

const service = interpret( mainMachine, {devTools:!isProd,  execute: true }  )

service.start()
export { service }

 