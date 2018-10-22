import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Link extends Component {
    render() {
        //const { onCLick, children, active } = this.props;

        if(this.props.active){
            return (
                <span style= {{marginLeft: 20}}>
                    <Button
                        onClick={this.props.onClick}
                        bsSize="lg"
                        bsStyle="success">
                        {this.props.children}
                    </Button>
                </span>
            )
        }
        return (
            <span style= {{marginLeft: 20}}>
                <Button
                    onClick={this.props.onClick}
                    bsSize="lg"
                    bsStyle="danger">
                    {this.props.children}
                </Button>
            </span>
        )
    }
}

export default Link