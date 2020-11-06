import React from 'react';

export default props => (
    <li className="nav-item">
        <a className="nav-link" href={props.href}>{props.value}</a>
    </li>
)