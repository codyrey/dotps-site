import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {/*<Header />*/}
            <App />
        </BrowserRouter>
    </StrictMode>
)
