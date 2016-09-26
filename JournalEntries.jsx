import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Code from './Code.jsx';

var Entry1 = React.createClass(
    {

        render: function() {
            return(
                <div>
                    <Header>Sept 14, 2016</Header>
                    <Body>
                        <Code>this is code</Code>
                    </Body>
                </div>
            );
        }
    }
);

module.exports = Entry1;