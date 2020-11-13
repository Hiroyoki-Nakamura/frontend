import React from 'react';

export default props => (
    <li className="nav-item dropdown">
        <a className="nav-link btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            {props.value}
        </a>
        {props.children}
    </li>
)