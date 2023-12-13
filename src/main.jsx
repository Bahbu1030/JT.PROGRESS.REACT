import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
import 'https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css'
import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
import './index.css'
import {bundle} from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
