import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import imageData from './Component/createDataComponent.jsx'

const data = imageData()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 style={{
      textAlign:"center"
    }}>Kalvium gallary</h1>
    <div className='gridContainerStyle'>
      <App id="1" imgLink={data[0].img}/>
      <App id="2" imgLink={data[1].img}/>
      <App id="3" imgLink={data[2].img}/>
      <App id="4" imgLink={data[3].img}/>
    </div>
  </React.StrictMode>,
)