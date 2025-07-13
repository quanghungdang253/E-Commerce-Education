import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>    
  <StrictMode>
     <Provider store={store}>  
               <App />
          </Provider>
  </StrictMode>,
</BrowserRouter>
)
