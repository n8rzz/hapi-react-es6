import React from 'react';
import HelloWorld from './components/HelloWorld';

React.render(
    <HelloWorld subHead={{value: "Sub Heading"}}/>,
    document.getElementById('root')
);