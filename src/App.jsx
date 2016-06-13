import React from 'react';
import ReactDOM from 'react-dom';

//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();

//Routes
import routes from 'routes';

ReactDOM.render(routes, document.querySelector('#app'));
