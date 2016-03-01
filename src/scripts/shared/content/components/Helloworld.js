import React, { PropTypes } from 'react';

/**
 * @class  HelloWorld
 */
class HelloWorld extends React.Component{

    /**
     * @property displayName
     * @type {String}
     * @final
     */
    static displayName = 'HelloWorld';

    /**
     * @property propTypes
     * @type {Object}
     */
    static propTypes = {

        /**
         * @props greeting
         * @type {String}
         */
        greeting: PropTypes.string.isRequired,

        /**
         * @props temp
         * @type {String}
         */
        temp: PropTypes.string
    };

    /**
     * @property defaultProps
     * @type {Object}
     */
    static defaultProps = {
        greeting: 'This is a default prop'
    };

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h1>Hello World!!</h1>
                <h3>{ this.props.greeting }</h3>
                <br />
                <div>Anything after me was fetched with an action/reducer: </div>
                <h3>{ this.props.temp }</h3>

            </div>
        );
    }
}

export default HelloWorld;
