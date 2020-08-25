import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import MapRoute from './routes/MapRoute'
import Routes from './routes/routes'
import './assets/font/iconfont.css'
import './style/index.css'

ReactDOM.render(
  <BrowserRouter>
  <MapRoute routes={Routes} />

  </BrowserRouter>
   
  ,
  document.getElementById('root')
);

