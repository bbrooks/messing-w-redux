import React, { Component } from 'react';

interface ComponentState {
    value: string
}

interface ComponentProps {}

class TextInput extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = { value: "" };
    }
    
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }

    handleChange = (e: any) => {
        this.setState({ value: e.target.value })
    }
}

export default TextInput;
