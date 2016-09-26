import React from 'react';

var Header = React.createClass(
    {
        render: function() {
            return (
                <h1 class="header">{this.props.children}</h1>
            );
        }
    }
);

module.exports = Header;