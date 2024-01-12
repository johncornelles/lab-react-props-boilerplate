import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataComponent from './components/DataComponents.jsx'
import Appclass from './Appclass.jsx'
const imageArr = DataComponent()
// console.log(imageArr)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App imageArr={imageArr}/>
    {/* <Appclass imageArr={imageArr}/> */}
    
  </React.StrictMode>,
)