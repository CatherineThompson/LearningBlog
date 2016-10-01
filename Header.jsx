import React from 'react';
import './style.css';

export default React.createClass(
    {
        render: function() {
            return (
                <h1 className="header">{this.props.children}</h1>
            );
        }
    }
);
