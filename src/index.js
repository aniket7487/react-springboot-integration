import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BroadBand from './Components/BroadBand';
import BroadbandFunctional from './Components/Broadband/BroadbandFunctional';
import UseHook from './Components/UseHook';
import FormsWithValidation from './Components/Broadband/FormsWithValidation';
import CheckboxMultiple from './Components/Broadband/CheckboxMultiple';

const json = {
  question: 'Gender',
  choices:
  [
    { text: 'Male', value: 'M' },
    { text: 'Female', value: 'F' }
  ]
}
ReactDOM.render(
  <React.StrictMode>
    {/* <BroadBand model={json} /> */}
    <BroadbandFunctional/>
    {/* <FormsWithValidation/>  */}
    {/* <UseHook/> */}
    {/* <CheckboxMultiple/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
