import React from 'react';
//var React = require('react');
import ReactDOM from 'react-dom';
import "babel-polyfill";
import "./style.css";

var MyComponentClass = React.createClass(
	{
        render: function () {
          return  (<h1>Helllllo World</h1>);        
        }
    }
);

ReactDOM.render(
	<MyComponentClass />,
  document.getElementById('app2')
);
            