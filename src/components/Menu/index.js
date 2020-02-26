import React from 'react';

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            <li><Link to="/" classe="active">HOME</Link></li>
            <li><Link to="/registerUser">CADASTRO USUÁRIO</Link></li>
            <li><Link to="/registerProduct">CADASTRO PRODUTO</Link></li>
        </ul>
    );
};

export default Menu;