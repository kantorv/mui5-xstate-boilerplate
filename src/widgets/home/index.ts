import{ Main as HomeMain}  from './main/Main'
import{ Main as HomeSidebar}  from './sidebar/Main'
import widgetMachine   , { WidgetMachineActorType } from '../home/machine'

 
export {HomeMain, HomeSidebar, widgetMachine as homeMachine}
export type {WidgetMachineActorType as HomeMachineActorType}