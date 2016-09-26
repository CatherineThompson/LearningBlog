import React from 'react';

var Code = React.createClass(
    {
        render: function () {
            return(
                <code class="code">{this.props.children}</code>
            );
        }
    }
);

module.exports = Code;