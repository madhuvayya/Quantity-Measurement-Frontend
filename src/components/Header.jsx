import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="quanment" href="/">Quanment</a>
                <a className="history" href="/history">{this.props.navLinkName}</a>
            </div>
        ) 
    }
}

export default Header;