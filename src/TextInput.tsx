import React, { Component } from 'react';

export interface TextInputProps {
    inputValue: string,
    handleChange: any
}

class TextInput extends Component<TextInputProps> {
    render() {
        return (
            <input type="text" value={this.props.inputValue} onChange={this.props.handleChange} />
        );
    }
}

export default TextInput;
