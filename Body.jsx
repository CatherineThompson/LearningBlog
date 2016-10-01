import React from 'react';
import './style.css';

export default React.createClass(
    {
        render: function() {
            return(
                <div className="body">
                    {this.props.children}
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            );
        }
    }
);
