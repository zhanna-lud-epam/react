import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false };
    }

    toggleState(){
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log (this.state.isOpened);
        let dText;
        if(this.state.isOpened){
            dText = <div>Bla-bla-bla-bla</div>;
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                Dropdown
                {dText}
            </div>
        );
    }
}

export default Dropdown;
