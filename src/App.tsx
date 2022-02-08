import './App.css';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

import {
  BrowserRouter,
} from "react-router-dom";

import Router from './routes'
 
const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig>
    
        <GlobalStyles />
        <Router />
      </ThemeConfig>
    </BrowserRouter>
  );
};

export default App;