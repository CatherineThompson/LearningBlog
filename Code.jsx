import React from 'react';
import './style.css';

export default React.createClass(
    {
        render: function () {
            return(
                <code className="code">{this.props.children}</code>
            );
        }
    }
);