import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Code from './Code.jsx';

export var Entry1 = React.createClass(
    {


        render: function() {
            return(
                <div>
                    <Header>Sept 14, 2016</Header>
                    <Body>
                        <p>
                            Example:

                        </p>
                        <p>
                            <b>
                                ReactJS:
                                <br />
                                Creating a React Component with a Component Class in JS.
                                <br />
                                <br />
                            </b>
                        </p>
                        <p>
                            Create a variable:	    <Code>var MyComponentClass</Code> 	    //must be UpperCamelCase
                            <br />
                            <br />
                            <br />
                            Set var equal to a Class:	    <Code>React.createClass()</Code>    	//calls on React library method
                            <br />
                            <br />
                            <br />
                            Place instructions Object in createClass method:	    <Code>{'{render:	function()}'}</Code>    	//must contain a render function
                            <br />
                            <br />
                            <br />
                            Function must return a JSX element:		    <Code>function() {'{ return	(JSX element);}'}</Code>
                            <br />
                            <br />
                        </p>
                        <p>
                            Render Component:		<Code>ReactDOM.render(&lt;MyComponentClass /&gt;),
                             document.getElementById(‘app’));</Code>
                            //appends the return element in the render function into the element with the id=app in the html file
                        </p>
                    </Body>
                </div>
            );
        }
    }
)

export var Entry2 = React.createClass(
    {
        render: function () {
            return(
                <Body>Entry 2 llllsaddm
                    ddmdlkadklsdnfklsdnflksd
                    nfl
                    ksdnflk
                    dsfnls dkfnlksdn flkdsfnlkds nflksd n flkdsnflk sdfn
                    lskdnf sdlkfns dlkfn sdlknflkdsf</Body>
            );

        }
    }
);

export var Entry3 = React.createClass(
    {
        render: function () {
            return(
                <p>Entry 3</p>
            );

        }
    }
);

