import React from 'react';
import 'styles/header.css';
import Menu from 'components/Menu.js';


class Header extends React.Component {
    render() {
        return (
            <div>
                <Menu />
            </div>
        )
    }
}

export default Header;