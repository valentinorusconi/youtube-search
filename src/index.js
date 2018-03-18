import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyB2Fy0irdVm4Mm_HBJZTX3QObEF1C9g4uc';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
