import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Butt from './Button'
import Checklist from './Checklist'
import { Colourful } from './components/styling';
import { StatedFunc } from './components/webhooks';
import {LessonComp} from './components/16-9'
import { Component20, Convo, Timer } from './components/20-9';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Convo/>
    <br/>
    <Component20/>
    <LessonComp/>
    <StatedFunc />
    <Butt />
    <Checklist/>
    <Colourful />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
