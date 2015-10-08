import React, { PropTypes } from 'react';

export default class HelloWorld extends React.Component{
    static displayName = 'HelloWorld';

    static propTypes = {
        subHead: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h1>Hello World!!</h1>
                <h3>{this.props.subHead.value}</h3>
            </div>
        );
    }
}