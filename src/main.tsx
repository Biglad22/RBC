import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './ThemeProvider';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>  
  </StrictMode>,
)
