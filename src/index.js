import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//CSS
import 'bulma/css/bulma.css';
import './assets/styles.css';

//Components
import App from './app';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
