import React from 'react';
import {NavType} from '../Nav';
import './NavItem.scss';

export const NavItem = (props: NavType) => {
    return (
            <ul className={`Menu Nav__menu ${props.menuName}`}>
                {props.menuItems.map(mt => {
                    return (
                        <li className="Nav-item">
                            <a key={mt.id} className={mt.itemClass} href={mt.href}>{mt.title}</a>

                        </li>
                    )
                })}
            </ul>
    )
}