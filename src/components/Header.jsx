import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="quanment">Quanment</a>
                <a className="history">History</a>
            </div>
        ) 
    }
}

export default Header;