import React from 'react';
import {NavType} from '../Nav';

export const NavItem = (props: NavType) => {
    return (
            <ul className={`menu nav__menu ${props.menuName}`}>
                {props.menuItems.map(mt => {
                    return (
                        <li className="nav-item">
                            <a key={mt.id} className={mt.itemClass} href={mt.href}>{mt.title}</a>
                        </li>
                    )
                })}
            </ul>
    )
}