import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRounter as Rounter} from "react-router-dom"; 

ReactDOM.render(
<Rounter>
<App />
</Rounter>
, document.getElementById('root'));
