import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './features/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store ={store}>
          <BrowserRouter>
            <App title="Reac Tuturials" num1={20} num2={30} content="React Code"  />  
          </BrowserRouter>
        </Provider>
  </StrictMode>
)
