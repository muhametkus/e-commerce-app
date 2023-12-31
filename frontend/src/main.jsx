import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainLayout>
      <App/>
    </MainLayout>
  </React.StrictMode>
)
