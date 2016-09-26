import React from 'react';

var Body = React.createClass(
    {
        render: function() {
            return(
                <div class="body">{this.props.children}</div>
            );
        }
    }
);

module.exports = Body;