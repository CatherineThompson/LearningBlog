import React from 'react';
import './style.css';

var Button = React.createClass(
    {
        render: function() {
            return (
                <button onClick={this.props.onClick}>{this.props.children}</button>
            );
        }
    }
);

module.exports = Button;