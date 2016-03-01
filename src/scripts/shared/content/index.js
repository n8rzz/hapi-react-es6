import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { tempAction } from '../actions/tempActions';
import HelloWorld from './components/HelloWorld';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
class App extends React.Component{
    /**
     * @props displayName
     * @type {String}
     */
    static displayName = 'App';

    /**
     * @property {Object} propTypes
     * @type {Object}
     */
    static propTypes = {
        /**
         * @props children
         * @type {Object}
         */
        temp: PropTypes.string
    };

    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <HelloWorld
                    greeting={ "Glad you made it..." }
                    temp={ this.props.temp } />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        temp: state.temp.payload
    };
}

function mapDispatchToProps(dispatch) {
    return {
        tempAction: dispatch(tempAction())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);