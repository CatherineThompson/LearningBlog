import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import HeyThere from "./practice1.jsx";
import Button from "./Button.jsx";
import {Entry1, Entry2, Entry3} from './JournalEntries.jsx';
import Header from './Header.jsx';
import Code from './Code.jsx'
import Body from './Body.jsx'
import "./storePrac.jsx";
import "./storePrac2.jsx";


//Colors to change div color
var green = '#39D1B4';
var yellow = '#FFD712';

var MyComponentClass = React.createClass(
	{
        getInitialState: function() {
            return( { color: green} );
        },

	    handleClick: function() {
            var changeColor = this.state.color == 'green' ? 'yellow' : 'green';
            this.setState( { color: changeColor });
        },

	    render: function () {
          if(this.props.greet == 1) {
              return (
                  <div style={ { background: this.state.color } }>
                      <Button onClick={this.handleClick} >Button Version 1</Button>
                      <HeyThere words="greet type 1"/>
                  </div>);
          }
          else if(this.props.greet == 2) {
              return (
                  <div style={ { background: this.state.color } }>
                      <Button onClick={this.handleClick} >Button Version 1</Button>
                      <HeyThere words="greet type 2"/>
                  </div>);
          }
          else {
              return (
                  <div style={ { background: this.state.color } }>
                      <Button onClick={this.handleClick} >Button Version 1</Button>
                      <HeyThere words="no greet type"/>
                  </div>);

          }

        }
    }
);
var PleaseWork = React.createClass (
    {
        render: function () {
            return (
                <div>
                    <Header>stuff</Header>

                </div>
            );
        }
    }
);

function compare(a, b){
    return a.id < b.id;
}

var Entries = [{id: 1, publishedOn: "Sept. 14, 2016", component: <Entry1 />},
    {id: 2, publishedOn: "Sept. 28, 2016", component: <Entry2 />},
    {id: 3, publishedOn: "Sept. 28, 2016", component: <Entry3 />}];   //React.createFactory(Entry1)}];
Entries.sort(compare);

var BlogPost = React.createClass(
    {
        propTypes: {
            entries: PropTypes.array.isRequired
        },

        render: function() {
            return(
                <div>
                    {this.props.entries.map(function(entry){
                        return(
                            <div key={entry.id}>{entry.component}</div>
                        );
                    })

                    }
                </div>);
        }
    });

ReactDOM.render(
	<BlogPost entries={Entries} />,
  document.getElementById('app2')
);


         