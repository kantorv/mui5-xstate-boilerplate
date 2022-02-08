import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './layout/editor/WidgetLayout';

// import CanvasMain from './widget/canvas/Main'

// import ConeMain from './widget/canvas/cone/Main'
// import ImageMain from './widget/canvas/image/Main'
// import ConvertMain from './widget/canvas/convert/Main'
// import PrintMain from './widget/canvas/print/Main'
import {HomeMain, WidgetAMain, WidgetBMain} from './widgets'
// import BoxMain from './widget/cube/Main'

export default function Router() {



  return useRoutes([
    { 
        path: '/', 
        element: <MainLayout /> ,
        children: [
          { path: '/', element: <HomeMain />},
          { path: '/widgeta', element: <WidgetAMain />},
          { path: '/widgetb', element: <WidgetBMain  />},
          // { path: '/convert', element: <ConvertMain  />},
          // { path: '/print', element: <PrintMain  />},
          
        ]
    },



    { path: '*', element: <Navigate to="/" replace /> }
  ]);
}