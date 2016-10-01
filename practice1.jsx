import React, {Component, PropTypes} from 'react';


//const HeyThere = React.createClass(
//	{
//        render: function () {
//          return  (<p>Heyyyyy!</p>);        
//        }
//    }
//);
//
//export default HeyThere;

class HeyThere extends Component {
    static propTypes = {
        words: PropTypes.string.isRequired
    };

    
    render () {
        return <p>{this.props.words}</p>
    }
}

export default HeyThere;